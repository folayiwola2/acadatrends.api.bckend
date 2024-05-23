import axios from '../../axios';

export const loadUser = async (id: string) => {
  try {
    const res = await axios.get(`user/${id}`);
    return res.data;
  } catch (error: any) {
    return error;
  }
};
