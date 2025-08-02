export const runtime = 'edge';

import { generateDrivingTips, type GenerateDrivingTipsInput } from '@/ai/flows/generate-driving-tips';
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
    
    const input: GenerateDrivingTipsInput = validatedFields.data;
    const result = await generateDrivingTips(input);
    
    // Ensure we have exactly 5 tips
    let tips = result.drivingTips;
    
    if (tips.length === 0) {
      return Response.json({
        message: "Couldn't generate tips based on the provided information. Try being more specific.",
      }, { status: 400 });
    }
    
    // If we have more than 5 tips, take the first 5
    if (tips.length > 5) {
      tips = tips.slice(0, 5);
    }
    
    // If we have fewer than 5 tips, add generic ones to reach 5
    while (tips.length < 5) {
      const genericTips = [
        "Maintain a safe following distance of at least 3 seconds behind the vehicle ahead.",
        "Check your mirrors regularly and be aware of your surroundings.",
        "Keep your speed appropriate for the current road and weather conditions.",
        "Ensure your vehicle is properly maintained with good tires and working lights.",
        "Stay focused and avoid distractions while driving."
      ];
      
      // Add generic tips that aren't already included
      for (const genericTip of genericTips) {
        if (tips.length < 5 && !tips.some(tip => tip.toLowerCase().includes(genericTip.toLowerCase().substring(0, 10)))) {
          tips.push(genericTip);
        }
      }
      break; // Prevent infinite loop
    }
    
    return Response.json({
      message: 'success',
      tips: tips.slice(0, 5), // Ensure exactly 5 tips
    });
    
  } catch (error) {
    console.error('AI Generation Error:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return Response.json({
          message: 'AI service configuration error. Please contact support.',
        }, { status: 500 });
      }
      if (error.message.includes('quota') || error.message.includes('limit')) {
        return Response.json({
          message: 'AI service temporarily unavailable. Please try again later.',
        }, { status: 429 });
      }
    }
    
    return Response.json({
      message: 'An unexpected error occurred while generating tips. Please try again.',
    }, { status: 500 });
  }
}
