import { Grid, Box, List, Typography, Container, Divider } from '@mui/material';
import ContactsListItem from 'components/ContactsListItem';
import Copyright from 'components/Copyright';

export default function ContactsList() {
  return (
    <>
      <Container
        component="main"
        sx={{
          minWidth: '100%',
        }}
      >
        <Grid
          container
          sx={{
            py: 1,
            px: 2,
          }}
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
            <Box>
              <Typography component="h3" variant="h6">
                Actions
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <List>
          <ContactsListItem />
        </List>
      </Container>
      <Copyright
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          py: 1,
          px: 2,
          width: '100%',
        }}
      />
    </>
  );
}
