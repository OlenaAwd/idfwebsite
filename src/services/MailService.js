import axios from 'axios';
import { toast } from 'react-toastify';
import URL from './config.js';

const sendMail = async payload => {
  await axios
    .post(URL + 'wp-json/myplugin/v1/custom-endpoint', payload)
    .then(response => {
      console.log(response.data);
      toast.success('Email sent successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    })
    .catch(error => {
      console.error(error);
      toast.error('An error occurred during the API call', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
};

const MailService = {
  sendMail,
};

export default MailService;
