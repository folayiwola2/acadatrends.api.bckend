import {createSlice} from '@reduxjs/toolkit';
import {News} from '../../types';

interface Init {
  loading: boolean;
  error?: string | null;
  allNews: News[];
  fiveNews: News[];
  news: News | null;
}

const newsInitialState: Init = {
  loading: false,
  error: null,
  allNews: [],
  fiveNews: [],
  news: null,
};

const allNewsSlice = createSlice({
  name: 'allNews',
  initialState: newsInitialState,
  reducers: {
    getNewsRequest: state => {
      state.loading = true;
    },
    getFiveNewsSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.fiveNews = payload;
    },
    getAllNewsSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.allNews = payload;
    },
    getNewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getSingleNewsSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = null;
      state.news = payload;
    },
    newsReset: state => {
      state.allNews = [];
    },
    clearNews: state => {
      state.news = null;
    },
  },
});

export const {
  getNewsRequest,
  getAllNewsSuccess,
  getNewsFailure,
  newsReset,
  getSingleNewsSuccess,
  clearNews,
  getFiveNewsSuccess,
} = allNewsSlice.actions;

export default allNewsSlice.reducer;
