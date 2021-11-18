import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${credentials}`);
      return credentials;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const changeFilter = createAction('contacts/changeFilter');

const resetLoadingStatus = createAction('contacts/resetLoadingStatus');

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
  changeFilter,
  resetLoadingStatus,
};

export default contactsOperations;
