import { CssBaseline, Grid, Box, Paper } from '@mui/material';
import Welcome from 'components/Welcome';
// import SignIn from 'components/Signin';
// import SignUp from 'components/Signup';
import Copyright from 'components/Copyright';
import img from 'images/brittany-colette-GFLMi4c8XMg-unsplash.jpg';

const phoneBookImg = img;

export default function HomePage() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${phoneBookImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            px: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Welcome />
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
