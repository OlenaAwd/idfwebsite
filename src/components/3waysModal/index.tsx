import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import styles from './3waysModal.module.scss';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '639px',
  maxHeight: '310px',
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  padding: '24px 33px 30px 24px',
  borderRadius: '20px',
  outline: "none",
    "@media (max-width: 660px)": {
      width: 358,
       maxHeight: '510px',
    },
   
};

interface IModalProps {
  // label: string;
 
  //  src?: string;
  // text?: string;
  children: JSX.Element;
  // sx?: object;
  // header: string;
}

const ThreeWaysModal: FC<IModalProps> = ({children}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p onClick={handleOpen} className={styles.btnLearnMore}>Learn More</p> 
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
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default ThreeWaysModal;
