import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverUri } from '../../config/api';


export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverUri, credentials: 'include' }),
  endpoints: (builder) => ({

    getAllUsers: builder.query({
      query: () => '/users',
    }),
    checkAuth: builder.query({
      query: () => '/me',
    }),
  }),
});


export const { useGetAllUsersQuery, useCheckAuthQuery } = userApi;