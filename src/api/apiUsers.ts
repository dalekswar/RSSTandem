import { API_ROUTES } from '../constants';
import type { LoginDto, SignUpDto } from '../types';

export async function authUser(path: string, authData: LoginDto | SignUpDto) {
  const res = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  });

  console.log(res);
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    const errorMessage = 'email' in authData ? 'Failed to sign up' : 'Failed to login';
    const error = new Error(data.message || errorMessage);
    throw error;
  }

  return data;
}
export async function loginUser(authData: LoginDto) {
  return authUser(API_ROUTES.LOGIN, authData);
}

export async function signUpUser(authData: SignUpDto) {
  return authUser(API_ROUTES.SIGN_UP, authData);
}
