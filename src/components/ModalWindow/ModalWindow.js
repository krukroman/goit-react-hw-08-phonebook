import { Fade, Modal, Backdrop } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const style = {
  p: 2,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 288,
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: 1,
};

export default function ModalWindow({ children, isOpen, onCloseModal }) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onCloseModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}

ModalWindow.propTypes = {
  children: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
