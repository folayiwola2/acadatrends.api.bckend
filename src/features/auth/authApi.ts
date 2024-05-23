import {
  loginRequest,
  registerRequest,
  loginSuccess,
  registerSuccess,
  loginFailure,
  registerFailure,
} from './authSlice';

import {userRequest, userSuccess, userFailure} from '../user/userSlice';
import axios from '../../axios';
import {Dispatch} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {loadUser} from '../user/userApi';
import {useAppDispatch} from '../hooks';
import {AppDispatch} from '../store';

interface LoginUser {
  email: string;
  password: string;
}

interface RegisterUser {
  firstname: string;
  othernames: string;
  email: string;
  phone: string;
  dob: string;
  school: string;
  state: string;
  address: string;
  password: string;
}
export const loginUser = (user: LoginUser) => async (dispatch: AppDispatch) => {
  dispatch(loginRequest());
  try {
    const res = await axios.post('user/authenticate', user);
    if (res.data.statuscode === 200) {
      dispatch(loginSuccess(res.data));
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          token: res.data.data.token,
          userId: res.data.data.user._id,
        }),
      );
      dispatch(userRequest());
      const user = await loadUser(res.data.data.user._id);

      if (user.statuscode === 200) {
        dispatch(userSuccess(user.data));
      } else {
        dispatch(userFailure(user.message));
      }
    } else {
      dispatch(loginFailure(res.data.message));
      Alert.alert('Error', res.data.message);
    }
  } catch (error: any) {
    console.log(error);
    dispatch(loginFailure(error.message));
    Alert.alert('Error', 'Something went wrong', [
      {text: 'cancel'},
      {text: 'retry', onPress: () => dispatch(loginUser(user))},
    ]);
  }
};

export const registerUser =
  (user: RegisterUser) => async (dispatch: AppDispatch) => {
    dispatch(registerRequest());
    try {
      const res = await axios.post('user/register', user);
      if (res.data.statuscode === 200) {
        dispatch(registerSuccess(res.data));
        dispatch(userRequest());
        const user = await loadUser(res.data.data.user._id);

        if (user.statuscode === 200) {
          dispatch(userSuccess(user.data));
        } else {
          dispatch(userFailure(user.message));
        }
        await AsyncStorage.setItem(
          'user',
          JSON.stringify({
            token: res.data.data.token,
            userId: res.data.data.user._id,
          }),
        );
      } else {
        dispatch(registerFailure(res.data.message));
        Alert.alert('Error', res.data.message);
      }
    } catch (error: any) {
      console.log(error);
      dispatch(registerFailure(error.message));
      Alert.alert('Error', 'Something went wrong', [
        {text: 'cancel'},
        {text: 'retry', onPress: () => dispatch(registerUser(user))},
      ]);
    }
  };
