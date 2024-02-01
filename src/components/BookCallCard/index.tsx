import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCallModal from '../BookCallModal';
import ModalForm from '../ModalForm';
import ButtonComponent from '../ButtonComponent';
import SelectComponent from '../SelectComponent';
import ModalSliderComponent from '../ModalSliderComponent';
import { IStepsCard } from '../../types/cardType';
import MailService from '../../services/MailService';
import { selectForm } from '../../slices/form';
import { activityHubSelect, gamingHubSelect } from '../../constants/pages';
import styles from './BookCallCard.module.scss';
import calendlyBtnIcon from '../../assets/calendlyIconBtn.svg';
import registerImg from "../../assets/registerModalImg.webp";
import activityImg from "../../assets/HubActivity.webp"
import gamingModal from "../../assets/gamingHubModal.webp";


interface IBookCAllProps {
  arr: IStepsCard[];
}
const BookCallCard: FC<IBookCAllProps> = ({ arr }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
    <>
      {arr.map(item => {
        if (item.btnText === 'Register now') {
          return (
            <div className={styles.cardContainer} key={item.id}>
                {pathname === "/employment-hub" && (
              <div className={styles.textContainer}>
                  <span className={styles.outlineText}>{item.header}</span>
                <p className={styles.cardTitle}>{item.title}</p>
                <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {item.btnText === 'Register now' && pathname === "/employment-hub" && (
                          <>
                           <h4 className={`${styles.header}`}>Supported Employment</h4>
                          <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <img src={registerImg} alt="img" />
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
                                      <img src={registerImg} alt="img" />
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
              ) 
              }
              {pathname === "/activity-hub" && (
                    <div className={styles.textContainer}>
                  <span className={styles.outlineText}>{item.header}</span>
                <p className={styles.cardTitle}>{item.title}</p>
                <BookCallModal
                  btn={`${item.btnText}`}
                  href={item.href}
                  children={
                    <>
                      {item.btnText === 'Register now' && pathname === "/activity-hub" && (
                          <>
                           <h4 className={`${styles.headerUpper}`}>Learn more about Activity Hub</h4>
                          <div className={styles.registerContainer}>
                          <div className={styles.leftContainer}>
                              <img src={activityImg} alt="img" />
                            <div className={styles.textContainerModal}>
                             <h3 className={styles.title}>Stay updated on our non stop program of activities</h3>
                               <p className={styles.textModal}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                            </div>
                          </div>
                          <div className={styles.rightContainer}>
                                    <h2 className={styles.enquireTitle}>Contact me to talk about opportunities</h2>
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
                            {item.btnText === 'Register now'  &&
                              <ModalSliderComponent
                                firstChildren={
                                <div>
                                   <h4 className={`${styles.header}`}>Learn more about Activity Hub</h4>
                                    <div className={styles.leftContainer}>
                                      <img src={activityImg} alt="img" />
                                    </div>
                                    <div className={styles.textContainerModal}>
                                     <h3 className={styles.title}>Stay updated on our non stop program of activities</h3>
                               <p className={styles.textModal}>Lifestyle, entertainment, fitness classes and so much more, the Activity Hub is a place to learn new things and meet new people.</p>
                                    </div>
                                  </div>
                                }
                                secondChildren={
                                  <>                
                                    <h2 className={styles.enquireTitle}>Contact me to talk about opportunities</h2>
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
              )}
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
                  <img src={calendlyBtnIcon} alt="icon" />
                </a>
                
              </div>
            </div>
          )
        }
        
        else if (item.btnText === 'Get the calendar' || item.btnText === 'Keep me updated') { 
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
                              <img src={activityImg} alt="img" />
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
                                      <img src={activityImg} alt="img" />
                                    </div>
                                    <div className={styles.textContainerModal}>
                                       <h3 className={styles.title}>Stay updated on our non stop program of activities</h3>
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
        else if (item.btnText === 'Get the program' || item.btnText === 'Get a Coach') { 
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
                      {(item.btnText === 'Get the program' || item.btnText === 'Get a Coach') && (
                          <>
                           <h4 className={`${styles.headerGaming}`}>Contact the Gaming and Growth Hub</h4>
                        <div className={styles.registerContainer}>
                          <div className={styles.leftContainerGaming}>
                              <img src={gamingModal} alt="gaming hub" />
                          </div>
                          <div className={styles.rightContainer}>
                                
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
                         
                          </div>
                          </div>
                            <div className={styles.mobStyles}>
                      
                              <ModalSliderComponent
                                firstChildren={
                                <div>
                                    <h4 className={`${styles.header}`}>Contact the Gaming and Growth Hub</h4>
                                    <div className={styles.leftContainer}>
                                      <img src={gamingModal} alt="img" />
                                    </div>
                                  
                                  </div>
                                }
                                secondChildren={
                                  <>
                                  
                                     <div className={styles.rightContainerGaming}>
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
        } else {
          return (
            <div className={styles.cardContainer} key={item.id}>
              <div className={styles.textContainer}>
                <span className={styles.outlineText}>{item.header}</span>
                <p
                  className={`${styles.cardTitle} ${
                    pathname === '/advocacy' && styles.cardAdvocacyTitle
                  }`}
                >
                  {item.title}
                </p>
                {pathname !== '/advocacy' ? <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnText}
                >
                  {item.btnText}
                  <img src={calendlyBtnIcon} alt="icon" />
                </a> : <p onClick={() => navigate(`${item.href}`)} className={styles.btnText}>
                    {item.btnText}
                    <img src={calendlyBtnIcon} alt="icon" />
                </p>}
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default BookCallCard;
