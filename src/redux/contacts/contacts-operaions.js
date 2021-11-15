import axios from 'axios';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {}
  },
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async credentials => {
    try {
      await axios.delete(`/contacts/${credentials}`);
      return credentials;
    } catch (error) {}
  },
);

const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, name, number }) => {
    try {
      const { data } = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      return data;
    } catch (error) {}
  },
);

const changeFilter = createAction('contacts/changeFilter');

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
  changeFilter,
};

export default contactsOperations;
