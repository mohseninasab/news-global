import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type GuardianArticles from 'src/types/GuardianArticles';
import type { GuardinaApiParams } from 'src/types/GuardianArticles';

const baseUrl = import.meta.env.VITE_GUARDIAN_API_BASE_URL;
const ApiKey = import.meta.env.VITE_GUARDIAN_API_KEY;

export const guardian = createApi({
  reducerPath: 'guardian',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGuardianNews: builder.query<GuardianArticles, GuardinaApiParams>({
      query: (params: GuardinaApiParams) => ({
        url: `/search?api-key=${ApiKey}`,
        params,
      }),
    }),
  }),
});
export const { useGetGuardianNewsQuery } = guardian;
