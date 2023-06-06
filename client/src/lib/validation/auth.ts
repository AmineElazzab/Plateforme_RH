import * as z from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'email is required' })
    .min(1, 'email is required'),
  password: z
    .string({ required_error: 'Password is required' })
    .min(1, 'Password is required'),
});

export type LoginInputs = z.infer<typeof loginSchema>;
