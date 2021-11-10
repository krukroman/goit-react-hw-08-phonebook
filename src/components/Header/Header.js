import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import UserInfo from 'components/Userinfo/Userinfo';

export default function Header() {
  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Typography
          component="p"
          variant="h5"
          sx={{ fontWeight: 'bold', flexGrow: 1 }}
        >
          Phonebook App
        </Typography>
        <UserInfo />
        <Box
          sx={{
            px: 1,
          }}
        >
          <Button variant="contained">Sign Out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
