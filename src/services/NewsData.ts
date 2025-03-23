import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsDataArticles } from 'src/types/NewsData';
import type {
  NewsApiParams,
  SourceParams,
  SourcesApi,
} from 'src/types/NewsApiArticles';

const baseUrl = import.meta.env.VITE_NEWS_DATA_API_BASE_URL;
const apikey = import.meta.env.VITE_NEWS_DATA_API_KEY;

export const newsData = createApi({
  reducerPath: 'newsData',
  baseQuery: fetchBaseQuery({ baseUrl, headers: {} }),
  endpoints: (builder) => ({
    newsDataGetAllNews: builder.query<NewsDataArticles, NewsApiParams>({
      query: (params: NewsApiParams) => {
        const { q, source, date: from, category } = params;
        if (q || source || from || category)
          return {
            url: '/latest',
            params: {
              apikey,
              source,
              category,
              q,
            },
          };
        return { url: '/latest', params: { apikey } };
      },
    }),
    newsDataGetSources: builder.query<SourcesApi, SourceParams>({
      query: (params: SourceParams) => ({
        url: '/sources',
        params: { ...params, apikey },
      }),
    }),
  }),
});
export const { useNewsDataGetAllNewsQuery, useNewsDataGetSourcesQuery } =
  newsData;
