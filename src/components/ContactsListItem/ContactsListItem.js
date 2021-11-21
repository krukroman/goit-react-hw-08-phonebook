import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, ListItem, Box, Typography, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import UserPic from 'components/UserPic';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import LOADING_STATUS from 'components/loading-status';

const itemStyle = {
  px: 2,
  borderRadius: 1,
  transition: 'background-color 300ms linear',
  '&:hover': {
    backgroundColor: '#eee',
  },
};

export default function ContactsListItem({ id, name, number, enableEditMode }) {
  const loadingStatus = useSelector(contactsSelectors.getLoadingStatus);
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(contactsOperations.deleteContact(id));
  };
  return (
    <ListItem sx={itemStyle}>
      <Grid container>
        <Grid item xs={8} sm={8} md={4}>
          <Box
            sx={{
              display: 'fkex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                mr: 2,
              }}
            >
              <UserPic name={name} />
            </Box>
            <Box>
              <Typography
                component="p"
                variant="body1"
                sx={{
                  fontWeight: '700',
                }}
              >
                {name}
              </Typography>
              <Typography sx={{ display: { md: 'none' } }}>{number}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={false}
          md={4}
          sx={{
            display: { xs: 'none', md: 'block' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'fkex',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Typography>{number}</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: '100%',
              minWidth: '100%',
            }}
          >
            <IconButton
              aria-label="edit contact"
              onClick={() => enableEditMode(id, name, number)}
            >
              <Edit />
            </IconButton>
            <IconButton
              aria-label="delete-contact"
              onClick={onDeleteContact}
              disabled={loadingStatus === LOADING_STATUS.PENDING}
            >
              <Delete />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
}

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  enableEditMode: PropTypes.func.isRequired,
};
