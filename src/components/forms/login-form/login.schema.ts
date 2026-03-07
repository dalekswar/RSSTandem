import { z } from 'zod';
import { ERROR_MESSAGES, LOGIN, PASSWORD } from '../../../constants/auth-data';

export const loginSchema = z.object({
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
});

export type LoginFormValues = z.infer<typeof loginSchema>;
