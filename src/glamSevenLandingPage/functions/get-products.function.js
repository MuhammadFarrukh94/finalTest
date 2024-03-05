import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getProducts = async () => {
    try {
      const resp = await axios.get(`${API_URL}/products`, {});
      return resp.data;
    } catch (error) {
      throw error;
    }
  };