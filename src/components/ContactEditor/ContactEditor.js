import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextField, Button, IconButton, Box, Alert } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import SaveIcon from '@mui/icons-material/Save';

import contactsOperations from 'redux/contacts/contacts-operaions';
import contactsSelectors from 'redux/contacts/contacts-selectors';

import isContactExist from 'functions/isContactExist';
import LOADING_STATUS from 'components/loading-status';

const namePattern =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const namePatternTitle =
  "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.";
const phonePattern =
  '[+]?[0-9,]{1,4}?[-, ]?[(]?[0-9, ]{1,3}?[)]?[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,9}';
const phonePatternTitle =
  'Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +';

export default function ContactEditor({
  isEditing,
  contactId,
  onCloseModal,
  contactName,
  contactNumber,
}) {
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);
  const [clientError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const loadingStatus = useSelector(contactsSelectors.getLoadingStatus);

  const dispatch = useDispatch();

  const isNameValid = !isContactExist.isNameExist(contacts, name);
  const isNubmerValid = !isContactExist.isNumberExist(contacts, number);

  const isEditedContactValid =
    (name === contactName || isNameValid) &&
    (number === contactNumber || isNubmerValid);

  useEffect(() => {
    !clientError && loadingStatus === LOADING_STATUS.SUCCESS && onCloseModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientError, loadingStatus]);

  const onChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();

    if (isEditing) {
      submitEditedContacts();
      return;
    }

    submitNewContact();
  };

  const submitNewContact = () => {
    const newContact = {
      name,
      number,
    };

    if (!isNameValid) {
      setError(true);
      setErrorMessage('This name or phone number is allready exist');
      return;
    }

    dispatch(contactsOperations.addContact(newContact));
    resetForm();
  };

  const submitEditedContacts = () => {
    const editedContact = {
      contactId,
      name,
      number,
    };
    if (isEditedContactValid) {
      dispatch(contactsOperations.updateContact(editedContact));
      resetForm();
      return;
    }

    setError(true);
    setErrorMessage('This name or phone number is allready exist');

    return;
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setError(false);
    setErrorMessage('');
  };

  return (
    <>
      <IconButton onClick={onCloseModal}>
        <ArrowBackOutlinedIcon />
      </IconButton>
      <Box component="form" onSubmit={onFormSubmit}>
        <TextField
          error={clientError}
          helperText={clientError && errorMessage}
          required
          type="text"
          margin="normal"
          name="name"
          id="name"
          label="Name"
          fullWidth
          value={name}
          onChange={onChange}
          inputProps={{
            pattern: namePattern,
            title: namePatternTitle,
          }}
        />
        <TextField
          required
          type="tel"
          margin="normal"
          name="number"
          id="number"
          label="Phone number"
          fullWidth
          value={number}
          onChange={onChange}
          inputProps={{
            pattern: phonePattern,
            title: phonePatternTitle,
          }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          startIcon={loadingStatus !== LOADING_STATUS.PENDING && <SaveIcon />}
          fullWidth
          sx={{
            my: 1,
          }}
        >
          {loadingStatus === LOADING_STATUS.PENDING ? '...loading' : 'save'}
        </Button>
        {loadingStatus === LOADING_STATUS.REJECTED && (
          <Alert severity="error">
            Something goes wrong, try again please.
          </Alert>
        )}
      </Box>
    </>
  );
}
