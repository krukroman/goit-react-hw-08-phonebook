import { CssBaseline } from '@mui/material';
import Header from 'components/Header';
import ContactCardsList from 'components/ContactCardsList';

export default function ContactsPage() {
  return (
    <>
      <CssBaseline />
      <Header />
      <ContactCardsList />
    </>
  );
}

// import {
//   Typography,
//   CssBaseline,
//   useScrollTrigger,
//   Box,
//   Container,
//   Fab,
//   KeyboardArrowUpIcon,
//   Zoom,
// } from '@mui/material';
