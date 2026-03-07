const BASE_URL = 'http://localhost:4000';

export const API_ROUTES = {
  HEALTH: `${BASE_URL}/health`,
  SIGN_UP: `${BASE_URL}/auth/signup`,
  LOGIN: `${BASE_URL}/auth/login`,
  USERS: `${BASE_URL}/users`,
} as const;
