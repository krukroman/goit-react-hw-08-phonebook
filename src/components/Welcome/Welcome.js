import { Box, Link, Typography } from '@mui/material';
export default function Welcome() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        sx={{
          mt: 8,
        }}
        align="center"
      >
        Welcome to Phonebook app
      </Typography>
      <Typography
        sx={{
          mt: 20,
        }}
        variant="h5"
        align="center"
      >
        <Link href="#" variant="h5" underline="hover">
          {'Sign In'}
        </Link>{' '}
        {'with your account or '}
        <Link href="#" variant="h5" underline="hover">
          {'Sign Up'}
        </Link>{' '}
        {'to start'}
      </Typography>
    </Box>
  );
}
