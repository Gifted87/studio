
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
    // In a real application, you would add logic here to send an email,
    // save the message to a database, or call an external service.
    console.log('Received contact form submission:', input);

    // For now, we'll just simulate a successful submission.
    return {
      success: true,
    };
  }
);
