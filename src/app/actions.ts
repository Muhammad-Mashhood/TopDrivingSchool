'use server';

import { generateDrivingTips, type GenerateDrivingTipsInput } from '@/ai/flows/generate-driving-tips';
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

export async function getDrivingTips(prevState: DrivingTipsState, formData: FormData): Promise<DrivingTipsState> {
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
        const input: GenerateDrivingTipsInput = validatedFields.data;
        const result = await generateDrivingTips(input);
        if (result.drivingTips.length === 0) {
            return {
                message: "Couldn't generate tips based on the provided information. Try being more specific.",
            }
        }
        return {
            message: 'success',
            tips: result.drivingTips,
        };
    } catch (error) {
        console.error(error);
        return {
            message: 'An unexpected error occurred on the server. Please try again.',
        };
    }
}
