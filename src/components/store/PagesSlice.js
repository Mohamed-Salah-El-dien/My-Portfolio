import { createSlice } from '@reduxjs/toolkit';

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    about: true,
    resume: false,
    portfolio: false,
    contact: false,
  },
  reducers: {
    toggleabout(state) {
      state.about = true;
      state.resume = false;
      state.portfolio = false;
      state.contact = false;
    },
    toggleresume(state) {
      state.resume = true;
      state.about = false;
      state.portfolio = false;
      state.contact = false;
    },
    toggleportfolio(state) {
      state.portfolio = true;
      state.about = false;
      state.resume = false;
      state.contact = false;
    },
    togglecontact(state) {
      state.contact = true;
      state.about = false;
      state.resume = false;
      state.portfolio = false;
    },
  },
});

export const pagesActions = pagesSlice.actions;

export default pagesSlice;
