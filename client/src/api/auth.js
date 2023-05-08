import { AxiosError } from 'axios';
import client from '../lib/client';



export const login = async (body) => {
  try {
    const { data } = await client.post('/auth/login', body);
    return { data, error: null };
  } catch (err) {
    let errorMessage;
    if (err instanceof AxiosError) {
      // axios error
      errorMessage = err.response?.data?.message || 'Something Went Wrong';
    } else {
      errorMessage = 'Something Went Wrong';
    }
    return { data: null, error: errorMessage };
  }
};