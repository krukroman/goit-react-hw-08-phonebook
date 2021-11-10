import { Typography, Box } from '@mui/material';
import UserPic from 'components/UserPic';

export default function UserInfo() {
  return (
    <Box
      sx={{
        px: 1,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <UserPic
        name="User"
        sx={{
          mr: 1,
        }}
      />
      <Typography component="p" variant="h6">
        User Name
      </Typography>
    </Box>
  );
}
