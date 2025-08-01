'use server';

import { z } from 'zod';

const DrivingTipsSchema = z.object({
  weatherConditions: z.string().min(3, { message: "Weather conditions must be described." }),
  majorStreets: z.string().min(3, { message: "Please list at least one major street." }),
  constructionUpdates: z.string().min(3, { message: "Please provide construction updates." }),
  configuredTips: z.string().optional(),
});

export type DrivingTipsState = {
  message: string;
  tips?: string[];
  errors?: {
    weatherConditions?: string[];
    majorStreets?: string[];
    constructionUpdates?: string[];
    configuredTips?: string[];
  };
};

// Fallback tips without AI
const generateFallbackTips = (data: any): string[] => {
  const tips = [
    "Always check weather conditions before driving",
    "Plan your route considering traffic and construction",
    "Maintain a safe following distance",
    "Keep your vehicle in good condition",
    "Stay alert and avoid distractions while driving"
  ];

  // Add weather-specific tips
  if (data.weatherConditions.toLowerCase().includes('rain')) {
    tips.push("Reduce speed in wet conditions and increase following distance");
  }
  if (data.weatherConditions.toLowerCase().includes('snow')) {
    tips.push("Drive slowly in snow and ensure you have proper winter tires");
  }

  return tips.slice(0, 5); // Return max 5 tips
};

export async function getDrivingTipsFallback(prevState: DrivingTipsState, formData: FormData): Promise<DrivingTipsState> {
    const validatedFields = DrivingTipsSchema.safeParse({
        weatherConditions: formData.get('weatherConditions'),
        majorStreets: formData.get('majorStreets'),
        constructionUpdates: formData.get('constructionUpdates'),
        configuredTips: formData.get('configuredTips'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Please correct the errors below and try again.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }
    
    try {
        const tips = generateFallbackTips(validatedFields.data);
        return {
            message: 'success',
            tips: tips,
        };
    } catch (error) {
        console.error('Fallback Error:', error);
        return {
            message: 'An unexpected error occurred. Please try again.',
        };
    }
}
