import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderHome from '../../components/HeaderHome';
import HubModal from '../../components/HubModal';
import EmploymentCareerHubCard from '../../components/EmploymentCareerHubCard';
import BookCallCard from '../../components/BookCallCard';
import EmploymentHubPersonSlider from '../../components/EmploymentHubPersonSlider';
import Ticker from '../../components/Ticker';
import Footer from '../../components/Footer';
import ItemsActivitiesForYouSlider from '../../components/ItemsActivitiesForYouSlider';
import HubModalEnquire from '../../components/HubModalEnquire';
import ButtonComponent from '../../components/ButtonComponent';
import SelectComponent from '../../components/SelectComponent';
import ModalForm from '../../components/ModalForm';
import SliderBookingCard from '../EmploymentHub/SliderBookingCard';
import { selectForm, 
} from '../../slices/form'; 
import MailService from '../../services/MailService';
import { activityHubSelect } from '../../constants/pages';
import { sliderActivityHubPersonData } from '../../constants/slider';
import {
  ActivityHubModalDataEnquire,
  ActivityHubModalProgramData,
  itemsForYouActivitiesCard,
  stepsCardsActivity,
  waysActivityCard,
} from '../../constants/cardsData';
import {
  chipStylesActivityHub,
  chipStylesEmploymentHubEnquire,
} from '../../constants/styles/chip';
import styles from './ActivityHub.module.scss';
import appearingImgLeft from '../../assets/appearingImgLeft.webp';
import appearingImgRight from '../../assets/appearingImgRight.webp';
import star from '../../assets/Star.svg';
import groupStars from '../../assets/GroupStar.svg';
import itemsImg from '../../assets/itemsImgActivityHub.webp';
import opportunitiesPerson from '../../assets/opportunitiesPersonActivity.webp';
import activityImg from '../../assets/businessHubCont.webp';
import circles from '../../assets/GroupCircles.svg';
import underline from '../../assets/underlineActivities.webp';
import underlineSteps from '../../assets/UnderlineStepsActivity.svg';
import roundArrow from '../../assets/RoundArrow.svg';
import dot from '../../assets/Dot.svg';
import LazyImgComponent from '../../components/LazyImgComponent';

const ActivityHub = () => {
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
    navigate('/business-hub');
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
      <title>Activity Hub - Social, Fun, and Affordable Entertainment</title>
      <meta name="description" content="Immerse yourself in a vibrant community of entertainment and activities at the Activity Hub. Discover three key benefits, including endless choices, neuro-inclusive activities, and over 100 hosted events." />
      </Helmet>
       <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.participantServicesSection}>
          <div className={styles.underlineContainer}>
            <LazyImgComponent src={underline} alt="underline" />
          </div>
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
                Social, Fun, and Affordable
              </h2>
              <p className={styles.participantText}>
                Dive into a Vibrant Community of Entertainment and Activities
              </p>
              <div className={styles.btnModalContainer}>
                {ActivityHubModalProgramData.map(item => (
                  <HubModal
                    key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    sx={chipStylesActivityHub}
                    title={item.title}
                    header="Learn more about Activity Hub"
                    children={
                      <>
                        {item.label === 'Check our Activities' && (
                          <>
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
                        )}
                      </>
                    }
                  />
                ))}
                {ActivityHubModalDataEnquire.map(item => (
                  <HubModalEnquire
                   key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    sx={chipStylesEmploymentHubEnquire}
                    title={`${item.title}`}
                    header="Join the fun"
                    children={
                      <>
                        {item.label === 'Enquire Now' &&
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
              3 benefits of the Activity Hub.
            </h2>

            <div className={styles.waysCards}>
              {waysActivityCard.map(item => (
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
              Activity Hub has endless choices and a non-stop program of
              activities. All of our activities are neuro-inclusive, everyone is
              welcome.
            </h2>
            <div className={styles.bgBoxTextContainer}>
              <div className={styles.bgBoxDivider}></div>
              <p className={styles.bgBoxText}>
                Over 100 events and activities are hosted at the Activity Hub.
              </p>
            </div>
            <div className={styles.bgBtnContainer}>
              {ActivityHubModalProgramData.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  sx={chipStylesActivityHub}
                  title={item.title}
                  header="Learn more about Activity Hub"
                  children={
                    <>
                      {item.label === 'Check our Activities' && (
                        <>
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
                <span className={styles.text}>SOCIAL ACTIVITIES</span>
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
                <span className={styles.outlineText}> EVERYONE WELCOME</span>
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
              <ItemsActivitiesForYouSlider arr={itemsForYouActivitiesCard} />
            </div>
            <div className={styles.forYouImgContainer}>
              <img src={itemsImg} alt="People playing games" />
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
            Choose the activities that suit your lifestyle
          </h2>
          <div className={styles.cardsBookingCall}>
            <BookCallCard arr={stepsCardsActivity} />
          </div>
          </div>
           <div className={styles.cardsSlider}>
            <SliderBookingCard />
          </div>
        </section>
        <section className={styles.hubsOpportunitiesSection}>
          <h3 className={styles.hubsTitle}>
            Unleash Your Potential at the Activity Hub
          </h3>
          <div className={styles.hubsContainer}>
            <div className={styles.opportunitiesImgContainer}>
              <img src={opportunitiesPerson} alt="Men cooking outdoors" />
            </div>
            <div className={styles.opportunitiesTextContainer}>
              <p className={styles.opportunitiesText}>
               Dive into a world bursting with vibrant experiences and endless possibilities, all curated just for you. <br />{' '}
              </p>
              <p className={styles.opportunitiesText}>
                The Activity Hub is more than just a space; it's an ever-evolving adventure where passions ignite, friendships blossom, and every moment brims with excitement. Whether you're honing a craft, grooving to music, or embarking on a culinary journey, the Activity Hub offers it all. 
              </p>
              <p className={styles.opportunitiesText}>
               Let's make memories, learn new skills, and celebrate the joy of being uniquely you. Join us, and let's craft the extraordinary together
              </p>

                 {ActivityHubModalProgramData.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  sx={chipStylesActivityHub}
                  title={item.title}
                  header="Learn more about Activity Hub"
                  children={
                    <>
                      {item.label === 'Check our Activities' && (
                        <>
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
            <EmploymentHubPersonSlider items={sliderActivityHubPersonData} />
            
          </div>
          <div className={styles.activityWrapper}>
            <div className={styles.activityImgContainer}>
              <img src={activityImg} alt="People sitting together, sharing laughter" />
            </div>
            <div className={styles.activityTextContainer}>
              <span className={styles.social}>business</span>
              <h3 className={styles.socialTitle}>Business hub</h3>
              <p className={styles.socialText}>
                Be Among the First to Experience Australia's Premier Business Hub for Neurodiverse Entrepreneurs
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

export default ActivityHub;
