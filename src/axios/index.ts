import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {AxiosInstance} from 'axios';

const BASE_URL: string = 'https://acadatrends.aws.com/api/';

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  validateStatus: (status: number) => {
    return status == 200 || status == 400 || status == 401;
  },
});

instance.defaults.timeout = 60000;
instance.defaults.maxRedirects = 1;
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.defaults.headers.post['Accept'] = '*/*';
// instance.interceptors.request.use(async (config: any) => {
//   try {
//     const token = await AsyncStorage.getItem('token');
//     if (token) {
//       config.data.token = token;

//       return config;
//     }
//     return config;
//   } catch (error: any) {}
// });

export default instance;
