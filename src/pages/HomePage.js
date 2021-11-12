import { CssBaseline, Grid, Box, Paper } from '@mui/material';
import Copyright from 'components/Copyright';
import img from 'images/brittany-colette-GFLMi4c8XMg-unsplash.jpg';

const phoneBookImg = img;

export default function HomePage({ children }) {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          display: { sx: 'none', sm: 'block' },
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
          position="relative"
          sx={{
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          {children}
          <Copyright
            sx={{
              position: 'absolute',
              bottom: 10,
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
