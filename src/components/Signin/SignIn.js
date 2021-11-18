import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HomeButton from 'components/HomeButton';

import { authOperations, authSelectors } from 'redux/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const serverError = useSelector(authSelectors.getServerError);
  const dispatch = useDispatch();

  const onFormChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(authOperations.signin(user));
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <HomeButton />
      <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="off"
          autoFocus
          onChange={onFormChange}
          value={email}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
          onChange={onFormChange}
          value={password}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link component={RouterLink} to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        {serverError && (
          <Alert severity="error" sx={{ my: 1 }}>
            Email or password is not valid.
          </Alert>
        )}
      </Box>
    </Box>
  );
}
