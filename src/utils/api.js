import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASEURL}/api/v1`,
});

export const getAllProperties = async () => {
  try {
    const res = await api.get('/residency', {
      timeout: 10 * 1000,
    });

    if (res.status === 400 || res.status === 500) {
      throw res.data;
    }

    return res.data;
  } catch (error) {
    console.log(error.message);
    toast.error('something went wrong');
    throw new Error(error.message);
  }
};

export const getProperty = async (id) => {
  try {
    const res = await api.get(`/residency/${id}`);

    if (res.status === 400 || res.status === 500) {
      throw res.data;
    }

    return res.data;
  } catch (error) {
    console.log(error.message);
    toast.error('something went wrong');
    throw new Error(error.message);
  }
};

export const createUser = async (email, token) => {
  try {
    const res = await api.post(
      '/user',
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
    toast.error('something went wrong');
    throw new Error(error.message);
  }
};
