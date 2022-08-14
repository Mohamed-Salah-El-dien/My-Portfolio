import { configureStore } from '@reduxjs/toolkit';
import pagesSlice from './PagesSlice';

const store = configureStore({
  reducer: {
    pages: pagesSlice.reducer,
  },
});

export default store;
