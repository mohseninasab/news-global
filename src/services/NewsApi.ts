import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type NewsApiArticle from 'src/types/NewsApiArticles';
import type {
  NewsApiParams,
  SourceParams,
  SourcesApi,
  TopLineParams,
} from 'src/types/NewsApiArticles';

const baseUrl = import.meta.env.VITE_NEWSAPI_BASE_URL;
const Authorization = import.meta.env.VITE_NEWSAPI_KEY;

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl, headers: { Authorization } }),
  endpoints: (builder) => ({
    newsApiGetAllNews: builder.query<NewsApiArticle, NewsApiParams>({
      query: (params: NewsApiParams) => {
        const { q, source, date: from, category, country } = params;
        if (q || source || from || category || country)
          return {
            url: '/everything',
            params: {
              q,
              source,
              category,
              from,
              country: country?.toLowerCase(),
            },
          };
        return { url: '/everything?q=usa' };
      },
    }),
    newsApiGetTopHeadlines: builder.query<NewsApiArticle, TopLineParams>({
      query: ({ country = 'us', ...rest }: TopLineParams) => ({
        url: '/top-headlines',
        params: {
          country: country.toLowerCase(),
          ...rest,
        },
      }),
    }),
    newsApiGetSources: builder.query<SourcesApi, SourceParams>({
      query: (params: SourceParams) => ({
        url: '/top-headlines/sources',
        params,
      }),
    }),
  }),
});
export const {
  useNewsApiGetAllNewsQuery,
  useNewsApiGetSourcesQuery,
  useNewsApiGetTopHeadlinesQuery,
} = newsApi;
