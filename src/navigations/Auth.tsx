import React, {useEffect} from 'react';
import AuthNavigator from './AuthStackNavigation';
import MainTabNavigator from './MainTabNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../features/hooks';
import {loadUser} from '../features/user/userApi';
import {
  userRequest,
  userSuccess,
  userFailure,
} from '../features/user/userSlice';

const Auth = () => {
  const dispatch = useAppDispatch();
  const getuserFromStorage = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        const id: string = JSON.parse(user).userId;
        dispatch(userRequest());
        const res = await loadUser(id);
        if (res.statuscode == 200) {
          dispatch(userSuccess(res.data));
        } else {
          dispatch(userFailure(res.message));
        }
      } else {
        dispatch(userFailure('no user found'));
      }
    } catch (error) {
      console.log({error});
    }
  };
  useEffect(() => {
    getuserFromStorage();
  }, []);
  // const {isLoggedIn} = useAppSelector(state => state.authReducer);
  const {isLoggedIn: userLogin} = useAppSelector(state => state.userReducer);

  return userLogin ? <MainTabNavigator /> : <AuthNavigator />;
};

export default Auth;
