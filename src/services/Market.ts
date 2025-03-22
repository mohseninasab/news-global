import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_COIN_GECKO_API_BASE_URL;

export type Price = [number, number];

export interface Response {
  prices: Price[];
  market_caps?: Price[];
  total_volumes?: Price[];
}

export interface Params {
  days?: number;
  coinName?: string;
  vsCurrency?: string;
}

export const marketChart = createApi({
  reducerPath: 'marketChart',
  baseQuery: fetchBaseQuery({ baseUrl, headers: {} }),
  endpoints: (builder) => ({
    chartData: builder.query<Response, Params>({
      query: (params: Params) => {
        const { days = 1, coinName, vsCurrency = 'usd' } = params;
        return {
          url: `/${coinName}/market_chart?vs_currency=${vsCurrency}&days=${days}`,
        };
      },
    }),
  }),
});
export const { useChartDataQuery } = marketChart;
