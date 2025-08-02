export const runtime = 'edge';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

const DrivingTipsSchema = z.object({
  weatherConditions: z.string().min(3, { message: "Weather conditions must be described." }),
  majorStreets: z.string().min(3, { message: "Please list at least one major street." }),
  constructionUpdates: z.string().min(3, { message: "Please provide construction updates." }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const validatedFields = DrivingTipsSchema.safeParse(body);

    if (!validatedFields.success) {
      return Response.json(
        {
          message: 'Please correct the errors below and try again.',
          errors: validatedFields.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // Initialize Google AI with API key from environment
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return Response.json({
        message: 'AI service configuration error. Please contact support.',
      }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Generate exactly 5 specific, practical driving safety tips for Altrincham, Manchester based on these current conditions:

Weather: ${validatedFields.data.weatherConditions}
Major Streets/Areas: ${validatedFields.data.majorStreets}
Construction Updates: ${validatedFields.data.constructionUpdates}

Requirements:
- Each tip should be specific to the conditions provided
- Focus on safety and practical advice
- Keep each tip concise (1-2 sentences)
- Include local knowledge when possible
- Return as a JSON array of exactly 5 strings

Example format: ["tip 1", "tip 2", "tip 3", "tip 4", "tip 5"]`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Try to parse the JSON response
    let tips: string[];
    try {
      tips = JSON.parse(text);
      if (!Array.isArray(tips) || tips.length !== 5) {
        throw new Error('Invalid response format');
      }
    } catch {
      // Fallback: split by lines and clean up
      tips = text
        .split('\n')
        .filter(line => line.trim() && !line.includes('```') && !line.includes('[') && !line.includes(']'))
        .map(line => line.replace(/^\d+\.\s*/, '').replace(/^[-*]\s*/, '').replace(/^"/, '').replace(/"$/, '').trim())
        .filter(line => line.length > 10)
        .slice(0, 5);

      // If we still don't have 5 tips, add generic ones
      const genericTips = [
        "Maintain a safe following distance of at least 3 seconds behind the vehicle ahead.",
        "Check your mirrors regularly and be aware of your surroundings.",
        "Keep your speed appropriate for the current road and weather conditions.",
        "Ensure your vehicle is properly maintained with good tires and working lights.",
        "Stay focused and avoid distractions while driving."
      ];

      while (tips.length < 5) {
        const genericTip = genericTips[tips.length % genericTips.length];
        if (!tips.includes(genericTip)) {
          tips.push(genericTip);
        }
      }
    }

    return Response.json({
      message: 'success',
      tips: tips.slice(0, 5),
    });

  } catch (error) {
    console.error('AI Generation Error:', error);
    
    // Fallback to static tips
    const staticTips = [
      "Reduce speed and increase following distance in current weather conditions.",
      "Use headlights and ensure windshield wipers are in good condition.",
      "Plan alternative routes and allow extra time for any construction delays.",
      "Watch for pedestrians and cyclists in busy Altrincham town center areas.",
      "Maintain proper lane discipline on A56 and check mirrors frequently."
    ];

    return Response.json({
      message: 'success',
      tips: staticTips,
    });
  }
}
