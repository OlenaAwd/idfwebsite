import React, { useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { IModalNeurodiversityProps } from '../../types/modalType';
import styles from './ModalNeurodiversity.module.scss';
import closeIcon from '../../assets/Close.svg';

import {setHub, setFirstName, setLastName, setEmail, setPhone
} from '../../slices/form';  
const ModalNeurodiversity: FC<IModalNeurodiversityProps> = ({
  btn,
  children,
  classes,
  stylesText
}) => {
   const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    
     dispatch(setHub({ hub: null })); 
     dispatch(setFirstName({ firstname: "" })); 
    dispatch(setLastName({ lastname: "" })); 
    dispatch(setEmail({ email: "" }));
    dispatch(setPhone({ phone:""}));
  }
  return (
    <div>
      <p className={`${styles.text} ${stylesText && stylesText}`} onClick={handleOpen}>
        {btn}
      </p>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className={`${styles.box} ${classes && classes}`}>
            <>{children}</>
            <img
              src={closeIcon}
              alt="close"
              className={styles.closeIcon}
              onClick={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalNeurodiversity;
