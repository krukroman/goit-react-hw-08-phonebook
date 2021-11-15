import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, IconButton, Box } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import contactsOperations from 'redux/contacts/contacts-operaions';
import contactsSelectors from 'redux/contacts/contacts-selectors';
import isContactExist from 'functions/isContactExist';

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
  onModalClose,
  contactName,
  contactNumber,
}) {
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);
  const [error, setError] = useState(false);
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

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

  const onSubmit = e => {
    e.preventDefault();

    const newContact = {
      name,
      number,
    };

    const editedContact = {
      contactId,
      name,
      number,
    };
    if (isEditing) {
      submitContact(editedContact);
      return;
    }

    submitContact(newContact);
  };

  const submitContact = contact => {
    if (isContactExist(contacts, name)) {
      setError(true);
      return;
    }

    dispatch(contactsOperations.addContact(contact));
    resetForm();
    onModalClose();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
    setError(false);
  };

  return (
    <>
      <IconButton onClick={onModalClose}>
        <ArrowBackOutlinedIcon />
      </IconButton>
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          error={error}
          helperText={error && `Contact with name ${name} allready exist`}
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
          fullWidth
          sx={{
            my: 1,
          }}
        >
          Save
        </Button>
      </Box>
    </>
  );
}
