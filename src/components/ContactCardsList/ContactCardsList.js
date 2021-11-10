import {
  Grid,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import UserPic from 'components/UserPic';

export default function ContactCardsList() {
  return (
    <>
      <Grid container>
        <Grid item sm={4} md={4} lg={4}>
          <Box>
            <Typography component="h3" variant="h5" textAlign="center">
              Name
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} md={4} lg={4}>
          <Box>
            <Typography component="h3" variant="h5" textAlign="center">
              Phone number
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={4} md={4} lg={4}>
          <Box>
            <Typography component="h3" variant="h5" textAlign="center">
              Others
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <List>
        <ListItem>
          <ListItem
            component="a"
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <UserPic name="Contact" />
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
          ,
        </ListItem>
      </List>
    </>
  );
}
