import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import GuardinResponse from 'src/types/GuardianArticles';
import type {
  GuardinaApiParams,
  GuardianTags,
  GuardianArticles,
  GuardianSections,
} from 'src/types/GuardianArticles';

const baseUrl = import.meta.env.VITE_GUARDIAN_API_BASE_URL;
const ApiKey = import.meta.env.VITE_GUARDIAN_API_KEY;

export const guardian = createApi({
  reducerPath: 'guardian',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGuardianNews: builder.query<
      GuardinResponse<GuardianArticles>,
      GuardinaApiParams
    >({
      query: (params: GuardinaApiParams) => ({
        url: `/search?api-key=${ApiKey}`,
        params,
      }),
    }),
    getGuardinaTags: builder.query<GuardinResponse<GuardianTags>, unknown>({
      query: () => ({
        url: `/tags?api-key=${ApiKey}`,
      }),
    }),
    getGuardinaSections: builder.query<
      GuardinResponse<GuardianSections>,
      unknown
    >({
      query: () => ({
        url: `/sections?api-key=${ApiKey}`,
        params: {
          format: 'json',
        },
      }),
    }),
  }),
});
export const {
  useGetGuardianNewsQuery,
  useGetGuardinaTagsQuery,
  useGetGuardinaSectionsQuery,
} = guardian;
