import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Chip } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

import styles from './AdvocacyModalEnquire.module.scss';
import ButtonComponent from '../ButtonComponent';
import useDebounce from '../../hooks/useDebounce';

import { selectForm,
  setFirstName, setLastName, setEmail, setPhone,setOrganisation
} from '../../slices/form'; 
import MailService from '../../services/MailService';

const style = {
  position: 'absolute' as 'absolute',
  top: '90%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '640px',
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  padding: '40px 60px',
  borderRadius: '16px',
  overflowY: 'auto',
     "@media (max-width: 720px)": {
     width: "364px",
     padding:"40px 16px",
  },
};

interface IModalProps {
  label?: string;
  title?: string;
  src?: string;
  text?: string;
  children?: JSX.Element;
  sx?: object;
}

const AdvocacyModalEnquire: FC<IModalProps> = ({
  label,
  src,
  text,
  sx,
}) => {

  const {  firstname,lastname,email,phone,organisation } = useSelector(selectForm);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState(''); 
  const [isEdit, setEdit] = useState(true);
  const [isEditPhone, setEditPhone] = useState(true); 
  const [phoneError, setPhoneError] = useState('');
  const [firstNameValue, setFirstNameValue] = useState(firstname ? firstname : "");
  const [lastNameValue, setLastNameValue] = useState(lastname ? lastname : "");
  const [organisationValue, setOrganisationValue] = useState(organisation ? organisation : "");
  const [emailValue, setEmailValue] = useState(email ? email : "");
  const [phoneValue, setPhoneValue] = useState(phone);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeFirstName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    setFirstNameValue(valueEdited)
    dispatch(setFirstName({ firstname: valueEdited } ));
  };

  const handleChangeLastName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    setLastNameValue(valueEdited)
    dispatch(setLastName({lastname:valueEdited}));
  };

  const handleChangeOrganisation = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value; 
    setOrganisationValue(value);
    dispatch(setOrganisation({organisation:value}));
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
      // dispatch(setEmail({email: val}));
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
    if (emailValue.length === 0) {
      setEmailError('Please, enter your email');
      return;
    }

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

  const handleContact = async (e:FormEvent) => {
    e.preventDefault();
    const isfullname = false;
    await MailService.sendMail({ firstname,lastname,email, phone,organisation, isfullname});
    dispatch(setFirstName({ firstname: '' }));
    dispatch(setLastName({ lastname: '' }));
    dispatch(setEmail({ email: '' }));
    dispatch(setPhone({ phone: '' } ));
    setPhoneValue(" ");
    setEmailValue(" ");
    setFirstNameValue("");
    setLastNameValue("")
  };

  const isDisabled =
    !email ||
    !phone ||
    !isEdit ||
    !!emailError ||
    !isEditPhone ||
    !!phoneError ||
    !firstname ||
    !organisation;

  return (
    <div>
      <Chip
        clickable
        label={label}
        variant="outlined"
        sx={sx}
        onClick={handleOpen}
      />
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
        sx={{ height: '90vh', overflowY: 'auto' }}
      >
        <Box sx={style}>
          <div className={styles.container}>
            <div>
              {/* <div className={styles.imgContainer}>
                <img src={src} alt="img" />
              </div> */}
              <p className={styles.text}>{text}</p>
              <form className={styles.containerForm}>
                <div className={styles.nameWrapper}>
                  <div className={`${styles.itemContainer}`}>
                    <label htmlFor="firstName" className={styles.label}>
                      First name*
                    </label>
                    <input
                      id="firstName"
                      value={firstNameValue}
                      onChange={handleChangeFirstName}
                      type="text"
                      className={`${styles.input} ${styles.inputName}`}
                    />
                  </div>
                  <div className={`${styles.itemContainer}`}>
                    <label htmlFor="lastName" className={styles.label}>
                      Last name*
                    </label>
                    <input
                      id="lastName"
                      value={lastNameValue}
                      onChange={handleChangeLastName}
                      type="text"
                      className={`${styles.input} ${styles.inputName}`}
                    />
                  </div>
                </div>
                <div
                  className={`${styles.itemContainer} ${styles.itemContainerName}`}
                >
                  <label htmlFor="lastName" className={styles.label}>
                    Organisation*
                  </label>
                  <input
                    id="lastName"
                    value={organisationValue}
                    onChange={handleChangeOrganisation}
                    type="text"
                    className={`${styles.input}`}
                  />
                </div>

                <div className={styles.nameWrapper}>
                  <div className={styles.itemContainer}>
                    <label htmlFor="email" className={styles.label}>
                      Your email*
                    </label>
                    <input
                      id="email"
                      value={emailValue}
                      onChange={handleChangeEmail}
                      type="email"
                      className={`${styles.input} ${styles.inputName}`}
                    />
                    <span className={styles.helperText}>{emailError}</span>
                  </div>
                  <div className={styles.itemContainer}>
                    <label htmlFor="tel" className={styles.label}>
                      Mobile*
                    </label>
                    <input
                      id="tel"
                      value={phoneValue}
                      onChange={handleChangePhone}
                      type="tel"
                      className={`${styles.input} ${styles.inputName}`}
                    />
                    <span className={styles.helperText}>{phoneError}</span>
                  </div>
                </div>
                <ButtonComponent
                  onClick={handleContact}
                  classes={styles.btnContactMe}
                  color="red"
                  disabled={isDisabled}
                >
                  Send
                </ButtonComponent>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AdvocacyModalEnquire;
