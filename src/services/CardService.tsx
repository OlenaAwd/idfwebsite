import axios from 'axios';
import { toast } from 'react-toastify';
import { IImpactCard, IEsportCard } from '../types/cardType';
import URL from './config.js';
const getCards = async (): Promise<Array<IImpactCard>> => {
  try {
    const BlogURL = URL + '/wp-json/idf/v1/cards/';
    const { data } = await axios.get(BlogURL);
    return data;
  } catch (error) {
    toast.error('An error occurred during the API call', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return [];
  }
};

const getEsportCards = async (): Promise<Array<IEsportCard>> => {
  try {
    const BlogURL = URL + '/wp-json/idf/v1/sports/';
    const { data } = await axios.get(BlogURL);
    return data;
  } catch (error) {
    toast.error('An error occurred during the API call', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return [];
  }
};

const BlogService = {
  getCards,
  getEsportCards,
};

export default BlogService;
