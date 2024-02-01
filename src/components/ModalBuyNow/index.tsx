import React, { useState, FC, ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import { Modal, Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import ButtonComponent from '../ButtonComponent';
import useDebounce from '../../hooks/useDebounce';
import { buyModalStyles } from '../../constants/styles/BuyModal';
import styles from './ModalBuyNow.module.scss';
import { IModalProps } from '../../types/modalType';
import { useLocation } from 'react-router-dom';

import { selectForm,
  setFirstName, setLastName, setEmail, setPhone,setEstate
} from '../../slices/form'; 
import MailService from '../../services/MailService';

const ModalBuyNow: FC<IModalProps> = ({ classes }) => {
   const { hub, firstname,lastname,email,phone,estate} = useSelector(
    selectForm
  );
   const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailValue, setEmailValue] = useState(email ? email : "");
  const [isEdit, setEdit] = useState(true);
  const [isEditPhone, setEditPhone] = useState(true);
  const [phoneValue, setPhoneValue] = useState(phone ? phone : "+610");
  const [phoneError, setPhoneError] = useState('');
 

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false); 
    setPhoneError('');

  };
  const { pathname } = useLocation();

  const handleChangeFirstName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    dispatch(setFirstName({firstname:valueEdited}));
  };

  const handleChangeLastName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, ''); 
    dispatch(setLastName({lastname:valueEdited}));
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

  const handleChangeRestaurant = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    dispatch(setEstate({estate:value}));
  };

  const handleStart = async () => {
    const isEstate = (pathname !== "/real-estate-services") ? false : true;
      await MailService.sendMail({hub, firstname,lastname,email,phone,estate,isEstate});
  }

  const isDisabled =
    !emailValue ||
    !phone ||
    !isEdit ||
    !!emailError ||
    !isEditPhone ||
    !!phoneError ||
    !firstname ||
    !lastname;

  return (
    <div>
      <ButtonComponent
        onClick={handleOpen}
        classes={`${styles.buyNow} ${classes && classes}`}
        color="white"
      >
        Buy Now
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
          <Box sx={buyModalStyles}>
            <p className={styles.modalTitle}>
              Sign me up for $15 a week for 12 months
            </p>
            <form className={styles.container}>
              <div className={styles.nameWrapper}>
                <div
                  className={`${styles.itemContainer} ${styles.itemContainerName}`}
                >
                  <label htmlFor="firstName" className={styles.label}>
                    First name*
                  </label>
                  <input
                    id="firstName"
                    value={firstname}
                    onChange={handleChangeFirstName}
                    type="text"
                    className={`${styles.input} ${styles.inputName}`}
                  />
                </div>
                <div
                  className={`${styles.itemContainer} ${styles.itemContainerName}`}
                >
                  <label htmlFor="lastName" className={styles.label}>
                    Last name*
                  </label>
                  <input
                    id="lastName"
                    value={lastname}
                    onChange={handleChangeLastName}
                    type="text"
                    className={`${styles.input} ${styles.inputName}`}
                  />
                </div>
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
              <div className={styles.itemContainer}>
                {pathname!=="/real-estate-services" ?   <label htmlFor="restaurant" className={styles.label}>
                  Restaurant name
                </label> :  <label htmlFor="restaurant" className={styles.label}>
                  Real Estate name
                </label>}
               
                <input
                  id="restaurant"
                  value={estate}
                  onChange={handleChangeRestaurant}
                  type="text"
                  className={styles.input}
                />
              </div>
              <ButtonComponent
                onClick={handleStart}
                classes={styles.btnContactMe}
                color="red"
                disabled={isDisabled}
              >
                Get me started
              </ButtonComponent>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalBuyNow;
