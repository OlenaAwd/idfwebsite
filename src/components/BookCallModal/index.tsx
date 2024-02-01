import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './BookCallModal.module.scss';
import calendlyBtnIcon from '../../assets/calendlyIconBtn.svg';
import { useLocation } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1160px',
  maxHeight: '700px',
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  padding: '24px 40px',
  borderRadius: '20px',
   "@media (max-width: 1190px)": {
    width: 360,
    height: 564,
    padding: "16px"
  },
    // "@media (max-width: 860px)": {
    //     padding: "0px 40px",
    // },
    // "@media (max-width: 820px)": {
    //     width: 720,
    //   p: "10px",
    //   height: "700px",
    //   overflow: "auto"
    // },
    // "@media (max-width: 720px)": {
    //     width: 600,
    // },
    // "@media (max-width: 650px)": {
    //     width: 500,
    // },
    // "@media (max-width: 510px)": {
    //     width: 450,
    // },
    // "@media (max-width: 460px)": {
    //     width: 390,
    // },

};

interface IModalProps {
  children: JSX.Element;
  btn: string;
  href?: string;
}

const BookCallModal: FC<IModalProps> = ({ children, btn, href }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { pathname } = useLocation();
  
  const check = (pathname === "/employment-hub") ||(pathname === "/activity-hub")||(pathname === "/gaming-hub");

  return (
    <div>
      <p onClick={handleOpen} className={styles.btnText}>
        {btn}
        <img src={calendlyBtnIcon} alt="icon" />
      </p>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          <div className={`${!check && styles.leftContainer}`}>{children}</div>

          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '10px',
              top: '31px',
              color: '#000',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default BookCallModal;
