import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import UserPic from 'components/UserPic';
export default function WelcomeLoginedUser() {
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
        name="User"
        sx={{
          mt: 3,
          width: 56,
          height: 56,
        }}
      />
      <Typography component="h5" variant="h4" sx={{ mt: 3 }} align="center">
        Welcome User
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
