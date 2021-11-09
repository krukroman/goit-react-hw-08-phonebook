import * as React from 'react';
import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from 'components/Signin/SignIn';
// import SignUp from 'components/Signup/SignUp';

const theme = createTheme();

export default function AuthPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <SignIn />
      </Grid>
    </ThemeProvider>
  );
}
