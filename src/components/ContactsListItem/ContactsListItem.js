import { Grid, ListItem, Box, Typography, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

import UserPic from 'components/UserPic';

const itemStyle = {
  px: 2,
  borderRadius: 1,
  transition: 'background-color 300ms linear',
  '&:hover': {
    backgroundColor: '#eee',
  },
};

export default function ContactsListItem() {
  const onDeleteContact = () => {
    console.log(`Delet contact`);
  };
  return (
    <ListItem sx={itemStyle}>
      <Grid container>
        <Grid item xs={8} sm={6} md={4}>
          <Box
            sx={{
              display: 'fkex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                mr: 2,
              }}
            >
              <UserPic name="Contact" />
            </Box>
            <Typography
              component="p"
              variant="body1"
              sx={{
                fontWeight: '500',
              }}
            >
              Contact Name
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={false}
          md={4}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              display: 'fkex',
              alignItems: 'center',
              verticalAlign: 'middle',
            }}
          >
            <Typography>123-123-4564</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sm={6} md={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              minWidth: '100%',
            }}
          >
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton onClick={onDeleteContact}>
              <Delete />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
}
