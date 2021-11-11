import { useState } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Typography,
  ListItemIcon,
} from '@mui/material';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import UserPic from 'components/UserPic';

export default function UserInfo() {
  const [anchorEl, setAnchorEl] = useState(null);

  const hamdleMenu = e => {
    const { currentTarget } = e;
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignOut = () => {
    handleClose();
  };

  const renderMenu = () => {
    return (
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box
          sx={{
            py: 1,
            px: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              mr: 1,
            }}
          >
            <UserPic name="User" />
          </Box>
          <Box>
            <Typography variant="h6">Username</Typography>
            <Typography variant="body2">user@mail.com</Typography>
          </Box>
        </Box>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          Home page
        </MenuItem>
        <MenuItem onClick={onSignOut}>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={hamdleMenu}
        sx={{
          m: 0,
          p: 0,
        }}
      >
        <UserPic name="User" />
      </IconButton>
      {renderMenu()}
    </Box>
  );
}
