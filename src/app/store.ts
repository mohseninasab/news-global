import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from 'src/services/NewsApi';
import { guardian } from 'src/services/Guardian';
import { newsData } from 'src/services/NewsData';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [guardian.reducerPath]: guardian.reducer,
    [newsData.reducerPath]: newsData.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      newsApi.middleware,
      guardian.middleware,
      newsData.middleware,
    ),
});

setupListeners(store.dispatch);
