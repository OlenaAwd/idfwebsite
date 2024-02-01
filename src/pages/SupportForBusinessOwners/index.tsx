import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';
import ModalSliderComponent from '../../components/ModalSliderComponent';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { selectForm
   } from '../../slices/form'; 
   import MailService from '../../services/MailService';
import { BusinessHubModalProgramData } from '../../constants/cardsData'
import SelectComponent from '../../components/SelectComponent'
import { businessHubSelect } from '../../constants/pages'
import ButtonComponent from '../../components/ButtonComponent'
import styles from './SupportForBusinessOwners.module.scss';
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
const SupportForBusinessOwners = () => {
    const { hub, firstname,lastname,email,phone,} = useSelector(selectForm);

    const handleDonate = async () => {
        await MailService.sendMail({hub, firstname,lastname,email,phone});
       console.log('handleDonate');
     };

     const navigate = useNavigate()
   
  return (
    <>
     <Helmet>
      <title>Support for Business Owners - Unlock New Opportunities with IDF's Business Hub</title>
      <meta name="description" content="Explore new business opportunities with IDF's Business Hub, offering support from Business Mentors and a fully equipped co-working venue to keep you connected and thriving." />
      </Helmet>
    {BusinessHubModalProgramData.map(item => (
        <div className={styles.modalBackdrop}>
          <Box sx={style}>
            <h4 className={styles.title}>Support for business owners</h4>
            <div className={styles.container}>
              <div>
                <div className={styles.imgContainer}>
                  <LazyImgComponent src={item.img} alt="business owners" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
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
                          Keep me UPDATED
                        </ButtonComponent>
                      </div>
                    }
                  /></div>
            </div>
            <div className={styles.mobStyles}>
              
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
                                      Keep me UPDATED
                                    </ButtonComponent>
                                  </div>
                                }
                              />
                    </div>
                  }
                />
              {/* {label === "Start a business" && pathname==="/business-hub" && BusinessHubModalProgramData.map(item => (
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
              ))} */}
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

export default SupportForBusinessOwners