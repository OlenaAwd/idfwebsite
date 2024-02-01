import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './DonatePage.module.scss';
import charitySign2 from '../../assets/logoCharity.webp';

import ModalSliderComponent from '../../components/ModalSliderComponent';
import { DonateCardData } from '../../constants/cardsData';
import ThanksForDonationModal from '../../components/ThanksForDonationModal';
import ButtonComponent from '../../components/ButtonComponent';
import { Helmet } from 'react-helmet-async';

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

const DonatePage = () => {
  const navigate=useNavigate();
  const [activeButton, setActiveButton] = useState<string>('');
  const [activeButtonPeriod, setActiveButtonPeriod] = useState<string>('');
  const [donateValue, setDonateValue] = useState('');

  const handleChangeDonate = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/\D+/g, '');
    setDonateValue(valueEdited);
  };

  const handleToggle = (buttonName: string) => {
    setActiveButton(activeButton === buttonName ? '' : buttonName);
  };
  const handleTogglePeriod = (buttonName: string) => {
    setActiveButtonPeriod(activeButton === buttonName ? '' : buttonName);
  };


  const sanitizer = DOMPurify.sanitize;

  const handleDonate = async () => {
    // await MailService.sendMail({ firstname,lastname,email });
  
  };


  return (
    <>
     <Helmet>
      <title>Donate to IDF: Empower Lives through Supported Employment Opportunities</title>
      <meta name="description" content="Your donations transform lives! Contribute now to IDF's social enterprise and create supported employment opportunities for individuals living with disabilities. Your donation is tax deductible." />
      </Helmet>
     {DonateCardData.map(item => (
   <>
   {item.id === 1 && (
 <div className={styles.modalBackdrop}>
        <Box sx={style}>
          <h4 className={styles.title}>Donate to IDF</h4>   
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
                        {/* <div className={styles.donateBtnContainer}>
                          <button
                            onClick={() => handleTogglePeriod('once')}
                            className={`${
                              activeButtonPeriod === 'once'
                                ? styles.clickedPeriod
                                : styles.redBtn
                            } `}
                          >
                            Once Off Donation
                          </button>
                          <button
                            onClick={() => handleTogglePeriod('monthly')}
                            className={`${
                              activeButtonPeriod === 'monthly'
                                ? styles.clickedPeriod
                                : styles.whiteBtn
                            } `}
                          >
                            Donate Monthly
                          </button>
                        </div>
                        <div className={styles.donateBtnContainer}>
                          <button
                            onClick={() => handleToggle('100')}
                            className={`${
                              activeButton === '100'
                                ? styles.clicked
                                : styles.btnSumm
                            } `}
                          >
                            $100
                          </button>
                          <button
                            onClick={() => handleToggle('200')}
                            className={`${
                              activeButton === '200'
                                ? styles.clicked
                                : styles.btnSumm2
                            } `}
                          >
                            $200
                          </button>
                          <button
                            onClick={() => handleToggle('300')}
                            className={`${
                              activeButton === '300'
                                ? styles.clicked
                                : styles.btnSumm
                            } `}
                          >
                            $300
                          </button>
                        </div>
                        <div className={styles.donateBtnContainer}>
                          <input
                            placeholder="Other"
                            className={styles.otherInput}
                            value={donateValue}
                            onChange={handleChangeDonate}
                            type="tel"
                          />
                        </div> */}
                        <div className={styles.donateContainer}>
                        <ThanksForDonationModal btn={
                        
                          <ButtonComponent
                            onClick={handleDonate}
                            color="red"
                            classes={styles.donateNowBtn}
                          >
                            I want to DONATE NOW
                          </ButtonComponent>
                        } />
                          {/* <ButtonComponent
                            onClick={handleDonate}
                            color="white"
                            classes={styles.callTeam}
                          >
                            Call sales team Call our Donations Team
                          </ButtonComponent> */}
                        </div>
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
                   <div className={styles.donateBtnContainer}>
                          <button
                            onClick={() => handleTogglePeriod('once')}
                            className={`${
                              activeButtonPeriod === 'once'
                                ? styles.clickedPeriod
                                : styles.redBtn
                            } `}
                          >
                            Once Off Donation
                          </button>
                          <button
                            onClick={() => handleTogglePeriod('monthly')}
                            className={`${
                              activeButtonPeriod === 'monthly'
                                ? styles.clickedPeriod
                                : styles.whiteBtn
                            } `}
                          >
                            Donate Monthly
                          </button>
                    </div>
                    <div className={styles.donateBtnContainer}>
                          <button
                            onClick={() => handleToggle('100')}
                            className={`${
                              activeButton === '100'
                                ? styles.clicked
                                : styles.btnSumm
                            } `}
                          >
                            $100
                          </button>
                          <button
                            onClick={() => handleToggle('200')}
                            className={`${
                              activeButton === '200'
                                ? styles.clicked
                                : styles.btnSumm2
                            } `}
                          >
                            $200
                          </button>
                          <button
                            onClick={() => handleToggle('300')}
                            className={`${
                              activeButton === '300'
                                ? styles.clicked
                                : styles.btnSumm
                            } `}
                          >
                            $300
                          </button>
                        </div>
                    <div className={styles.donateBtnContainer}>
                          <input
                            placeholder="Other"
                            className={styles.otherInput}
                            value={donateValue}
                            onChange={handleChangeDonate}
                            type="tel"
                          />
                    </div>
                        <div className={styles.donateContainer}>
                        <ThanksForDonationModal btn={
                        
                          <ButtonComponent
                            onClick={handleDonate}
                            color="red"
                            classes={styles.donateNowBtn}
                          >
                            I want to DONATE NOW
                          </ButtonComponent>
                        } />
                          {/* <ButtonComponent
                            onClick={handleDonate}
                            color="white"
                            classes={styles.callTeam}
                          >
                            Call sales team Call our Donations Team
                          </ButtonComponent> */}
                        </div>
                     
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

export default DonatePage;
