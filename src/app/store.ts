import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from 'src/services/NewsApi';
import { guardian } from 'src/services/Guardian';
import { newsData } from 'src/services/NewsData';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { marketChart } from 'src/services/Market';
import { Finnhub } from 'src/services/Finnhub';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [guardian.reducerPath]: guardian.reducer,
    [newsData.reducerPath]: newsData.reducer,
    [marketChart.reducerPath]: marketChart.reducer,
    [Finnhub.reducerPath]: Finnhub.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.middleware,
      guardian.middleware,
      newsData.middleware,
      marketChart.middleware,
      Finnhub.middleware,
    ),
});

setupListeners(store.dispatch);
