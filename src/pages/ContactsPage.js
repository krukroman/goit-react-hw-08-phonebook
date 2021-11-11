import { useState } from 'react';
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
import ModalWindow from 'components/ModalWindow';
import ContactEditor from 'components/ContactEditor';

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const onScrollTop = event => {
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
        onClick={onScrollTop}
        role="presentation"
        sx={{ position: 'fixed', bottom: 8, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function ContactsPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [nameToEdit, setNameToEdit] = useState('');
  const [numberToEdit, setNumberToEdit] = useState('');

  const enableEditMode = (name, number) => {
    setModalOpen(true);
    setEditing(true);
    setNameToEdit(name);
    setNumberToEdit(number);
  };

  const disableEditMode = () => {
    if (!isEditing) return;
    setEditing(false);
    setNameToEdit('');
    setNumberToEdit('');
  };

  const toggleModal = () => {
    isModalOpen ? setModalOpen(false) : setModalOpen(true);
    disableEditMode();
  };

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
        <ContactCardsList
          toggleModal={toggleModal}
          enableEditMode={enableEditMode}
        />
      </Container>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <ModalWindow isOpen={isModalOpen} onCloseModal={toggleModal}>
        <ContactEditor
          onModalClose={toggleModal}
          contactName={isEditing ? nameToEdit : ''}
          contactNumber={isEditing ? numberToEdit : ''}
        />
      </ModalWindow>
    </>
  );
}
