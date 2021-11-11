import {
  CssBaseline,
  Container,
  Box,
  useScrollTrigger,
  Fab,
  Zoom,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Header from 'components/Header';
import ContactCardsList from 'components/ContactssList';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 8, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function ContactsPage() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container
        component="main"
        sx={{
          pt: 10,
          pb: 3,
          minWidth: '100%',
        }}
      >
        <ContactCardsList />
      </Container>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
