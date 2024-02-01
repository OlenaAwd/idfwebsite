import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Chip } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './HubModal.module.scss';

import { selectForm, setFirstName, setLastName, setEmail, setPhone
} from '../../slices/form'; 
import ButtonComponent from '../ButtonComponent';
import ModalSliderComponent from '../ModalSliderComponent';
import {  ActivityHubModalDataEnquire, BusinessHubModalDataEnquire, EmploymentHubModalDataEnquire, GamingHubModalProgramData } from '../../constants/cardsData';
import ModalForm from '../ModalForm';
import MailService from '../../services/MailService';
import SelectComponent from '../SelectComponent';
import { gamingHubSelect } from '../../constants/pages';
import LazyImgComponent from '../LazyImgComponent';

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
  "@media (max-width: 1190px)": {
    width: 360,
    height: 564,
    padding: "16px"
  }
};

interface IModalProps {
  label: string;
  title?: string;
  src?: string;
  text?: string;
  children: JSX.Element;
  sx?: object;
  header?:string
}

const HubModalEnquire: FC<IModalProps> = ({
  label,
  src,
  text,
  children,
  sx,
  header, title
}) => {
   const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(setFirstName({ firstname: "" }));
    dispatch(setLastName({ lastname: "" }));
    dispatch(setEmail({ email: "" }));
    dispatch(setPhone({ phone:""}));
  }
  const { pathname } = useLocation();
    const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );

    const handleDonate = async () => {
     await MailService.sendMail({hub, firstname,lastname, email,phone});
  };

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
      >
        <Box sx={style}>
          <h4 className={`${styles.header} ${pathname==="/e-sports" && styles.titleLong}`}>{header}</h4>
          <div className={styles.container}>
            <div>
              <div className={styles.imgContainer}>
                <LazyImgComponent src={src} alt="img" />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </div>
            </div>
            <div className={styles.leftContainer}>{children}</div>
          </div>
            <div className={styles.mobStyles}>
            {label === 'Enquire Now' && pathname==="/employment-hub" && EmploymentHubModalDataEnquire.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.title}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <>
                          <h2 className={styles.enquireTitle}>Contact me about employment services</h2>
                          <ModalForm
                            children={
                            <div className={styles.serviceContainer}>
                            <ButtonComponent
                              onClick={handleDonate}
                              color="red"
                              classes={styles.donateNowBtnEnquire}
                            >
                            Contact me
                            </ButtonComponent>
                              </div>
                            }
                          />
                        </>
                }
              />
            ))}
              {label === 'Enquire Now' && pathname==="/business-hub" && BusinessHubModalDataEnquire.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.title}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <>
                          <h2 className={styles.enquireTitle}>Contact me about launching my business</h2>
                          <ModalForm
                            children={
                            <div className={styles.serviceContainer}>
                            <ButtonComponent
                              onClick={handleDonate}
                              color="red"
                              classes={styles.donateNowBtnEnquire}
                            >
                            Contact me
                            </ButtonComponent>
                              </div>
                            }
                          />
                        </>
                }
              />
              ))}
             {label === 'Enquire Now' && pathname==="/activity-hub" && ActivityHubModalDataEnquire.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.title}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <>
                          <h2 className={styles.enquireTitle}>Contact me about activities</h2>
                          <ModalForm
                            children={
                            <div className={styles.serviceContainer}>
                            <ButtonComponent
                              onClick={handleDonate}
                              color="red"
                              classes={styles.donateNowBtnEnquire}
                            >
                            Contact me
                            </ButtonComponent>
                              </div>
                            }
                          />
                        </>
                }
              />
            ))}
            {label === 'Enquire Now' && pathname==="/gaming-hub" && GamingHubModalProgramData.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.title}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <>
                         <SelectComponent
                              arr={gamingHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainer}>
                                  <ButtonComponent
                                    onClick={handleDonate}
                                    color="red"
                                    classes={styles.donateNowBtn}
                                  >
                                   I Want To Find Out More
                                  </ButtonComponent>
                                </div>
                              }
                            />
                        </>
                }
              />
            ))}
            </div>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '10px',
              top: '20px',
              color: '#000',
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default HubModalEnquire;
