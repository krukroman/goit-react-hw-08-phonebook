import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import UserPic from 'components/UserPic';
import authSelectors from 'redux/auth/auth-selectors';

export default function WelcomeLoginedUser() {
  const userName = useSelector(authSelectors.getUserName);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <UserPic
        name={userName}
        sx={{
          width: 56,
          height: 56,
        }}
      />
      <Typography component="h5" variant="h4" sx={{ mt: 3 }} align="center">
        {`Welcome, ${userName}`}
      </Typography>
      <Button
        component={RouterLink}
        to="/contacts"
        variant="contained"
        sx={{ mt: 3 }}
      >
        go to contacts page
      </Button>
    </Box>
  );
}
