import { FC,ChangeEvent} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IPropsArray } from '../../types/modalTypes';
import styles from "./ModalForm.module.scss";

import { selectForm, setFirstName, setLastName, setEmail, setPhone
} from '../../slices/form'; 

const ModalForm: FC<IPropsArray> = ({children}) => {
  const { firstname,lastname,email,phone,} = useSelector(
    selectForm
  );
  const dispatch = useDispatch();
   
  const handleFirstName = ( event : ChangeEvent<HTMLInputElement>) => {
    dispatch(setFirstName({firstname:event.target.value}));
  };
  const handleLastName = ( event : ChangeEvent<HTMLInputElement>) => {
    dispatch(setLastName({lastname:event.target.value}));
  };
  const handleEmail = ( event : ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail({email:event.target.value}));
  };
  const handleMobile = ( event : ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhone({ phone:event.target.value}));
  };
  
  return (
   <div className={`${styles.formModal}`}>
        <form>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="First Name"
              className={styles.subscribeInputModal}
              type="text"
              onChange={handleFirstName}
              name='firstname'
              value={firstname}
            />
          </div>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="Last Name"
              className={styles.subscribeInputModal}
              type="text"
              name='lastname'
              onChange={handleLastName}
              value={lastname}
            />
          </div>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="Email"
              className={styles.subscribeInputModal}
              type="email"
              name='email'
              onChange={handleEmail}
              value={email}
            />
          </div>
          <div className={styles.itemContainerModal}>
            <input
              placeholder="Mobile"
              className={styles.subscribeInputModal}
              type="tel"
              name="phone"
              onChange={handleMobile}
              value={phone}
            />
          </div>
        </form>
        {children}
      </div>
  )
}

export default ModalForm