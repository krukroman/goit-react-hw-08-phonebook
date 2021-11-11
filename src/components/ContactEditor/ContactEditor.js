import { useState } from 'react';
import { TextField, Button, IconButton, Box } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const namePattern =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";
const namePatternTitle =
  "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.";
const phonePattern =
  '[+]?[0-9,]{1,4}?[-, ]?[(]?[0-9, ]{1,3}?[)]?[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,4}[-, ]?[0-9, ]{1,9}';
const phonePatternTitle =
  'Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +';

export default function ContactEditor({
  onModalClose,
  contactName,
  contactNumber,
}) {
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);

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
    console.log(`Submit`);
    setName('');
    setNumber('');
    onModalClose();
  };

  return (
    <>
      <IconButton onClick={onModalClose}>
        <ArrowBackOutlinedIcon />
      </IconButton>
      <Box component="form" onSubmit={onSubmit}>
        <TextField
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
