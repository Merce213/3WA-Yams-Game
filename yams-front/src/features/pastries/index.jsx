import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { serverUri } from '../../config/api';

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${serverUri}/game` }),
  endpoints: (builder) => ({
    getPastries: builder.query({
      query: () => '/pastries',
    }),
    getPastryById: builder.query({
      query: (id) => `/pastrie/${id}`,
    }),
    getWonPastries: builder.query({
      query: (quantity) => `/win-pastries/${quantity}`,
    }),
    refreshData: builder.query({
      query: () => '/refresh',
    }),
  }),
});

export const { useGetPastriesQuery, useGetPastryByIdQuery, useGetWonPastriesQuery, useRefreshDataQuery } = gameApi;