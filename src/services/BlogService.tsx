import axios from 'axios';
import { toast } from 'react-toastify';
import { IBlog } from '../types/blogTypes';
import URL from './config.js';
const getBlogs = async (category: string): Promise<Array<IBlog>> => {
  try {
      const BlogURL = URL + 'wp-json/idf/v1/blogs/' + category;
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

const getBlog = async (id: string | undefined) => {
  try {
    const BlogURL = URL + 'wp-json/idf/v1/blog/' + id;

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
  }
};
const BlogService = {
  getBlogs,
  getBlog,
};

export default BlogService;
