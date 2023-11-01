import axios from 'axios';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

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
    toast.error('something went wrong');
    throw new Error(error.message);
  }
};

export const bookingVisit = async (email, propertyId, date, token) => {
  try {
    await api.post(
      `/user/bookvisit/${propertyId}`,
      {
        email,
        date: dayjs(date).format('DD/MM/YYYY'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error('something went wrong');
    throw new Error(error.message);
  }
};

export const removeBookedVisit = async (email, propertyId, token) => {
  try {
    await api.delete(`/user/bookvisit/${propertyId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        email: email,
      },
    });
  } catch (error) {
    toast.error('something went wrong');
    throw new Error(error.message);
  }
};

export const toggleFavourite = async (email, id, token) => {
  try {
    await api.put(
      `/user/togglefavourite/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error('something went wrong');
    throw new Error(error.message);
  }
};

export const getAllFavourites = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      '/user/favourites',
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    toast.error('something went wrong while fetching favourites');
    throw new Error(error.message);
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      '/user/bookvisit',
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    toast.error('something went wrong while fetching bookings');
    throw new Error(error.message);
  }
};
