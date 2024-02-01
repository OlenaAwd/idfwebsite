import React, { useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import { Modal, Box } from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import SelectComponent from '../SelectComponent';
import ButtonComponent from '../ButtonComponent';
import { getSupportModaltyles } from '../../constants/styles/getSupportModaltyles';
import { chooseSupportSelect } from '../../constants/pages';
import styles from './ModalSupport.module.scss';
import supportModalImg from '../../assets/supportModalImg.webp';
import supportedBusiness1 from '../../assets/supportedEmploymentCard/businessServices/Picture1.webp';
import ModalSliderComponent from '../ModalSliderComponent';

import {
  selectForm,
 setHub, setFirstName, setLastName, setEmail, setPhone
} from '../../slices/form'; 
import MailService from '../../services/MailService';

interface IModalProps {
  btnProp2: string | JSX.Element;
}

const ModalSupport: FC<IModalProps> = ({ btnProp2 }) => {
   const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    dispatch(setHub({ hub: null })); 
    dispatch(setFirstName({ firstname: "" })); 
    dispatch(setLastName({ lastname: "" })); 
    dispatch(setEmail({ email: "" }));
    dispatch(setPhone({ phone:""}));
  };

  const handleDonate = async() => {
    await MailService.sendMail({ hub, firstname,lastname,email,phone});
  };
  
  return (
    <div className={styles.wrapper}>
      <ButtonComponent
        onClick={handleOpen}
        classes={`${styles.buyNow} ${styles.btnRequestDemoHeader} ${
          pathname === '/support' && styles.hide
        }`}
        color="white"
      >
        {btnProp2}
      </ButtonComponent>
      {pathname === '/support' && (
        <div className={styles.cardsContainer} onClick={handleOpen}>
          <div className={styles.imgCardContainer}>
            <img src={supportedBusiness1} alt="card" />
          </div>
          <p className={styles.titleCard}>Support Choices</p>
        </div>
      )}

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
          <Box sx={getSupportModaltyles}>
            <h3 className={styles.title}>Get Support. Support Coordinator.</h3>
            <div className={styles.desktopStyles}>
            <div className={styles.container}>
              <div>
                <div className={styles.imgContainer}>
                  <img src={supportModalImg} alt="img" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>
                    Talk a Supported Employment Coordinator to find out more
                    about our career and lifestyle opportunities.
                  </h3>
                  <p className={styles.text}>
                    Our diverse range of businesses provide employment and
                    business opportunities for everyone. Talk to one of our
                    Support Coordinators to explore your career choices. With
                    our 100% employment rate, your new career is waiting for
                    you.
                  </p>
                </div>
              </div>
              <div className={styles.leftContainer}>
                <SelectComponent
                  arr={chooseSupportSelect}
                  title="Choose support"
                  children={
                    <div className={styles.donateContainer}>
                      <ButtonComponent
                        onClick={handleDonate}
                        color="red"
                        classes={styles.donateNowBtn}
                      >
                        I want to learn more
                      </ButtonComponent>
                    </div>
                  }
                />
              </div>
            </div>
            </div>
            <div className={styles.mobStyles}>
              <ModalSliderComponent
                firstChildren={
                  <div>
                  <div className={styles.imgContainer}>
                  <img src={supportModalImg} alt="img" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>
                    Talk a Supported Employment Coordinator to find out more
                    about our career and lifestyle opportunities.
                  </h3>
                  <p className={styles.text}>
                    Our diverse range of businesses provide employment and
                    business opportunities for everyone. Talk to one of our
                    Support Coordinators to explore your career choices. With
                    our 100% employment rate, your new career is waiting for
                    you.
                  </p>
                </div>
              </div>
                }
                secondChildren={
                  <div className={styles.leftContainer}>
                <SelectComponent
                  arr={chooseSupportSelect}
                  title="Choose support"
                  children={
                    <div className={styles.donateContainer}>
                      <ButtonComponent
                        onClick={handleDonate}
                        color="red"
                        classes={styles.donateNowBtn}
                      >
                        I want to learn more
                      </ButtonComponent>
                    </div>
                  }
                />
              </div>
                }
              />
            </div>
          
           
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: '40px',
                top: '31px',
                color: '#000',
                 "@media (max-width: 1190px)": {
                     right: '16px',
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalSupport;
