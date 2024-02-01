import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './SocialEnterpriseServicesModal.module.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1160px',
  maxHeight: '700px',
  bgcolor: 'background.paper',
  border: '1px solid #cecece',
  boxShadow: 24,
  padding: '24px 40px',
  borderRadius: '20px',
};

interface IModalProps {
  title: string;
  src: string;
  header: string;
  text: string;
  children: JSX.Element;
  btn: string;
}

const SocialEnterpriseServicesModal: FC<IModalProps> = ({
  // label,
  title,
  header,
  src,
  text,
  children,

  btn,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p onClick={handleOpen} className={styles.titleBtn}>
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
          <h4 className={styles.title}>{header}</h4>
          <div className={styles.container}>
            <div>
              <div className={styles.imgContainer}>
                <img src={src} alt="img" />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </div>
            </div>
            <div className={styles.leftContainer}>{children}</div>
          </div>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '40px',
              top: '31px',
              color: '#000',
              //   '@media (max-width:630px)': {
              //   },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default SocialEnterpriseServicesModal;
