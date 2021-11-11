import { Box, Typography, Link } from '@mui/material';

export default function Copyright(props = false) {
  return (
    <Box component="footer" {...props}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Phonebook
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}
