
import { useLocation,  } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BookCallModal from '../../../components/BookCallModal';
import { stepsCards, stepsCardsActivity, stepsCardsBusiness, stepsCardsGaming } from '../../../constants/cardsData';
import { selectForm } from '../../../slices/form';
import MailService from '../../../services/MailService';
import ModalForm from '../../../components/ModalForm';
import ButtonComponent from '../../../components/ButtonComponent';
import ModalSliderComponent from '../../../components/ModalSliderComponent';
import SelectComponent from '../../../components/SelectComponent';
import { activityHubSelect } from '../../../constants/pages';
import styles from './SliderBookingCard.module.scss';
import activityImg from "../../../assets/HubActivity.webp"
import calendlyBtnIcon from '../../../assets/calendlyIconBtn.svg';
import registerImg from "../../../assets/registerModalImg.webp";
import LazyImgComponent from '../../../components/LazyImgComponent';



const SliderBookingCard = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,

    responsive: [
      {
        breakpoint: 1133,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
   const { pathname } = useLocation();

  const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );

  const handleContactMe = async() => {
     await MailService.sendMail({hub, firstname,lastname,email,phone});
  }
  const handleDonate = async () => {
     await MailService.sendMail({hub, firstname,lastname,email,phone});
  };
  
  return (
        <div className={styles.wrapper}>
    <Slider {...settings} className={styles.sliderContainer}>
      { pathname=== "/employment-hub" && stepsCards.map(item => {
        if (item.btnText === 'Register now') {
          return (
            <div className={styles.cardContainer} key={item.id}>
     
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p className={styles.cardTitle}>{item.title}</p>
                <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {item.btnText === 'Register now' && (
                          <>
                           <h4 className={`${styles.header}`}>Supported Employment</h4>
                          <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <LazyImgComponent src={registerImg} alt="img" />
                            <div className={styles.textContainerModal}>
                              <h3 className={styles.title}>Keep me informed of Supported Employment</h3>
                              <p className={styles.textModal}>Our Support Coordinators can walk you through your employment and training options.</p>
                            </div>
                          </div>
                          <div className={styles.rightContainer}>
                                  <h2 className={styles.enquireTitle}>Contact me to talk about opportunities</h2>
                                       <ModalForm
                                          children={
                                          <div className={styles.serviceContainer}>
                                          <ButtonComponent
                                            onClick={handleContactMe}
                                            color="red"
                                            classes={styles.donateNowBtnEnquire}
                                          >
                                          Contact Me
                                          </ButtonComponent>
                                            </div>
                                          }
                                        />
                          </div>
                          </div>
                           <div className={styles.mobStyles}>
                            {item.btnText === 'Register now' && pathname === "/employment-hub" &&
                              <ModalSliderComponent
                                firstChildren={
                                  <div>
                                    <div className={styles.leftContainer}>
                                      <LazyImgComponent src={registerImg} alt="img" />
                                    </div>
                                    <div className={styles.textContainerModal}>
                                      <h3 className={styles.titleModal}>Keep me informed of Supported Employment</h3>
                                      <p className={styles.text}>Our Support Coordinators can walk you through your employment and training options.</p>
                                    </div>
                                  </div>
                                }
                                secondChildren={
                                  <>
                                    <h2 className={styles.enquireTitle}>Contact me to talk about opportunities</h2>
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
                            }
          
            </div>
                          </>
                       
                      )}
                  </>
                  }
                />
                </div>
            
            </div>
          );
        }
        else if (item.btnText === 'Visit socials') {
          return (
             <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} `}
                >
                  {item.title}
                </p>
      
                 <a
                 href='https://www.facebook.com/IDFofStGeorge'
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <LazyImgComponent src={calendlyBtnIcon} alt="icon" />
                </a>
                
              </div>
            </div>
          )
        }else if  (item.btnText === 'Get the calendar' || item.btnText === 'Keep me updated') { 
          return (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                  <p className={styles.cardTitle}>{item.title}</p>
                    <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {(item.btnText === 'Get the calendar' || item.btnText === 'Keep me updated') && (
                          <>
                           <h4 className={`${styles.header}`}>Learn more about Activity Hub</h4>
                        <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <LazyImgComponent src={activityImg} alt="img" />
                            <div className={styles.textContainerModal}>
                              <h3 className={styles.title}>Stay updated on our non stop program of activities</h3>
                              <p className={styles.textModal}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                            </div>
                          </div>
                          <div className={styles.rightContainer}>
                                
                            <SelectComponent
                              arr={activityHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainer}>
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
                          </>
                       
                      )}
                  </>
                  }
                />
          
                {/* <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {item.btnText === 'Get the calendar' && (
                          <>
                           <h4 className={`${styles.header}`}>test</h4>
                      
                          </>
                       
                      )}
                  </>
                  }
                /> */}
              </div>
            </div>
          );
         }
        else {
          return (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} `}
                >
                  {item.title}
                </p>
              <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <LazyImgComponent src={calendlyBtnIcon} alt="icon" />
                </a>
              </div>
            </div>
          );
        }
      })}
      { pathname=== "/activity-hub" && stepsCardsActivity.map(item => {
        if (item.btnText === 'Register now') {
          return (
            <div className={styles.cardContainer} key={item.id}>
            
                   <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p className={styles.cardTitle}>{item.title}</p>
                <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {item.btnText === 'Register now' && (
                          <>
                           <h4 className={`${styles.header}`}>Learn more about Activity Hub</h4>
                          <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <LazyImgComponent src={activityImg} alt="img" />
                           <div className={styles.textContainerModal}>
                              <h3 className={styles.title}>Stay updated on our non stop program of activities</h3>
                              <p className={styles.textModal}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                            </div>
                          </div>
                          <div className={styles.rightContainer}>
                                
                            <SelectComponent
                              arr={activityHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainer}>
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
                           <div className={styles.mobStyles}>
                            {item.btnText === 'Register now' && pathname === "/activity-hub" &&
                              <ModalSliderComponent
                                firstChildren={
                                  <div>
                                    <div className={styles.leftContainer}>
                                      <LazyImgComponent src={activityImg} alt="img" />
                                    </div>
                                    <div className={styles.textContainerModal}>
                                      <h3 className={styles.titleModal}>Stay updated on our non stop program of activities</h3>
                                      <p className={styles.text}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                                    </div>
                                  </div>
                                }
                                secondChildren={
                                  <>
                                    <h2 className={styles.enquireTitle}>Stay updated on our non stop program of activities</h2>
                                    <ModalForm
                                      children={
                                        <div className={styles.serviceContainer}>
                                          <ButtonComponent
                                            onClick={handleDonate}
                                            color="red"
                                            classes={styles.donateNowBtnEnquire}
                                          >
                                              I want to learn more
                                          </ButtonComponent>
                                        </div>
                                      }
                                    />
                                  </>
                                }
                              />
                            }
          
            </div>
                          </>
                       
                      )}
                  </>
                  }
                />
                </div>
              
            
            </div>
          );
        }
        else if (item.btnText === 'Visit socials') {
          return (
             <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} `}
                >
                  {item.title}
                </p>
      
                 <a
                 href='https://www.facebook.com/IDFofStGeorge'
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <LazyImgComponent src={calendlyBtnIcon} alt="icon" />
                </a>
                
              </div>
            </div>
          )
        }else if  (item.btnText === 'Get the calendar' || item.btnText === 'Keep me updated') { 
          return (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                  <p className={styles.cardTitle}>{item.title}</p>
                    <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {(item.btnText === 'Get the calendar' || item.btnText === 'Keep me updated') && (
                          <>
                           <h4 className={`${styles.headerUpper}`}>Learn more about Activity Hub</h4>
                            <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <LazyImgComponent src={activityImg} alt="img" />
                            <div className={styles.textContainerModal}>
                              <h3 className={styles.title}>Stay updated on our non stop program of activities</h3>
                              <p className={styles.textModal}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                            </div>
                          </div>
                          <div className={styles.rightContainer}>
                                
                            <SelectComponent
                              arr={activityHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainer}>
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
                             <div className={styles.mobStyles}>
                      
                              <ModalSliderComponent
                                firstChildren={
                                <div>
                                    <h4 className={`${styles.header}`}>Learn more about Activity Hub</h4>
                                    <div className={styles.leftContainer}>
                                      <LazyImgComponent src={activityImg} alt="img" />
                                    </div>
                                    <div className={styles.textContainerModal}>
                                       <h3 className={styles.titleModal}>Stay updated on our non stop program of activities</h3>
                               <p className={styles.textModal}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                                    </div>
                                  </div>
                                }
                                secondChildren={
                                  <>
                                    <h2 className={styles.enquireTitle}>Contact me to talk about opportunities</h2>
                                     <div className={styles.rightContainer}>
                                  <SelectComponent
                                    arr={activityHubSelect}
                                    title="Choose Service"
                                    children={
                                      <div className={styles.serviceContainer}>
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
                                  </>
                                }
                              />
                         
                           </div>
                          </>
                       
                      )}
                  </>
                  }
                />
          
              
              </div>
            </div>
          );
         }
        else {
          return (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} `}
                >
                  {item.title}
                </p>
                 <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <LazyImgComponent src={calendlyBtnIcon} alt="icon" />
                </a> 
              </div>
            </div>
          );
        }
      })}
      { pathname=== "/business-hub" && stepsCardsBusiness.map(item => (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} `}
                >
                  {item.title}
                </p>
                 <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <LazyImgComponent src={calendlyBtnIcon} alt="icon" />
                </a> 
              </div>
            </div>
      ))}
        { pathname=== "/gaming-hub" && stepsCardsGaming.map(item => {
        if (item.btnText === 'Register now') {
          return (
            <div className={styles.cardContainer} key={item.id}>
     
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p className={styles.cardTitle}>{item.title}</p>
                <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {item.btnText === 'Register now' && (
                          <>
                           <h4 className={`${styles.header}`}>Supported Employment</h4>
                          <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <LazyImgComponent src={registerImg} alt="img" />
                            <div className={styles.textContainerModal}>
                              <h3 className={styles.title}>Keep me informed of Supported Employment</h3>
                              <p className={styles.textModal}>Our Support Coordinators can walk you through your employment and training options.</p>
                            </div>
                          </div>
                          <div className={styles.rightContainer}>
                                  <h2 className={styles.enquireTitle}>Contact me to talk about opportunities</h2>
                                       <ModalForm
                                          children={
                                          <div className={styles.serviceContainer}>
                                          <ButtonComponent
                                            onClick={handleContactMe}
                                            color="red"
                                            classes={styles.donateNowBtnEnquire}
                                          >
                                          Contact Me
                                          </ButtonComponent>
                                            </div>
                                          }
                                        />
                          </div>
                          </div>
                           <div className={styles.mobStyles}>
                            {/* {item.btnText === 'Register now' && pathname === "/employment-hub" &&
                              <ModalSliderComponent
                                firstChildren={
                                  <div>
                                    <div className={styles.leftContainer}>
                                      <LazyImgComponent src={registerImg} alt="img" />
                                    </div>
                                    <div className={styles.textContainerModal}>
                                      <h3 className={styles.titleModal}>Keep me informed of Supported Employment</h3>
                                      <p className={styles.text}>Our Support Coordinators can walk you through your employment and training options.</p>
                                    </div>
                                  </div>
                                }
                                secondChildren={
                                  <>
                                    <h2 className={styles.enquireTitle}>Contact me to talk about opportunities</h2>
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
                            } */}
          
            </div>
                          </>
                       
                      )}
                  </>
                  }
                />
                </div>
            
            </div>
          );
        }
        else if (item.btnText === 'Visit socials') {
          return (
             <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} `}
                >
                  {item.title}
                </p>
      
                 <a
                 href='https://www.facebook.com/IDFofStGeorge'
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <LazyImgComponent src={calendlyBtnIcon} alt="icon" />
                </a>
                
              </div>
            </div>
          )
        }else if  (item.btnText === 'Get the calendar' || item.btnText === 'Keep me updated') { 
          return (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                  <p className={styles.cardTitle}>{item.title}</p>
                    <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {(item.btnText === 'Get the calendar' || item.btnText === 'Keep me updated') && (
                          <>
                           <h4 className={`${styles.header}`}>Learn more about Activity Hub</h4>
                        <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <LazyImgComponent src={activityImg} alt="img" />
                            <div className={styles.textContainerModal}>
                              <h3 className={styles.title}>Stay updated on our non stop program of activities</h3>
                              <p className={styles.textModal}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                            </div>
                          </div>
                          <div className={styles.rightContainer}>
                                
                            <SelectComponent
                              arr={activityHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainer}>
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
                          </>
                       
                      )}
                  </>
                  }
                />
          
                {/* <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {item.btnText === 'Get the calendar' && (
                          <>
                           <h4 className={`${styles.header}`}>test</h4>
                      
                          </>
                       
                      )}
                  </>
                  }
                /> */}
              </div>
            </div>
          );
         }
        else {
          return (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} `}
                >
                  {item.title}
                </p>
              <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <LazyImgComponent src={calendlyBtnIcon} alt="icon" />
                </a>
              </div>
            </div>
          );
        }
      })}
    </Slider>
    </div>
  );
};

export default SliderBookingCard;
