'use server';
/**
 * @fileOverview A flow for handling contact form submissions.
 *
 * - sendMessage - A function that handles the contact form submission process.
 * - SendMessageInput - The input type for the sendMessage function.
 * - SendMessageOutput - The return type for the sendMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {firestore} from '@/lib/firebase';

export const SendMessageInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});
export type SendMessageInput = z.infer<typeof SendMessageInputSchema>;

export const SendMessageOutputSchema = z.object({
    success: z.boolean().describe('Whether or not the message was sent successfully.'),
    error: z.string().optional().describe('An error message if the message failed to send.'),
});
export type SendMessageOutput = z.infer<typeof SendMessageOutputSchema>;

export async function sendMessage(input: SendMessageInput): Promise<SendMessageOutput> {
  return sendMessageFlow(input);
}

const sendMessageFlow = ai.defineFlow(
  {
    name: 'sendMessageFlow',
    inputSchema: SendMessageInputSchema,
    outputSchema: SendMessageOutputSchema,
  },
  async (input) => {
    try {
      const messagesCollection = firestore.collection('messages');
      await messagesCollection.add({
        ...input,
        createdAt: new Date(),
      });
      return {
        success: true,
      };
    } catch (e: any) {
        console.error('Error saving message to Firestore', e);
        return {
            success: false,
            error: e.message || 'An unexpected error occurred while saving the message.',
        }
    }
  }
);
