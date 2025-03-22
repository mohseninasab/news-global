import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MarketNewsItem, MarketNewsParams } from 'src/types/Finnhub';

const baseUrl = import.meta.env.VITE_FINNHUB_API_BASE_URL;
const token = import.meta.env.VITE_FINNHUB_API_KEY;

export const Finnhub = createApi({
  reducerPath: 'finnhub',
  baseQuery: fetchBaseQuery({ baseUrl, headers: {} }),
  endpoints: (builder) => ({
    marketNews: builder.query<MarketNewsItem[], MarketNewsParams>({
      query: ({ category }: MarketNewsParams) => ({
        url: `/news?category=${category}&token=${token}`,
      }),
    }),
  }),
});
export const { useMarketNewsQuery } = Finnhub;
