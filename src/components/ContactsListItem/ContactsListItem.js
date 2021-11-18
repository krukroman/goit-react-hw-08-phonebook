import { useDispatch } from 'react-redux';
import { Grid, ListItem, Box, Typography, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import UserPic from 'components/UserPic';
import contactsOperations from 'redux/contacts/contacts-operaions';

const itemStyle = {
  px: 2,
  borderRadius: 1,
  transition: 'background-color 300ms linear',
  '&:hover': {
    backgroundColor: '#eee',
  },
};

export default function ContactsListItem({ id, name, number, enableEditMode }) {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(contactsOperations.deleteContact(id));
  };
  return (
    <ListItem sx={itemStyle}>
      <Grid container>
        <Grid item xs={8} sm={6} md={4}>
          <Box
            sx={{
              display: 'fkex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                mr: 2,
              }}
            >
              <UserPic name={name} />
            </Box>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: '500',
              }}
            >
              {name}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={false}
          md={4}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'fkex',
              alignItems: 'center',
              verticalAlign: 'middle',
            }}
          >
            <Typography>{number}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              minWidth: '100%',
            }}
          >
            <IconButton
              aria-label="edit contact"
              onClick={() => enableEditMode(id, name, number)}
            >
              <Edit />
            </IconButton>
            <IconButton aria-label="delete-contact" onClick={onDeleteContact}>
              <Delete />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
}
