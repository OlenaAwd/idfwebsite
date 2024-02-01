import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
 import ModalSliderComponent from '../../components/ModalSliderComponent';
 import ButtonComponent from '../../components/ButtonComponent';
 import SelectComponent from '../../components/SelectComponent';
 import { volunteerSelect } from '../../constants/pages';
 import { DonateCardData } from '../../constants/cardsData';
import styles from './VolunteerPage.module.scss';
import charitySign2 from '../../assets/logoCharity.webp';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1160px',
  maxHeight: '760px',
  bgcolor: 'background.paper',
  border: '1px solid #cecece',
  boxShadow: 24,
  padding: '24px 40px',
  borderRadius: '20px',
   "@media (max-width: 1190px)": {
    width: 360,
     height: "fit-content",
     minHeight: 564,
    padding: "16px",
    paddingBottom:"25px"
    },
};

const VolunteerPage = () => {
  const navigate=useNavigate();
 


  const sanitizer = DOMPurify.sanitize;

  const handleDonate = async () => {
    // await MailService.sendMail({ firstname,lastname,email });  
  };

  return (
    <>
     <Helmet>
      <title>Volunteer to Empower: Join IDF in Building Brighter Futures for People with Disabilities</title>
      <meta name="description" content="Make a difference! Volunteer for one-time events or ongoing activities with IDF to develop valuable skills for individuals living with disabilities. Your contribution fosters independence and a brighter future." />
      </Helmet>
     {DonateCardData.map(item => (
   <>
   {item.id === 2 && (
 <div className={styles.modalBackdrop}>
        <Box sx={style}>
          <h4 className={styles.title}>{item.label}</h4>   
          <div className={styles.container}>
            <div>
              <div className={styles.imgContainer}>
                <img src={item.img} alt="img" />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.header}>{item.title}</h3>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(item.text),
                  }}
                />
              
                  <div className={styles.charitySignContainer}>
                    <img src={charitySign2} alt="charity-sign" />
                  </div>
               
              </div>
            </div>
            <div className={styles.leftContainer}>
            <>
            <SelectComponent
                          arr={volunteerSelect}
                          title="Choose Activity"
                          children={
                            <div className={styles.donateContainer}>
                              <ButtonComponent
                                onClick={handleDonate}
                                color="red"
                                classes={styles.donateNowBtn}
                              >
                                I want to VOLUNTEER NOW
                              </ButtonComponent>
                            </div>
                          }
                        />
                        
            </>
            </div>
          </div>
            <div className={styles.mobStyles}>
            <ModalSliderComponent firstChildren={
               <div>
              <div className={styles.imgContainer}>
                <img src={item.img} alt="img" />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{item.title}</h3>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(item.text),
                  }}
                />
               
                  <div className={styles.charitySignContainer}>
                    <img src={charitySign2} alt="charity-sign" />
                  </div>
                
               </div>
                </div>
            }
               secondChildren={
               <div className={styles.leftContainer}>
                    <SelectComponent
                          arr={volunteerSelect}
                          title="Choose Activity"
                          children={
                            <div className={styles.donateContainer}>
                              <ButtonComponent
                                onClick={handleDonate}
                                color="red"
                                classes={styles.donateNowBtn}
                              >
                                I want to VOLUNTEER NOW
                              </ButtonComponent>
                            </div>
                          }
                        />
               </div>
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
               "@media (max-width: 1190px)": {
                 right: '5px',
                 top:10
                },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        </div>
   )}
   </>
       
     ))}
    </>
  
  );
};

export default VolunteerPage;
