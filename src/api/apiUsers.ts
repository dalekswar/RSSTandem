import { API_ROUTES } from '../constants';
import type { SignUpDto } from '../types';

export async function signUpUser(newUser: SignUpDto) {
  const res = await fetch(API_ROUTES.SIGN_UP, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  console.log(res);
  const data = await res.json();
  console.log(data);
  if (!res.ok) {
    const error = new Error(data.message || 'Failed to sign up');
    throw error;
  }

  return data;
}
