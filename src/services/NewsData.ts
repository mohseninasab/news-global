import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsDataArticles } from 'src/types/NewsData';
import type {
  NewsApiParams,
  SourceParams,
  SourcesApi,
} from 'src/types/NewsApiArticles';

const baseUrl = import.meta.env.VITE_NEWS_DATA_API_BASE_URL;
const key = import.meta.env.VITE_NEWS_DATA_API_KEY;

export const newsData = createApi({
  reducerPath: 'newsData',
  baseQuery: fetchBaseQuery({ baseUrl, headers: {} }),
  endpoints: (builder) => ({
    newsDataGetAllNews: builder.query<NewsDataArticles, NewsApiParams>({
      query: (params: NewsApiParams) => {
        const { q, source, date: from, category } = params;
        if (q || source || from || category)
          return {
            url: `/latest?apikey=${key}&source=${source || ''}&category=${category || ''}`,
          };
        return { url: `/latest?apikey=${key}` };
      },
    }),
    newsDataGetSources: builder.query<SourcesApi, SourceParams>({
      query: (params: SourceParams) => ({
        url: `/sources?apikey=${key}`,
        params,
      }),
    }),
  }),
});
export const { useNewsDataGetAllNewsQuery, useNewsDataGetSourcesQuery } =
  newsData;
