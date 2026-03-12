import { z } from 'zod';
import { ERROR_MESSAGES, LOGIN, PASSWORD } from '../../../constants/auth-data';

export const registrationSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email('Invalid email format'),
    login: z
      .string()
      .min(LOGIN.MIN_LENGTH, ERROR_MESSAGES.LOGIN_MIN)
      .max(LOGIN.MAX_LENGTH, ERROR_MESSAGES.LOGIN_MAX)
      .regex(LOGIN.PATTERN, ERROR_MESSAGES.LOGIN_PATTERN),
    password: z
      .string()
      .min(PASSWORD.MIN_LENGTH, ERROR_MESSAGES.PASSWORD_MIN)
      .max(PASSWORD.MAX_LENGTH, ERROR_MESSAGES.PASSWORD_MAX)
      .regex(PASSWORD.PATTERN, ERROR_MESSAGES.PASSWORD_PATTERN),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: ERROR_MESSAGES.PASSWORD_MISMATCH_MESSAGE,
    path: ['passwordConfirm'],
  });

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
