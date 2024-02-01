import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Chip } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './HubModal.module.scss';

import { selectForm,
 setHub, setFirstName, setLastName, setEmail, setPhone
} from '../../slices/form'; 
import ModalSliderComponent from '../ModalSliderComponent';
import { ActivityHubModalProgramData, BusinessHubModalProgramData, EmploymentHubModalData, GamingHubModalProgramData } from '../../constants/cardsData';
import SelectComponent from '../SelectComponent';
import ButtonComponent from '../ButtonComponent';
import { activityHubSelect, businessHubSelect, employmentHubSelectCheck } from '../../constants/pages';
import MailService from '../../services/MailService';
import { useLocation } from 'react-router-dom';
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
  header: string;
}

const HubModal: FC<IModalProps> = ({
  label,
  src,
  text,
  children,
  sx,
  title,
  header,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
   dispatch(setHub({hub:null}));
    dispatch(setFirstName({ firstname: "" }));
    dispatch(setLastName({ lastname: "" }));
    dispatch(setEmail({ email: "" }));
    dispatch(setPhone({ phone:""}));
  }

  const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );
  const handleDonate = async () => {
     await MailService.sendMail({hub, firstname,lastname,email,phone});
    console.log('handleDonate');
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
          <h4 className={styles.title}>{header}</h4>
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
            {label === "Check job board" && pathname==="/employment-hub" && EmploymentHubModalData.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.titleModal}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <div className={styles.leftContainer}>
                   <SelectComponent
                              arr={employmentHubSelectCheck}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainerEnquire}>
                                  <ButtonComponent
                                    onClick={handleDonate}
                                    color="red"
                                    classes={styles.donateNowBtn}
                                  >
                                    Keep me UPDATED
                                  </ButtonComponent>
                                </div>
                              }
                            />
                  </div>
                }
              />
            ))}
            {label === "Start a business" && pathname==="/business-hub" && BusinessHubModalProgramData.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.titleModal}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <div className={styles.leftContainer}>
                   <SelectComponent
                              arr={businessHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainerEnquire}>
                                  <ButtonComponent
                                    onClick={handleDonate}
                                    color="red"
                                    classes={styles.donateNowBtn}
                                  >
                                     Contact me
                                  </ButtonComponent>
                                </div>
                              }
                            />
                  </div>
                }
              />
            ))}
            {label === 'Check our Activities' &&  pathname==="/activity-hub" && ActivityHubModalProgramData.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.titleModal}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <div className={styles.leftContainer}>
                   <SelectComponent
                              arr={activityHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainerEnquire}>
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
            ))}
            {label === "Join Us" && pathname==="/gaming-hub" && GamingHubModalProgramData.map(item => (
              <ModalSliderComponent
                firstChildren={
                  <div>
                    <div className={styles.imgContainer}>
                      <LazyImgComponent src={item.img} alt="img" />
                    </div>
                    <div className={styles.textContainer}>
                      <h3 className={styles.titleModal}>
                       {item.title}
                      </h3>
                      <p className={styles.text}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                }
                secondChildren={
                  <div className={styles.leftContainer}>
                   <SelectComponent
                              arr={businessHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainerEnquire}>
                                  <ButtonComponent
                                    onClick={handleDonate}
                                    color="red"
                                    classes={styles.donateNowBtn}
                                  >
                                     Contact me
                                  </ButtonComponent>
                                </div>
                              }
                            />
                  </div>
                }
              />
            ))}


         
            </div>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '40px',
              top: '31px',
              color: '#000',
                '@media (max-width:1190px)': {
                   right: '5px',
                    top: '10px',
                },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default HubModal;
