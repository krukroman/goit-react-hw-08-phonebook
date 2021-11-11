import {
  Grid,
  Box,
  List,
  Typography,
  Paper,
  Button,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ContactsListItem from 'components/ContactsListItem';
import Copyright from 'components/Copyright';

export default function ContactsList({ toggleModal, enableEditMode }) {
  return (
    <>
      <Grid
        container
        component={Paper}
        elevation={3}
        sx={{
          py: 1,
          px: 2,
        }}
        id="back-to-top-anchor"
      >
        <Grid item xs={8} sm={6} md={4}>
          <Box>
            <Typography component="h3" variant="h6">
              Name
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={false}
          md={4}
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box>
            <Typography component="h3" variant="h6">
              Phone number
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              onClick={toggleModal}
              sx={{
                display: { sm: 'none' },
                color: '#fff',
                backgroundColor: '#2e7d32',
                transition: 'background-color 300ms linear',
                '&:hover': {
                  backgroundColor: '#1b5e20',
                },
              }}
            >
              <AddIcon />
            </IconButton>
            <Button
              onClick={toggleModal}
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              Add contact
            </Button>
          </Box>
        </Grid>
      </Grid>

      <List>
        <ContactsListItem enableEditMode={enableEditMode} />
      </List>
      <Copyright
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          py: 1,
          px: 2,
          width: '100%',
          backgroundColor: '#fff',
        }}
      />
    </>
  );
}
