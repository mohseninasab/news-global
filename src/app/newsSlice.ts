import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface News {
  title: string;
  article: string;
  category: string;
}
export interface NewsState {
  news: News[];
}

const initialState: NewsState = {
  news: [
    {
      title: 'Hello There!',
      article: 'this is the article section that whould be shown to reader',
      category: 'reading',
    },
  ],
};

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, payload: PayloadAction<News>) => {
      state.news.push(payload.payload);
    },
  },
});

export const { increment } = newsSlice.actions;
export default newsSlice.reducer;
