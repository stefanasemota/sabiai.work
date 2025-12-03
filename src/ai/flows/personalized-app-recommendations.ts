'use server';
/**
 * @fileOverview This file defines a Genkit flow for providing personalized AI app recommendations.
 *
 * The flow takes a user profile and activity data as input and returns a list of recommended AI apps.
 * It uses a prompt to generate personalized suggestions based on the input data.
 *
 * @exports {personalizedAppRecommendations} - The main function to trigger the flow.
 * @exports {PersonalizedAppRecommendationsInput} - The input type for the flow.
 * @exports {PersonalizedAppRecommendationsOutput} - The output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema
const PersonalizedAppRecommendationsInputSchema = z.object({
  userProfile: z
    .string()
    .describe('A description of the user profile, including interests and skills.'),
  userActivity: z
    .string()
    .describe('A description of the users recent activity within the app.'),
  availableApps: z
    .string()
    .describe('A description of the available apps and their functionality.'),
});
export type PersonalizedAppRecommendationsInput = z.infer<
  typeof PersonalizedAppRecommendationsInputSchema
>;

// Define the output schema
const PersonalizedAppRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('A list of recommended AI apps based on user profile and activity.'),
});
export type PersonalizedAppRecommendationsOutput = z.infer<
  typeof PersonalizedAppRecommendationsOutputSchema
>;

// Define the prompt
const personalizedAppRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedAppRecommendationsPrompt',
  input: {schema: PersonalizedAppRecommendationsInputSchema},
  output: {schema: PersonalizedAppRecommendationsOutputSchema},
  prompt: `Based on the following user profile, user activity, and available apps, provide a list of recommended AI apps:

User Profile: {{{userProfile}}}
User Activity: {{{userActivity}}}
Available Apps: {{{availableApps}}}

Recommendations:`, // Use handlebars here to format the input
});

// Define the flow
const personalizedAppRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedAppRecommendationsFlow',
    inputSchema: PersonalizedAppRecommendationsInputSchema,
    outputSchema: PersonalizedAppRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedAppRecommendationsPrompt(input);
    return output!;
  }
);

/**
 * Generates personalized AI app recommendations for a user.
 * @param input - The input containing user profile and activity data.
 * @returns A promise that resolves to the personalized app recommendations.
 */
export async function personalizedAppRecommendations(
  input: PersonalizedAppRecommendationsInput
): Promise<PersonalizedAppRecommendationsOutput> {
  return personalizedAppRecommendationsFlow(input);
}
