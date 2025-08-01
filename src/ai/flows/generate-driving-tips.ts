// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An AI agent that provides driving tips tailored to local Manchester conditions.
 *
 * - generateDrivingTips - A function that generates driving tips based on the Manchester weather, major streets, and construction conditions.
 * - GenerateDrivingTipsInput - The input type for the generateDrivingTips function.
 * - GenerateDrivingTipsOutput - The return type for the generateDrivingTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDrivingTipsInputSchema = z.object({
  weatherConditions: z
    .string()
    .describe('The current weather conditions in Manchester.'),
  majorStreets: z
    .string()
    .describe('A list of major streets and intersections in Manchester.'),
  constructionUpdates: z
    .string()
    .describe('Information about any current or upcoming construction in Manchester.')
});
export type GenerateDrivingTipsInput = z.infer<
  typeof GenerateDrivingTipsInputSchema
>;

const GenerateDrivingTipsOutputSchema = z.object({
  drivingTips: z.array(z.string()).describe('A list of driving tips.')
});
export type GenerateDrivingTipsOutput = z.infer<
  typeof GenerateDrivingTipsOutputSchema
>;

export async function generateDrivingTips(
  input: GenerateDrivingTipsInput
): Promise<GenerateDrivingTipsOutput> {
  return generateDrivingTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDrivingTipsPrompt',
  input: {schema: GenerateDrivingTipsInputSchema},
  output: {schema: GenerateDrivingTipsOutputSchema},
  prompt: `You are an expert driving instructor familiar with Manchester. Based on the current weather conditions, major streets, and any construction updates, provide EXACTLY 5 driving tips to help drivers stay safe and prepared.

Weather Conditions: {{{weatherConditions}}}
Major Streets: {{{majorStreets}}}
Construction Updates: {{{constructionUpdates}}}

IMPORTANT: You must provide exactly 5 tips, no more, no less. Each tip should be practical and specific to the conditions described.

Driving Tips:`,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateDrivingTipsFlow = ai.defineFlow(
  {
    name: 'generateDrivingTipsFlow',
    inputSchema: GenerateDrivingTipsInputSchema,
    outputSchema: GenerateDrivingTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
