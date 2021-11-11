import { Grid, Box, List, Typography, Container } from '@mui/material';
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
          <Grid item xs={4}>
            <Box>
              <Typography component="h3" variant="h5">
                Name
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography component="h3" variant="h5">
                Phone number
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography component="h3" variant="h5">
                Actions
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <List></List>
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
