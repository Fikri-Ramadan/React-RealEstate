import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
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
    throw new Error(error.message);
  }
};
