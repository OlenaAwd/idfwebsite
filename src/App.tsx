import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from './routes';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
       <ToastContainer />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
