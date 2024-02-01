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
import { businessHubSelect } from '../../constants/pages';
import { sliderBusinessHubPersonData } from '../../constants/slider';
import {
  BusinessHubModalDataEnquire,
  BusinessHubModalProgramData,
  itemsForYouBusinessCard,
  stepsCardsBusiness,
  waysBusinessCard,
} from '../../constants/cardsData';
import {
  chipStylesEmploymentHub,
  chipStylesEmploymentHubEnquire,
} from '../../constants/styles/chip';
import styles from './BusinessHub.module.scss';
import appearingImgLeft from '../../assets/appearingImgLeft.webp';
import appearingImgRight from '../../assets/appearingImgRight.webp';
import star from '../../assets/Star.svg';
import groupStars from '../../assets/GroupStar.svg';
import itemsImg from '../../assets/itemsImgActivity.webp';
import activityImg from '../../assets/EmploymentHubCont.webp';
import circles from '../../assets/GroupCircles.svg';
import underline from '../../assets/underlineActivities.webp';
import underlineSteps from '../../assets/UnderlineStepsActivity.svg';
import roundArrow from '../../assets/RoundArrow.svg';
import dot from '../../assets/Dot.svg';
import abilitiesImg from '../../assets/iStockExtraAbilities.webp';
import ModalForm from '../../components/ModalForm';


import { selectForm} from '../../slices/form'; 
import MailService from '../../services/MailService';
import SliderBookingCard from '../EmploymentHub/SliderBookingCard';
import LazyImgComponent from '../../components/LazyImgComponent';
import PriorityImgComponent from '../../components/PriorityImgComponent';


const BusinessHub = () => {

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
      <title>Unleashing Neurodiverse Brilliance at the Business Hub</title>
      <meta name="description" content="Experience the future of business at our pioneering incubator. Discover three key benefits, including fully equipped workspace, expert guidance, and a different approach to business success at the Business Hub." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.participantServicesSection}>
          <div className={styles.underlineContainer}>
            <img src={underline} alt="underline" />
          </div>
          <div
            className={`${styles.appearingImgContainerLeft} ${
              showImage ? styles.visible : ''
            }`}
          >
            <div id="imageDiv">
              {showImage &&  <PriorityImgComponent src={appearingImgLeft} alt="Left Stripe" fetchpriority="high"/>}
            </div>
          </div>
          <div
            className={`${styles.appearingImgContainerRight} ${
              showImage ? styles.visible : ''
            }`}
          >
            <div id="imageDiv2">
              {showImage && <PriorityImgComponent src={appearingImgRight} alt="Right Stripe" fetchpriority="high"/>}
            </div>
          </div>
          <div className={styles.participantsWrapper}>
            <div className={styles.participantTextContainer}>
              <h2 className={styles.participantTitle}>
               Unleashing Neurodiverse Brilliance.
              </h2>
              <p className={styles.participantText}>
               Pioneering the Future of Business at Our Incubator. Dive in, Differently
              </p>
              <div className={styles.btnModalContainer}>
                {BusinessHubModalProgramData.map(item => (
                  <HubModal
                    key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    title={item.title}
                    header="Support for business owners"
                    sx={chipStylesEmploymentHub}
                    children={
                      <>
                        {item.label === 'Start a business' && (
                          <>
                            <SelectComponent
                              arr={businessHubSelect}
                              title="Choose Service"
                              children={
                                <div className={styles.serviceContainer}>
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
                          </>
                        )}
                      </>
                    }
                  />
                ))}
                {BusinessHubModalDataEnquire.map(item => (
                  <HubModalEnquire
                    key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    sx={chipStylesEmploymentHubEnquire}
                    title={`${item.title}`}
                    header="Launching a business"
                    children={
                      <>
                        {item.label === 'Enquire Now' &&
                          <>
                          <h2 className={styles.enquireTitle}>Contact me about launching my business</h2>
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
              3 benefits of the Business Hub.
            </h2>

            <div className={styles.waysCards}>
              {waysBusinessCard.map(item => (
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
              Business Hub: Elevate Your Venture.
            </h2>
            <div className={styles.bgBoxTextContainer}>
              <div className={styles.bgBoxDivider}></div>
              <p className={styles.bgBoxText}>
                Step into a fully equipped workspace, backed by expert professionals ready to guide your business journey.
              </p>
            </div>
            <div className={styles.bgBtnContainer}>
              {BusinessHubModalProgramData.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  title={item.title}
                  header="Support for business owners"
                  sx={chipStylesEmploymentHub}
                  children={
                    <>
                      {item.label === 'Start a business' && (
                        <>
                          <SelectComponent
                            arr={businessHubSelect}
                            title="Choose Service"
                            children={
                              <div className={styles.serviceContainer}>
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
                <span className={styles.text}>START UP</span>
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
                <span className={styles.outlineText}>CO-WORKING</span>
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
              <ItemsActivitiesForYouSlider arr={itemsForYouBusinessCard} />
            </div>
            <div className={styles.forYouImgContainer}>
              <LazyImgComponent src={itemsImg} alt="Three women standing together, sharing laughter" />
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
            Get your business up and running
          </h2>
          <div className={styles.cardsBookingCall}>
            <BookCallCard arr={stepsCardsBusiness} />
            </div>
            </div>
          <div className={styles.cardsSlider}>
            <SliderBookingCard />
          </div>
        </section>
        <section className={styles.hubsOpportunitiesSection}>
          <h3 className={styles.hubsTitle}>Opportunities at Business Hub</h3>
          <div className={styles.hubsContainer}>
            <div className={styles.opportunitiesImgContainer}>
              <LazyImgComponent src={abilitiesImg} alt="Woman posing near a wall" />
            </div>
            <div className={styles.opportunitiesTextContainer}>
              <p className={styles.opportunitiesText}>
             Business Hub empowers individuals from neurodiverse backgrounds, offering them the support they need to flourish in the business world. By equipping entrepreneurs with essential resources, unique opportunities, and experienced mentors, we fast-track their business growth. Our neuro-inclusive approach ensures a diverse range of businesses not only survive but thrive.
              </p>
              {BusinessHubModalProgramData.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  title={item.title}
                  header="Support for business owners"
                  sx={chipStylesEmploymentHub}
                  children={
                    <>
                      {item.label === 'Start a business' && (
                        <>
                          <SelectComponent
                            arr={businessHubSelect}
                            title="Choose Service"
                            children={
                              <div className={styles.serviceContainer}>
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
            <EmploymentHubPersonSlider items={sliderBusinessHubPersonData} />
          </div>
          <div className={styles.activityWrapper}>
            <div className={styles.activityImgContainer}>
              <LazyImgComponent src={activityImg} alt="People sitting together and working collaboratively" />
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

export default BusinessHub;
