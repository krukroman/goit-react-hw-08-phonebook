import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material';
import SearchBar from 'components/SerachBar/SearchBar';
import UserInfo from 'components/Userinfo/Userinfo';

export default function Header() {
  return (
    <AppBar
      color="primary"
      position="static"
      elevation={0}
      sx={{
        borderBottom: '1px solid #eee',
      }}
    >
      <Toolbar>
        <Grid container>
          <Grid
            item
            xs={false}
            sm={4}
            md={3}
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                minHeight: '100%',
              }}
            >
              <Typography component="p" variant="h5">
                Phonebook App
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={10} sm={7} md={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={2} sm={1} md={3}>
            <UserInfo />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
