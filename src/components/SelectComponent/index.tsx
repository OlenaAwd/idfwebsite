/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState,ChangeEvent, useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { navbarItem } from '../../constants/styles/customSelectStyles';
import { IPropsArray } from '../../types/modalTypes';
import styles from './SelectComponent.module.scss';

import { selectForm,
 setHub, setFirstName, setLastName, setEmail, setPhone
} from '../../slices/form'; 
import useDebounce from '../../hooks/useDebounce';

const SelectComponent: FC<IPropsArray> = ({ arr, children, title }) => {

  
  const { hub, firstname,lastname, email, phone,} = useSelector(
    selectForm
  );
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<string | undefined>("");
  const [emailError, setEmailError] = useState('');
  const [emailValue, setEmailValue] = useState(email ? email : "");
  const [isEdit, setEdit] = useState(true);

  const [isEditPhone, setEditPhone] = useState(true);
  const [phoneValue, setPhoneValue] = useState(phone ? phone : "");
  const [phoneError, setPhoneError] = useState('');

  console.log('phone Select :>> ', phone);
  
  const handleHub = (event: SelectChangeEvent) => {
    setSelected(event.target.value);

    dispatch(setHub({ hub: event.target.value }));

  };
  const handleFirstName = ( event : ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstName({firstname:event.target.value}));
  };
  const handleLastName = ( event : ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastName({lastname:event.target.value}));
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
      //  dispatch(setEmail({email: val}));
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
    // if (emailValue.length === 0) {
    //   setEmailError('Please, enter your email');
    //   return;
    // }

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
      dispatch(setPhone({ phone:val.target.value}));
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
  //   const regex=/^\+610/;
  //   const checkPhone = regex.test(phoneValue);

  // if (phoneValue.length >13 || (phoneValue.length !== 4 && phoneValue.length <13 )|| !checkPhone ) {
  //     setPhoneError('Please enter a valid phone number');
  //     return;
  //   }

  //   setPhoneError('');
  //   setPhoneValue(phoneValue);
  //   dispatch(setPhone({ phone:phoneValue}));
  const regex = /^\d.*/;

  if (regex.test(phoneValue)) {
    setPhoneError('');
    dispatch(setPhone({ phone:phoneValue}));
  } 
  };

  return (
    <div>
      <Select
        value={selected}
        onChange={handleHub}
        displayEmpty
        IconComponent={ExpandMoreIcon}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return   <em className={styles.selectTitle} >{title}</em>
            }
            return selected;
          }}
        sx={{
          '& .MuiSvgIcon-root': {
            color: '#BA291C',
            width: '28px',
            height: '28px',
          },
          marginTop: '5px',
          paddingRight: '24px',
          paddingLeft: '24px',
          color: '#BA291C',
          fontFamily: 'Kanit, sans-serif',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '30px',
          textAlign: 'center',
          width: '433px',
          height: '54px',
          borderRadius: '40px',
          backgroundColor: '#FFF',
          '&.Mui-focused': {
            color: '#BA291C',
            borderColor: '#BA291C',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#BA291C',
            },
          },
          legend: {
          },
          '@media (max-width: 1190px)': {
            width: '290px',
            height:42,
          },
        }}
      >
        <MenuItem value="null" disabled>
          <em className={styles.selectTitle} >{title}</em>
        </MenuItem>
        {arr && arr.map(name => (
          <MenuItem key={name} value={name} sx={navbarItem}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <div className={`${styles.formModal}`}>
        <form>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="First Name"
              className={styles.subscribeInputModal}
              type="text"
              onChange={handleFirstName}
              name='firstname'
              value={firstname || ""}
            />
          </div>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="Last Name"
              className={styles.subscribeInputModal}
              type="text"
              name='lastname'
              onChange={handleLastName}
              value={lastname || ""}
            />
          </div>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="Email"
              className={styles.subscribeInputModal}
              type="email"
              name='email'
              onChange={handleChangeEmail}
              value={emailValue}
            />
                 <span className={styles.helperText}>{emailError}</span>
          </div>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="Mobile"
              className={styles.subscribeInputModal}
              type="tel"
              name="phone"
              onChange={handleChangePhone}
              value={phoneValue}
            />
              <span className={styles.helperText}>{phoneError}</span>
          </div>
        </form>
        {children}
      </div>

    </div>
  );
};
export default SelectComponent;
