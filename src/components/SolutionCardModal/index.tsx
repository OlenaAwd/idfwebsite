import React, { FC } from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import styles from './SolutionCardModal.module.scss';


interface IModalProps {
  children: JSX.Element;
  classes?: string

}

const SolutionCardModal: FC<IModalProps> = ({children, classes}) => {
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
        <div className={`${styles.boxContainer} ${classes && classes}`}>
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default SolutionCardModal;
