import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import HubModal from '../../components/HubModal';
import HubModalEnquire from '../../components/HubModalEnquire';
import EmploymentCareerHubCard from '../../components/EmploymentCareerHubCard';
import BookCallCard from '../../components/BookCallCard';
import EmploymentHubPersonSlider from '../../components/EmploymentHubPersonSlider';
import Ticker from '../../components/Ticker';
import ItemsActivitiesForYouSlider from '../../components/ItemsActivitiesForYouSlider';
import Footer from '../../components/Footer';
import SelectComponent from '../../components/SelectComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { gamingHubSelect } from '../../constants/pages';
import { sliderGamingHubPersonData } from '../../constants/slider';
import {
  GamingHubModalProgramData,
  becomeGamer,
  itemsForYouGamingCard,
  stepsCardsGaming,
  waysGamingCard,
} from '../../constants/cardsData';
import { selectForm,} from '../../slices/form'; 
import MailService from '../../services/MailService';
import SliderBookingCard from '../EmploymentHub/SliderBookingCard';
import {
  chipStylesBecomeGamer,
  chipStylesEmploymentHub,
  chipStylesEmploymentHubEnquire,
} from '../../constants/styles/chip';
import styles from './GamingHub.module.scss';
import appearingImgLeft from '../../assets/appearingImgLeft.webp';
import appearingImgRight from '../../assets/appearingImgRight.webp';
import star from '../../assets/Star.svg';
import groupStars from '../../assets/GroupStar.svg';
import itemsImg from '../../assets/ItemsImgGaming.webp';
import activityImg from '../../assets/EmploymentHubCont.webp';
import circles from '../../assets/GroupCircles.svg';
import underlineSteps from '../../assets/UnderlineStepsActivity.svg';
import roundArrow from '../../assets/RoundArrow.svg';
import dot from '../../assets/Dot.svg';
import abilitiesImg from '../../assets/oppotunities.webp';
import LazyImgComponent from '../../components/LazyImgComponent';

const GamingHub = () => {
  const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showImage, setShowImage] = useState(false);
  const [showImageMain, setShowImageMain] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const showImageWithTimeout = () => {
      setShowImage(true);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(showImageWithTimeout, 1000);
          return () => clearTimeout(timeoutId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const targetElement = document.getElementById('imageDiv');
    const targetElement2 = document.getElementById('imageDiv2');
    const targetElement3 = document.getElementById('imageDiv3');
    if (targetElement) {
      observer.observe(targetElement);
    }
    if (targetElement2) {
      observer.observe(targetElement2);
    }
    if (targetElement3) {
      observer.observe(targetElement3);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const showImageWithTimeout = () => {
      setShowImageMain(true);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(showImageWithTimeout, 2000);
          return () => clearTimeout(timeoutId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const targetElement3 = document.getElementById('imageDiv3');

    if (targetElement3) {
      observer.observe(targetElement3);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const targetElement = targetRef.current;
    if (!targetElement) return;

    const elementOffsetTop = targetElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (scrollTop > elementOffsetTop - windowHeight / 2) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleLearn = () => {
    navigate('/employment-hub');
    window.scrollTo(0, 0);
  };
  const handleDonate = async () => {
    await MailService.sendMail({hub, firstname,lastname,email,phone});
    console.log('handleDonate');
  };
  
    const contentRef = useRef<HTMLDivElement>(null);


  const handleSearch = (query: string) => {
    if (contentRef.current) {
      const content = contentRef.current;
      const isFound = window.find(query);

      if (isFound) {
        content.focus();

        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          const range = document.createRange();
          range.selectNodeContents(content);
           selection.removeAllRanges();
        }
      }
    }
  };

  return (
    <>
     <Helmet>
      <title>Gaming and Growth Hub - Pixels and Personal Development</title>
      <meta name="description" content="Experience the intersection of gaming and personal growth at our Gaming and Growth Hub. Discover three compelling reasons to join, including life-changing skills, tournaments, and a community that fosters camaraderie, learning, and personal evolution." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.participantServicesSection}>
         
          <div
            className={`${styles.appearingImgContainerLeft} ${
              showImage ? styles.visible : ''
            }`}
          >
            <div id="imageDiv">
              {showImage && <LazyImgComponent src={appearingImgLeft} alt="Left Stripe" />}
            </div>
          </div>
          <div
            className={`${styles.appearingImgContainerRight} ${
              showImage ? styles.visible : ''
            }`}
          >
            <div id="imageDiv2">
              {showImage && <LazyImgComponent src={appearingImgRight} alt="Right Stripe" />}
            </div>
          </div>
          <div className={styles.participantsWrapper}>
            <div className={styles.participantTextContainer}>
              <h2 className={styles.participantTitle}>
              Gaming and Growth Hub
              </h2>
              <p className={styles.participantText}>
              Step into our Gaming and Growth Hub, where pixels and personal growth intertwine seamlessly.
              </p>
              <div className={styles.btnModalContainer}>
                {GamingHubModalProgramData.map(item => (
                  <HubModal
                    key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    title={item.title}
                    header="Contact the Gaming and Growth Hub"
                    sx={chipStylesEmploymentHub}
                    children={
                      <>
                        {item.label === 'Join Us' && (
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
                        )}
                      </>
                    }
                  />
                ))}
                {GamingHubModalProgramData.map(item => (
                  <HubModalEnquire
                    key={item.id}
                    label="Enquire Now"
                    src={item.img}
                    text={item.text}
                    sx={chipStylesEmploymentHubEnquire}
                    title={`${item.title}`}
                    header="Contact the Gaming and Growth Hub"
                    children={
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
            </div>
            <div
              className={`${styles.participantImgContainer} ${
                showImageMain ? styles.visibleImg : ''
              }`}
            ></div>
          </div>
        </section>
        <section
          ref={targetRef}
          className={`${styles.waysSection} ${styles.fadeInOut} ${
            isVisible ? styles.visible : ''
          }`}
        >
          <div>
            <h2 className={styles.waysTitle}>
            3 reasons to join Gaming and Growth Hub​
            </h2>

            <div className={styles.waysCards}>
              {waysGamingCard.map(item => (
                <div key={item.id}>
                  <EmploymentCareerHubCard
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.starContainer}>
            <LazyImgComponent src={star} alt="star" />
          </div>
          <div className={styles.groupStarContainer}>
            <LazyImgComponent src={groupStars} alt="star" />
          </div>
          <div className={styles.bgBox}>
            <h2 className={styles.bgBoxTitle}>
            Gaming and Growth Hub
            </h2>
            <div className={styles.bgBoxTextContainer}>
              <div className={styles.bgBoxDivider}></div>
              <p className={styles.bgBoxText}>
              While e-sports remains the pulse of our hub, the heartbeats resonate with deeper aspirations: camaraderie, learning, and personal evolution. ​
              </p>
            </div>
            <div className={styles.bgBtnContainer}>
              {GamingHubModalProgramData.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  title={item.title}
                  header="Contact the Gaming and Growth Hub"
                  sx={chipStylesEmploymentHub}
                  children={
                    <>
                      {item.label === 'Join Us' && (
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
                      )}
                    </>
                  }
                />
              ))}
            </div>
          </div>
          <Ticker
            content={
              <div style={{ display: 'inline' }}>
                <span className={styles.text}>PROFESSIONAL TOURNAMENTS</span>
                <span
                  style={{
                    display: 'inline-flex',
                    verticalAlign: '10px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                >
                  <LazyImgComponent
                    src={dot}
                    alt="dot"
                    style={{
                      display: 'flex',
                      width: '10px',
                      alignItems: 'center',
                      height: '10px',
                    }}
                  />
                </span>
                <span className={styles.outlineText}>GAMING COACHING</span>
                <span
                  style={{
                    display: 'inline-flex',
                    verticalAlign: '10px',
                    marginLeft: '10px',
                    marginRight: '10px',
                  }}
                >
                  <LazyImgComponent
                    src={dot}
                    alt="dot"
                    style={{
                      display: 'flex',
                      width: '10px',
                      alignItems: 'center',
                      height: '10px',
                    }}
                  />
                </span>
              </div>
            }
          />
        </section>
        <section className={styles.itemsForYou}>
          <div className={styles.commonWrapper}>
            <div className={styles.forYouTextContainer}>
              <ItemsActivitiesForYouSlider arr={itemsForYouGamingCard} />
            </div>
            <div className={styles.forYouImgContainer}>
              <img src={itemsImg} alt="Two men enjoying a game together." />
            </div>
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.underlineStepsContainer}>
            <LazyImgComponent src={underlineSteps} alt="underline" />
          </div>
          <div className={styles.roundArrowContainer}>
            <LazyImgComponent src={roundArrow} alt="arrow" />
          </div>
          <div className={styles.textStepsContainer}>
          <h2 className={styles.stepsTitle}>
          Get started at the Gaming and Growth Hub​
          </h2>
          <div className={styles.cardsBookingCall}>
            <BookCallCard arr={stepsCardsGaming} />
            </div>
            </div>
          <div className={styles.cardsSlider}>
            <SliderBookingCard />
          </div>
        </section>
        <section className={styles.hubsOpportunitiesSection}>
          <h3 className={styles.hubsTitle}>Opportunities at the Gaming Hub</h3>
          <div className={styles.hubsContainer}>
            <div className={styles.opportunitiesImgContainer}>
              <img src={abilitiesImg} alt="Four people sitting in a gaming hub" />
            </div>
            <div className={styles.opportunitiesTextContainer}>
              <p className={styles.opportunitiesText}>
              At IDF's Gaming and Growth Hub, we believe in the transcendent power of gaming. It's where dreams are birthed, skills are mastered, and lifelong bonds are forged. Join us, and let's co-create a future where every joystick manoeuvre echoes with purpose and promise.​
              </p>
              {becomeGamer.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  title={item.title}
                  header="Contact the Gaming and Growth Hub"
                  sx={chipStylesBecomeGamer}
                  children={
                    <>
                      {item.label === 'Become an IDF Gamer' && (
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
                      )}
                    </>
                  }
                />
              ))}
            </div>
          </div>
        </section>
        <section className={styles.lastSection}>
          <div className={styles.sliderWrapper}>
            <EmploymentHubPersonSlider items={sliderGamingHubPersonData} />
          </div>
          <div className={styles.activityWrapper}>
            <div className={styles.activityImgContainer}>
              <img src={activityImg} alt="Three people sitting and coworking" />
            </div>
            <div className={styles.activityTextContainer}>
              <span className={styles.social}>employment</span>
              <h3 className={styles.socialTitle}>Employment hub</h3>
              <p className={styles.socialText}>
                Join Australia’s leading employer and employment service for
                neurodiverse workers.
              </p>
              <p className={styles.learnMore} onClick={handleLearn}>
                Learn more
              </p>
              <div className={styles.circlesContainer}>
                <LazyImgComponent src={circles} alt="circules" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GamingHub;
