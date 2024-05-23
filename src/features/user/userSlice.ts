import {createSlice} from '@reduxjs/toolkit';

interface Pdf {
  _id: string;
  userId: string;
  file: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface User {
  status: string;
  isVerify: boolean | null;
  isSubscribed: boolean | null;
  sub_date: string;
  sub_interval_type: boolean | null;
  last_sub_date: string;
  followers: [];
  pdfs: Pdf[];
  _id: string;
  firstname: string;
  othernames: string;
  email: string;
  phone: number | null;
  dob: string;
  school: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

interface Init {
  isLoggedIn: boolean;
  loading: boolean;
  isFulfilled: boolean;
  error?: string | null;
  user: User;
}

const userInitialState: Init = {
  isLoggedIn: false,
  error: null,
  loading: false,
  isFulfilled: false,
  user: {
    status: '',
    isVerify: null,
    isSubscribed: null,
    sub_date: '',
    sub_interval_type: null,
    last_sub_date: '',
    followers: [],
    pdfs: [],
    _id: '',
    firstname: '',
    othernames: '',
    email: '',
    phone: null,
    dob: '',
    school: '',
    state: '',
    createdAt: '',
    updatedAt: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    userRequest: state => {
      state.loading = true;
    },
    userSuccess: (state, {payload}) => {
      state.isLoggedIn = true;
      state.isFulfilled = true;
      state.error = null;
      state.loading = false;
      state.user!.status = payload.status;
      state.user!.isVerify = payload.isVerify;
      state.user!.isSubscribed = payload.isSubscribed;
      state.user!.sub_date = payload.sub_date;
      state.user!.sub_interval_type = payload.sub_interval_type;
      state.user!.last_sub_date = payload.last_sub_date;
      state.user!.followers = payload.followers;
      state.user!.pdfs = payload.pdfs;
      state.user!._id = payload._id;
      state.user!.firstname = payload.firstname;
      state.user!.othernames = payload.othernames;
      state.user!.email = payload.email;
      state.user!.phone = payload.phone;
      state.user!.dob = payload.dob;
      state.user!.school = payload.school;
      state.user!.state = payload.state;
      state.user!.createdAt = payload.createdAt;
      state.user!.updatedAt = payload.updatedAt;
    },
    userFailure: (state, {payload}) => {
      state.isLoggedIn = false;
      state.isFulfilled = false;
      state.user = {
        status: '',
        isVerify: null,
        isSubscribed: null,
        sub_date: '',
        sub_interval_type: null,
        last_sub_date: '',
        followers: [],
        pdfs: [],
        _id: '',
        firstname: '',
        othernames: '',
        email: '',
        phone: null,
        dob: '',
        school: '',
        state: '',
        createdAt: '',
        updatedAt: '',
      };
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {userRequest, userSuccess, userFailure} = userSlice.actions;

export default userSlice.reducer;
