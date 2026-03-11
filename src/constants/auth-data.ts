export const LOGIN = {
  MIN_LENGTH: 5,
  MAX_LENGTH: 30,
  PATTERN: /^[\w-]+$/,
  PATTERN_MESSAGE: 'Login can contain letters, numbers, _ and - only',
} as const;

export const PASSWORD = {
  MIN_LENGTH: 8,
  MAX_LENGTH: 30,
  PATTERN: /^(?=.*[A-Z])(?=.*\d)[\w!#$&+.@-]+$/,
  PATTERN_MESSAGE:
    'Password must contain at least one uppercase letter and one number, no spaces or Cyrillic',
} as const;

export const ERROR_MESSAGES = {
  LOGIN_MIN: `Login must be at least ${LOGIN.MIN_LENGTH} characters`,
  LOGIN_MAX: `Login must be at most ${LOGIN.MAX_LENGTH} characters`,
  LOGIN_PATTERN: LOGIN.PATTERN_MESSAGE,
  PASSWORD_MIN: `Password must be at least ${PASSWORD.MIN_LENGTH} characters`,
  PASSWORD_MAX: `Password must be at most ${PASSWORD.MAX_LENGTH} characters`,
  PASSWORD_PATTERN: PASSWORD.PATTERN_MESSAGE,
  PASSWORD_MISMATCH_MESSAGE: 'Passwords must match',
} as const;
