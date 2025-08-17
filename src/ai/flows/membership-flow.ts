'use server';
/**
 * @fileOverview A flow for handling membership registration submissions.
 *
 * - registerMember - A function that handles the membership registration process.
 * - RegisterMemberInput - The input type for the registerMember function.
 * - RegisterMemberOutput - The return type for the registerMember function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {firestore} from '@/lib/firebase';

export const RegisterMemberInputSchema = z.object({
  fullName: z.string().describe('The full name of the applicant.'),
  email: z.string().email().describe('The email address of the applicant.'),
  phone: z.string().describe('The phone number of the applicant.'),
  company: z.string().optional().describe('The company or institution of the applicant.'),
  membershipType: z.enum(["corporate", "individual"]).describe('The selected membership category.'),
});
export type RegisterMemberInput = z.infer<typeof RegisterMemberInputSchema>;

export const RegisterMemberOutputSchema = z.object({
    success: z.boolean().describe('Whether or not the registration was successful.'),
    error: z.string().optional().describe('An error message if the registration failed.'),
});
export type RegisterMemberOutput = z.infer<typeof RegisterMemberOutputSchema>;

export async function registerMember(input: RegisterMemberInput): Promise<RegisterMemberOutput> {
  return registerMemberFlow(input);
}

const registerMemberFlow = ai.defineFlow(
  {
    name: 'registerMemberFlow',
    inputSchema: RegisterMemberInputSchema,
    outputSchema: RegisterMemberOutputSchema,
  },
  async (input) => {
    try {
      const applicationsCollection = firestore.collection('membershipApplications');
      await applicationsCollection.add({
        ...input,
        createdAt: new Date(),
      });
      return {
        success: true,
      };
    } catch (e: any) {
        console.error('Error saving application to Firestore', e);
        return {
            success: false,
            error: e.message || 'An unexpected error occurred while saving the application.',
        }
    }
  }
);
