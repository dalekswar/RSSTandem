import { createApi } from '@reduxjs/toolkit/query/react';

import type {
  ApiError,
  LoginRequest,
  LoginSuccessResponse,
  SignUpRequest,
  User,
} from '../../types';
import { singleToast } from '../../utils/toast.util';
import { auth } from '../reducers';
import { baseQueryWithAuth } from './base-query';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getCurrentUser: builder.query<User, void>({
      query: () => ({
        url: `users/me`,
      }),
    }),

    signUpUser: builder.mutation<void, SignUpRequest>({
      query: (authData) => ({
        url: 'auth/signup',
        method: 'POST',
        body: authData,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          singleToast('Successfully signed up!', 'success');
        } catch (apiError) {
          const { error } = apiError as { error: { data: ApiError } };
          singleToast(error.data.message || 'Failed to sign up', 'error');
        }
      },
    }),
    loginUser: builder.mutation<LoginSuccessResponse, LoginRequest>({
      query: (authData) => ({
        url: 'auth/login',
        method: 'POST',
        body: authData,
      }),
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(auth({ accessToken: data.accessToken }));
          singleToast(data.message, 'success');
        } catch (apiError) {
          const { error } = apiError as { error: { data: ApiError } };
          singleToast(error.data.message || 'Failed to login', 'error');
        }
      },
    }),
  }),
});

export const { useGetCurrentUserQuery, useSignUpUserMutation, useLoginUserMutation } = usersApi;
