import {
  getNewsRequest,
  getAllNewsSuccess,
  getNewsFailure,
  getSingleNewsSuccess,
  getFiveNewsSuccess,
} from './allNewsSlice';
import axios from '../../axios';
import {AppDispatch, RootState} from '../store';
import {Alert} from 'react-native';

export const getAllNews =
  (pageNumber: number, size: number) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(getNewsRequest());
    try {
      const res = await axios.get(`news?pageNo=${pageNumber}&size=${size}`);

      if (res.data.statuscode === 200) {
        dispatch(
          getAllNewsSuccess([
            ...getState().allnewsReducer.allNews,
            ...res.data.data,
          ]),
        );
      } else {
        dispatch(getNewsFailure(res.data.message));
      }
    } catch (error: any) {
      console.log(error);
      dispatch(getNewsFailure(error.message));
      Alert.alert('Error', 'Something went wrong', [
        {text: 'cancel'},
        {text: 'retry', onPress: () => dispatch(getAllNews(pageNumber, size))},
      ]);
    }
  };

export const getFiveNews = () => async (dispatch: AppDispatch) => {
  dispatch(getNewsRequest());
  try {
    const res = await axios.get(`news?pageNo=1&size=5`);

    if (res.data.statuscode === 200) {
      dispatch(getFiveNewsSuccess(res.data.data));
    } else {
      dispatch(getNewsFailure(res.data.message));
    }
  } catch (error: any) {
    console.log(error);
    dispatch(getNewsFailure(error.message));
    Alert.alert('Error', 'Something went wrong', [
      {text: 'cancel'},
      {text: 'retry', onPress: () => dispatch(getFiveNews())},
    ]);
  }
};

export const getNewsById = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(getNewsRequest());
  try {
    const res = await axios.get(`news/${id}`);

    if (res.data.statuscode === 200) {
      dispatch(getSingleNewsSuccess(res.data.data));
    } else {
      dispatch(getNewsFailure(res.data.message));
    }
  } catch (error: any) {
    console.log(error);
    dispatch(getNewsFailure(error.message));
    Alert.alert('Error', 'Something went wrong', [
      {text: 'cancel'},
      {text: 'retry', onPress: () => dispatch(getNewsById(id))},
    ]);
  }
};
