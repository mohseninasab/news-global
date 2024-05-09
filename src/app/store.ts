import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from 'src/services/NewsApi';
import { guardian } from 'src/services/Guardian';
import { setupListeners } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    [guardian.reducerPath]: guardian.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware, guardian.middleware),
});

setupListeners(store.dispatch);
