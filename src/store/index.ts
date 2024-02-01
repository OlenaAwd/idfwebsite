import { configureStore,  } from '@reduxjs/toolkit';
import formReducer from '../slices/form';

export const configStore = ( ) => {
 
  return configureStore({
    reducer: {
      form: formReducer,
    },
  });
};
 
 
