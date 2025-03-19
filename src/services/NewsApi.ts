import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type NewsApiArticle from 'src/types/NewsApiArticles';
import type { NewsApiParams } from 'src/types/NewsApiArticles';

const baseUrl = import.meta.env.VITE_NEWSAPI_BASE_URL;
const Authorization = import.meta.env.VITE_NEWSAPI_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl, headers: { Authorization } }),
  endpoints: (builder) => ({
    newApiGetAllNews: builder.query<NewsApiArticle, NewsApiParams>({
      query: (params: NewsApiParams) => ({
        url: '/everything',
        params,
      }),
    }),
  }),
});
export const { useNewApiGetAllNewsQuery } = newsApi;
