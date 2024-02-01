import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ModalForm from '../../components/ModalForm';
import ModalSliderComponent from '../../components/ModalSliderComponent';
import ButtonComponent from '../../components/ButtonComponent'
import { selectForm} from '../../slices/form'; 
import MailService from '../../services/MailService';
import {ActivityHubModalDataEnquire } from '../../constants/cardsData'
import styles from './ContactCoordinator.module.scss';
import LazyImgComponent from '../../components/LazyImgComponent';


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
const ContactCoordinator = () => {
    const { hub, firstname,lastname,email,phone,} = useSelector(selectForm);

    const handleDonate = async () => {
        await MailService.sendMail({hub, firstname,lastname,email,phone});
       console.log('handleDonate');
     };

     const navigate = useNavigate()
   
  return (
    <>
      <Helmet>
      <title>Join the Fun with IDF's Vibrant Activity Program</title>
      <meta name="description" content="Discover the perfect activities for you with IDF's friendly activities coordinators. Explore our full program of fun, engaging, and inclusive activities." />
      </Helmet>
    {ActivityHubModalDataEnquire.map(item => ( 

                  <div className={styles.modalBackdrop}>
                      <Box sx={style}>
                      <h4 className={styles.title}>Join the fun</h4>
            <div className={styles.container}>
              <div>
                <div className={styles.imgContainer}>
                  <LazyImgComponent src={item.img} alt="Join the fun" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
              <div className={styles.leftContainer}>
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
              </div>
            </div>
            <div className={styles.mobStyles}>
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
            </div>
               
                  <IconButton
            onClick={()=>navigate("/")}
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
          </div>
                ))}             
      </>
  )
}

export default ContactCoordinator;