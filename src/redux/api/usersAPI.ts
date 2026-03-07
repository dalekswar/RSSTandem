import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

import type { LoginRequest, SignUpRequest } from '../../types';

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
    }),
    loginUser: builder.mutation({
      query: (authData: LoginRequest) => ({
        url: 'auth/login',
        method: 'POST',
        body: authData,
      }),
    }),
  }),
});

export const { useGetUserByLoginQuery, useSignUpUserMutation, useLoginUserMutation } = usersApi;
