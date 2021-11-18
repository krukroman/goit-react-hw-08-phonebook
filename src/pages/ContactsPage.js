import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import ContactsList from 'components/ContactssList';
import ModalWindow from 'components/ModalWindow';
import ContactEditor from 'components/ContactEditor';

import { authSelectors } from 'redux/auth';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import LOADING_STATUS from 'components/loading-status';

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
  const [id, setId] = useState('');

  const LoginStatus = useSelector(authSelectors.getLoginStatus);
  const loadingStatus = useSelector(contactsSelectors.getLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    LoginStatus && dispatch(contactsOperations.fetchContacts());
  }, [LoginStatus, dispatch]);

  const resetLoadingStatus = () => {
    loadingStatus !== LOADING_STATUS.IDLE &&
      dispatch(contactsOperations.resetLoadingStatus());
  };

  const openModal = () => {
    resetLoadingStatus();
    setModalOpen(true);
  };

  const closeModal = () => {
    disableEditMode();
    setModalOpen(false);
  };

  const enableEditMode = (id, name, number) => {
    openModal();
    setEditing(true);
    setId(id);
    setNameToEdit(name);
    setNumberToEdit(number);
  };

  const disableEditMode = () => {
    if (!isEditing) return;
    setEditing(false);
    setId('');
    setNameToEdit('');
    setNumberToEdit('');
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
        <ContactsList openModal={openModal} enableEditMode={enableEditMode} />
      </Container>

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <ModalWindow isOpen={isModalOpen} onCloseModal={closeModal}>
        <ContactEditor
          onCloseModal={closeModal}
          isEditing={isEditing}
          contactId={isEditing ? id : ''}
          contactName={isEditing ? nameToEdit : ''}
          contactNumber={isEditing ? numberToEdit : ''}
        />
      </ModalWindow>
    </>
  );
}
