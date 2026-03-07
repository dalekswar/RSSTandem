export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}

export type HealthResponse = string;

export interface AccessToken {
  accessToken: string | null;
}

export interface LoginData {
  login: string;
}

export interface EmailData {
  email: string;
}

export interface PasswordData {
  password: string;
}

export type AuthData = LoginData & PasswordData;

export type RegistrationData = LoginData & EmailData & PasswordData;

export type SignUpRequest = RegistrationData;

export type LoginRequest = AuthData;

export interface AuthMessageResponse {
  statusText: string;
  message: string;
}

export type LoginSuccessResponse = AuthMessageResponse & {
  access: string;
};

export interface User {
  id: number | string;
  login: string;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export type UserStateType = Pick<User, 'email' | 'login'>;

export type UserProfileResponse = Pick<User, 'id' | 'email' | 'login'>;

export type UpdateUser = Partial<RegistrationData>;
