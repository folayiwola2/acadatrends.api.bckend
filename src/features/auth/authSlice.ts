import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  loading: boolean;
  token: string | null;
  error?: string | null;
  firstname: string;
  othernames: string;
  email: string;
  isLoggedIn: boolean;
}

const authInitialState: AuthState = {
  loading: false,
  token: null,
  error: null,
  firstname: '',
  othernames: '',
  email: '',
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    loginRequest: state => {
      state.loading = true;
    },
    loginSuccess: (state, {payload}) => {
      state.loading = false;
      state.token = payload.data.token;
      state.firstname = payload.data.user.firstname;
      state.othernames = payload.data.user.othernames;
      state.email = payload.data.user.email;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    logout: state => {
      state.loading = false;
      state.error = null;
      state.token = '';
      state.firstname = '';
      state.othernames = '';
      state.email = '';
      state.isLoggedIn = false;
    },
    registerRequest: state => {
      state.loading = true;
    },
    registerSuccess: (state, {payload}) => {
      state.loading = false;
      state.token = payload.data.token;
      state.firstname = payload.data.user.firstname;
      state.othernames = payload.data.user.othernames;
      state.email = payload.data.user.email;
      state.isLoggedIn = true;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  registerRequest,
  registerSuccess,
  registerFailure,
} = authSlice.actions;

export default authSlice.reducer;
