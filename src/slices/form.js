import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    hub: null || undefined,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    estate: '',
    organisation: '',
  },
  reducers: {
    setHub: (state, { payload }) => ({ ...state, ...payload }),
    setFirstName: (state, { payload }) => ({ ...state, ...payload }),
    setLastName: (state, { payload }) => ({ ...state, ...payload }),
    setEmail: (state, { payload }) => ({ ...state, ...payload }),
    setPhone: (state, { payload }) => ({ ...state, ...payload }),
    setMessage: (state, { payload }) => ({ ...state, ...payload }),
    setEstate: (state, { payload }) => ({ ...state, ...payload }),
    setOrganisation: (state, { payload }) => ({ ...state, ...payload }),
  },
});

// ACTIONS

export const {
  setHub,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setMessage,
  setEstate,
  setOrganisation,
} = formSlice.actions;

// SELECTOR

export const selectForm = state => state.form;

// REDUCER

export default formSlice.reducer;
