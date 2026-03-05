export type ApiError = {
  statusCode: number;
  message: string;
  error?: string;
};
export type HealthResponse = string;
export type accessToken = {
  accessToken: string | null;
};

export type SignUpRequest = {
  email: string;
  login: string;
  password: string;
};

export type SignUpSuccessResponse = {
  statusText: string;
  message: string;
};

export type RegistrationSuccessResponse = {
  id: number;
  email: string;
  login: string;
  firstName: string | null;
  lastName: string | null;
  createdAt: string;
  updatedAt: string;
};
export type UserStateType = {
  email: string;
  login: string;
};

export type LoginRequest = {
  login: string;
  password: string;
};

export type LoginSuccessResponse = {
  statusText: string;
  message: string;
  access: string;
};

export type UserProfileResponse = {
  id: string;
  email: string;
  login: string;
};

export type UpdateUser = {
  email?: string;
  login?: string;
  password?: string;
};
