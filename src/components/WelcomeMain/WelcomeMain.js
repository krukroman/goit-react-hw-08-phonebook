import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
export default function WelcomeMain() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h2" align="center">
        Welcome to Phonebook app
      </Typography>
      <Typography
        sx={{
          mt: 3,
        }}
        variant="h5"
        align="center"
      >
        <Link
          component={RouterLink}
          to="/signin"
          variant="h5"
          underline="hover"
        >
          {'Sign In'}
        </Link>{' '}
        {'with your account or '}
        <Link
          component={RouterLink}
          to="/signup"
          variant="h5"
          underline="hover"
        >
          {'Sign Up'}
        </Link>{' '}
        {'to start'}
      </Typography>
    </Box>
  );
}
