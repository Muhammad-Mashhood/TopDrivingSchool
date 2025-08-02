export const runtime = 'edge';

import { z } from 'zod';

const DrivingTipsSchema = z.object({
  weatherConditions: z.string().min(3, { message: "Weather conditions must be described." }),
  majorStreets: z.string().min(3, { message: "Please list at least one major street." }),
  constructionUpdates: z.string().min(3, { message: "Please provide construction updates." }),
});

// Static driving tips generator (for now, until we can properly integrate AI)
function generateStaticTips(data: { weatherConditions: string; majorStreets: string; constructionUpdates: string }): string[] {
  const tips = [];
  
  // Weather-based tips
  const weather = data.weatherConditions.toLowerCase();
  if (weather.includes('rain') || weather.includes('wet')) {
    tips.push("Reduce speed and increase following distance in wet conditions.");
    tips.push("Use headlights and ensure windshield wipers are in good condition.");
  }
  if (weather.includes('fog') || weather.includes('mist')) {
    tips.push("Use fog lights and drive slowly with increased alertness in foggy conditions.");
  }
  if (weather.includes('snow') || weather.includes('ice')) {
    tips.push("Drive extremely cautiously on icy roads and consider winter tires.");
  }
  
  // Street-specific tips
  const streets = data.majorStreets.toLowerCase();
  if (streets.includes('a56') || streets.includes('motorway') || streets.includes('dual carriageway')) {
    tips.push("Maintain proper lane discipline on major roads and check mirrors frequently.");
  }
  if (streets.includes('town center') || streets.includes('city center')) {
    tips.push("Watch for pedestrians and cyclists in busy town center areas.");
  }
  
  // Construction-based tips
  const construction = data.constructionUpdates.toLowerCase();
  if (construction.includes('closure') || construction.includes('roadwork')) {
    tips.push("Plan alternative routes and allow extra time for construction delays.");
  }
  if (construction.includes('lane') || construction.includes('narrow')) {
    tips.push("Reduce speed through construction zones and follow temporary signage carefully.");
  }
  
  // Fill with generic tips if we don't have 5 yet
  const genericTips = [
    "Maintain a safe following distance of at least 3 seconds behind the vehicle ahead.",
    "Check your mirrors regularly and be aware of your surroundings.",
    "Keep your speed appropriate for the current road and weather conditions.",
    "Ensure your vehicle is properly maintained with good tires and working lights.",
    "Stay focused and avoid distractions while driving."
  ];
  
  // Add generic tips to reach 5 total
  for (const genericTip of genericTips) {
    if (tips.length < 5 && !tips.some(tip => tip.includes(genericTip.substring(0, 20)))) {
      tips.push(genericTip);
    }
  }
  
  return tips.slice(0, 5);
}

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
    
    const tips = generateStaticTips(validatedFields.data);
    
    return Response.json({
      message: 'success',
      tips: tips,
    });
    
  } catch (error) {
    console.error('Error generating tips:', error);
    
    return Response.json({
      message: 'An unexpected error occurred while generating tips. Please try again.',
    }, { status: 500 });
  }
}
