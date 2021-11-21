import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { TextField, Button, IconButton, Box, Alert } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CheckIcon from '@mui/icons-material/Check';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

import isContactExist from 'utils/isContactExist';
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
  const [contact, setContact] = useState({
    name: contactName,
    number: contactNumber,
  });
  const [clientError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const loadingStatus = useSelector(contactsSelectors.getLoadingStatus);

  const dispatch = useDispatch();

  const isNameValid = !isContactExist.isNameExist(contacts, contact.name);
  const isNubmerValid = !isContactExist.isNumberExist(contacts, contact.number);

  const isEditedContactValid =
    (contact.name === contactName || isNameValid) &&
    (contact.number === contactNumber || isNubmerValid);

  useEffect(() => {
    !clientError && loadingStatus === LOADING_STATUS.SUCCESS && onCloseModal();
  }, [clientError, loadingStatus, onCloseModal]);

  const onChange = e => {
    const { name, value } = e.target;
    setContact(prev => ({
      ...prev,
      [name]: value,
    }));
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
    if (!isNameValid) {
      setError(true);
      setErrorMessage('This name or phone number is allready exist');
      return;
    }

    dispatch(contactsOperations.addContact(contact));
    resetForm();
  };

  const submitEditedContacts = () => {
    const editedContact = {
      contactId,
      ...contact,
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
    setContact({
      name: '',
      number: '',
    });
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
          value={contact.name}
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
          value={contact.number}
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
          startIcon={
            ((loadingStatus === LOADING_STATUS.IDLE ||
              loadingStatus === LOADING_STATUS.REJECTED) && <SaveIcon />) ||
            (loadingStatus === LOADING_STATUS.SUCCESS && <CheckIcon />)
          }
          fullWidth
          sx={{
            my: 1,
          }}
          disabled={
            loadingStatus === LOADING_STATUS.PENDING ||
            loadingStatus === LOADING_STATUS.SUCCESS
          }
        >
          {(loadingStatus === LOADING_STATUS.IDLE ||
            loadingStatus === LOADING_STATUS.IDLE) &&
            'save'}
          {loadingStatus === LOADING_STATUS.PENDING && '...loading'}
          {loadingStatus === LOADING_STATUS.SUCCESS && 'saved'}
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

ContactEditor.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  contactId: PropTypes.string,
  onCloseModal: PropTypes.func.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
