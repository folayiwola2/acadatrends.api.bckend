import AsyncStorage from '@react-native-async-storage/async-storage';
import {loadUser} from '../features/user/userApi';
import {
  userRequest,
  userSuccess,
  userFailure,
} from '../features/user/userSlice';
import {useAppDispatch, useAppSelector} from '../features/hooks';

export const checkFirstUse = async (): Promise<boolean | undefined> => {
  try {
    const value = await AsyncStorage.getItem('firstUse');
    if (value !== null) {
      return false;
    }
    return true;
  } catch (error) {}
};

export const useAuthFromStorage = async () => {
  const dispatch = useAppDispatch();

  const isLoggedIn = useAppSelector(state => state.userReducer.isLoggedIn);
  try {
    const user = await AsyncStorage.getItem('user');
    if (user !== null && !isLoggedIn) {
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

export const checkUserExistfromStorage = async () => {
  const user = await AsyncStorage.getItem('user');
  if (user !== null) {
    return true;
  } else {
    return false;
  }
};

export const clearStorage = () => {
  AsyncStorage.clear();
};
