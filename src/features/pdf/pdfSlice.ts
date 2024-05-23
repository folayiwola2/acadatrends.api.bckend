import {createSlice} from '@reduxjs/toolkit';

export interface Pdf {
  _id: string;
  userId: string;
  content: string;
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

export interface InitialState {
  loading: boolean;
  isFulfilled: boolean;
  pdfs: Pdf[];
  pdf: Pdf | null;
  error?: string | null;
}

const initialState: InitialState = {
  loading: false,
  isFulfilled: false,
  pdfs: [],
  pdf: null,
  error: null,
};

const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    getPdfRequest: (state: InitialState) => {
      state.loading = true;
      state.isFulfilled = false;
    },
    getAllPdfSuccess: (state: InitialState, {payload}) => {
      state.loading = false;
      state.isFulfilled = true;
      state.pdfs = payload;
    },
    getPdfSuccess: (state: InitialState, {payload}) => {
      state.loading = false;
      state.isFulfilled = true;
      state.pdf = payload;
    },
    getPdfFailure: (state: InitialState, {payload}) => {
      state.loading = false;
      state.isFulfilled = false;
      state.error = payload;
    },
  },
});

export const {getPdfRequest, getAllPdfSuccess, getPdfSuccess, getPdfFailure} =
  pdfSlice.actions;

export default pdfSlice.reducer;
