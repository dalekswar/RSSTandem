import { z } from 'zod';

export const registrationSchema = z
  .object({
    email: z.string().email('Invalid email format'),
    login: z
      .string()
      .min(5, 'Login must be at least 5 characters')
      .max(30, 'Login must be at most 30 characters')
      .regex(/^[A-Za-z0-9_-]+$/, 'Login can contain letters, numbers, _ and - only'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(30, 'Password must be at most 30 characters')
      .regex(
        /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$&_+.-]+$/,
        'Password must contain at least one uppercase letter and one number, no spaces or Cyrillic'
      ),
    passwordConfirm: z.string(),
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: 'Passwords must match',
    path: ['passwordConfirm'],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
