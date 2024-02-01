import { useState, FC, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';

import { Modal, Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import ButtonComponent from '../ButtonComponent';
import { requestModalStyles } from '../../constants/styles/RequestDemoModal';
import useDebounce from '../../hooks/useDebounce';
import styles from './ModalRequestDemo.module.scss';
import { IModalProps } from '../../types/modalType';

import { selectForm, setFirstName, setEmail, setPhone
} from '../../slices/form'; 
import MailService from '../../services/MailService';
import {  useLocation } from 'react-router-dom';

const ModalRequestDemo: FC<IModalProps> = ({ classes }) => {
   const {firstname, email,phone,} = useSelector(
    selectForm
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isEdit, setEdit] = useState(true);
  const [isEditPhone, setEditPhone] = useState(true);
  const [emailValue, setEmailValue] = useState(email ? email : "");
  const [phoneValue, setPhoneValue] = useState(phone ? phone : "");
  const [phoneError, setPhoneError] = useState('');

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setPhoneError(''); 
    setEmailValue('');
    setEmailError(''); 
    dispatch(setFirstName({ firstname: "" })); 
    dispatch(setEmail({ email: "" }));
    dispatch(setPhone({ phone:""}));
  };

  const handleChangeName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
     const valueEdited = value.replace(/[0-9]/g, '');
     dispatch(setFirstName({firstname:valueEdited})); 
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmailError('');
    setEmailValue(val);
    setEdit(false);

    if (!val) {
      setEmailError('Please, enter your email');
      return;
    }
  };

  const debouncedEmail = useDebounce(emailValue, 500);

  useEffect(() => {
    if (debouncedEmail) {
       validateEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedEmail]);

  const validateEmail = () => {
    setEdit(true);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = regex.test(emailValue);
 
    if (!checkEmail) {
      setEmailError('Please use a valid email address');
      return;
    }

    setEmailError('');
    setEmailValue(emailValue);
    dispatch(setEmail({ email: emailValue }));
  };

  const handleChangePhone = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value || '';
    setPhoneError('');
    setPhoneValue(value);
    setEditPhone(false);
    if (!value) {
      setPhoneError('Please enter a valid phone number');
    }
  };

  const debouncedPhone = useDebounce(phoneValue, 500);

  useEffect(() => {
    if (debouncedPhone) {
      validatePhone();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPhone]);

  const validatePhone = () => {
    setEditPhone(true);
  const regex = /^\d.*/;

  if (regex.test(phoneValue)) {
    setPhoneError('');

    dispatch(setPhone({ phone:phoneValue}));
  } 
  };
  const handleDemo = async () => {
    const isfullname = true;
     await MailService.sendMail({  firstname,email,phone,isfullname});
  }
  const isDisabled =
    !emailValue ||
    !isEdit ||
    !!emailError ||
    !isEditPhone ||
    !phone ||
    !!phoneError;

    const {pathname}=useLocation()

  return (
    <div>
      <ButtonComponent
        onClick={handleOpen}
        classes={`${styles.btnRequestDemo} ${classes}`}
        color="red"
      >
        {(pathname==="/hamper" || pathname==="/specially-made")? "Learn More" : "Request a Demo"}
      </ButtonComponent>
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
          <Box sx={requestModalStyles}>
            <p className={styles.modalTitle}>
              Request a demo of our amazing product today
            </p>
            <div className={styles.container}>
              <div className={styles.itemContainer}>
                <label htmlFor="name" className={styles.label}>
                  Name*
                </label>
                <input
                  id="name"
                  value={firstname}
                  onChange={handleChangeName}
                  type="text"
                  name='firstname'
                  className={styles.input}
                />
              </div>
              <div className={styles.itemContainer}>
                <label htmlFor="email" className={styles.label}>
                  Email*
                </label>
                <input
                  id="email"
                  value={emailValue}
                  onChange={handleChangeEmail}
                  type="email"
                  className={styles.input}
                />
                <span className={styles.helperText}>{emailError}</span>
              </div>
              <div className={styles.itemContainer}>
                <label htmlFor="tel" className={styles.label}>
                  Phone number*
                </label>
                <input
                  id="tel"
                  value={phoneValue}
                  onChange={handleChangePhone}
                  type="tel"
                  className={styles.input}
                />
                <span className={styles.helperText}>{phoneError}</span>
              </div>
              <ButtonComponent
                onClick={handleDemo}
                classes={styles.btnContactMe}
                color="red"
                disabled={isDisabled}
              >
                Contact Me for a Demo
              </ButtonComponent>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalRequestDemo;
