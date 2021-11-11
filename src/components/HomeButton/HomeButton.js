import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function HomeButton() {
  return (
    <Button
      component={RouterLink}
      to="/"
      variant="contained"
      startIcon={<ArrowBackOutlinedIcon />}
      sx={{
        m: 0,
        position: 'absolute',
        top: 10,
        left: 32,
      }}
    >
      Home
    </Button>
  );
}
