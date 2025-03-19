import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type Articles from 'src/types/Articles';
import type NewsApiParams from 'src/types/newsApiParams';

const baseUrl = import.meta.env.VITE_NEWSAPI_BASE_URL;
const Authorization = import.meta.env.VITE_NEWSAPI_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl, headers: { Authorization } }),
  endpoints: (builder) => ({
    getAllNews: builder.query<Articles, NewsApiParams>({
      query: (params: NewsApiParams) => ({
        url: '/everything',
        params,
      }),
    }),
  }),
});
export const { useGetAllNewsQuery } = newsApi;
