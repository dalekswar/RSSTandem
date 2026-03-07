import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

import type { ApiError, LoginRequest, SignUpRequest } from '../../types';
import { singleToast } from '../../utils/toast.util';
import { auth } from '../reducers';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('accessToken');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserByLogin: builder.query({
      query: (login: string) => ({
        url: `users/${login}`,
      }),
    }),

    signUpUser: builder.mutation({
      query: (authData: SignUpRequest) => ({
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
    loginUser: builder.mutation({
      query: (authData: LoginRequest) => ({
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

export const { useGetUserByLoginQuery, useSignUpUserMutation, useLoginUserMutation } = usersApi;
