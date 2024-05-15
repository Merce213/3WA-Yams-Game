import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverUri } from '../../config/api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: serverUri }),
  endpoints: (builder) => ({

    verifyCredentials: builder.mutation({
      query: ({ email, password }) => ({
        url: '/login',
        method: 'POST',
        body: { email, password },
      }),
    }),

    logout: builder.mutation({
      query: () => '/logout',
      method: 'GET',
    }),
  }),
});


export const { useVerifyCredentialsMutation, useLogoutMutation } = authApi;