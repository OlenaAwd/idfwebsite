import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import ModalSliderComponent from '../../components/ModalSliderComponent';
import ButtonComponent from '../../components/ButtonComponent'
import { selectForm} from '../../slices/form'; 
import MailService from '../../services/MailService';
import {EmploymentHubModalDataEnquire } from '../../constants/cardsData'
import ModalForm from '../../components/ModalForm';
import styles from './EmploymentAdvice.module.scss';
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
const EmploymentAdvice = () => {
    const { hub, firstname,lastname,email,phone,} = useSelector(selectForm);

    const handleDonate = async () => {
        await MailService.sendMail({hub, firstname,lastname,email,phone});
     };

  const navigate = useNavigate()
   
  return (
    <>
     <Helmet>
      <title>Employment Advice at IDF - Discover Your New Career</title>
      <meta name="description" content="Partner with our employment advisors to explore new career opportunities. We're here to help you understand your employment options and guide you towards a brighter future." />
      </Helmet>
    {EmploymentHubModalDataEnquire.map(item => ( 

                  <div className={styles.modalBackdrop}>
                      <Box sx={style}>
                      <h4 className={styles.title}>Employment Advice</h4>
            <div className={styles.container}>
              <div>
                <div className={styles.imgContainer}>
                  <LazyImgComponent src={item.img} alt="Employment Advice" />
                </div>
                <div className={styles.textContainer}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
              <div className={styles.leftContainer}>
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

export default EmploymentAdvice