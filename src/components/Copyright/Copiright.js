import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';
import PropTypes from 'prop-types';

export default function Copyright(props = false) {
  return (
    <Box component="footer" {...props}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" component={RouterLink} to="/">
          Phonebook
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

Copyright.propTypes = {
  props: PropTypes.shape({}),
};
