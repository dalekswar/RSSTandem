import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { logout } from '../reducers';
import { BASE_URL } from '../../constants';
import type { UserPersonalData } from '../../types';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set(
        'Authorization',
        `Bearer ${(JSON.parse(token) as Pick<UserPersonalData, 'accessToken'>).accessToken}`
      );
    }

    return headers;
  },
});

export const baseQueryWithAuth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 403) {
    api.dispatch(logout());
  }
  return result;
};
