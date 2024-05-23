import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
import allnewsReducer from './news/allNewsSlice';
import pdfReducer from './pdf/pdfSlice';

const store = configureStore({
  reducer: {
    authReducer: authReducer,
    userReducer: userReducer,
    allnewsReducer: allnewsReducer,
    pdfReducer: pdfReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
