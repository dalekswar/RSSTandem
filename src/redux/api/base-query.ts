import {
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { logout } from '../reducers';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000/',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      console.log(JSON.parse(token).accessToken);
      console.log('token', `Bearer ${JSON.parse(token).accessToken}`);
      headers.set('Authorization', `Bearer ${JSON.parse(token).accessToken}`);
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
  console.log('result', result);
  if (result.error) {
    api.dispatch(logout());
  }
  return result;
};
