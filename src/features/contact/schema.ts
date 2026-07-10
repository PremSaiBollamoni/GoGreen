import { z } from 'zod';

export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().email('Enter a valid email address'),
  company: z.string().trim().optional(),
  enquiryType: z.enum(['business', 'career']),
  message: z.string().trim().min(10, 'Tell us a little more — at least 10 characters'),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
