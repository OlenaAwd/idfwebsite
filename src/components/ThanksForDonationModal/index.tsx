import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ThanksForDonationModal.module.scss';
import thanksImg from "../../assets/thanksDonateImg.webp";
import LazyImgComponent from '../LazyImgComponent';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '640px',
  maxHeight: '746px',
  bgcolor: 'background.paper',
  outline: "none",
  boxShadow: 24,
  padding: '60px',
  borderRadius: '20px',
 

    "@media (max-width: 700px)": {
        width: 358,
        padding:"16px",
    },

};

interface IModalProps {

  btn: JSX.Element;
}

const ThanksForDonationModal: FC<IModalProps> = ({  btn,}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <p onClick={handleOpen} className={styles.btnText}>
        {btn}
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
          <div className={`${styles.leftContainer}`}>
            <h3 className={styles.modalTitle}>Thank you for your donation</h3>
            <p className={styles.modalText}>Your donation empowers IDF, championing inclusive employment and uplifting individuals with disabilities.</p>
            <div className={styles.modalImgContainer}>
              <LazyImgComponent src={thanksImg} alt="thanks for donation" />
            </div>
          </div>

          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '30px',
              top: '30px',
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

export default ThanksForDonationModal;
