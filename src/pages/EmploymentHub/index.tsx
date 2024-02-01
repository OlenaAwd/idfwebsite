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
import Footer from '../../components/Footer';
import ButtonComponent from '../../components/ButtonComponent';
import SelectComponent from '../../components/SelectComponent';
import ModalForm from '../../components/ModalForm';
import { employmentHubSelectCheck } from '../../constants/pages';
import ItemsActivitiesForYouSlider from '../../components/ItemsActivitiesForYouSlider';
import SliderBookingCard from './SliderBookingCard';
import { sliderHubPersonData } from '../../constants/slider';
import {
  EmploymentHubModalData,
  EmploymentHubModalDataEnquire,
  itemsForYouCard,
  stepsCards,
  waysCareerCard,
} from '../../constants/cardsData';
import { selectForm,} from '../../slices/form'; 
import MailService from '../../services/MailService';
import {
  chipStylesEmploymentHub,
  chipStylesEmploymentHubEnquire,
} from '../../constants/styles/chip';
import styles from './EmploymentHub.module.scss';
import appearingImgLeft from '../../assets/appearingImgLeft.webp';
import appearingImgRight from '../../assets/appearingImgRight.webp';
import star from '../../assets/Star.svg';
import groupStars from '../../assets/GroupStar.svg';
import itemsImg from '../../assets/itemsImg.webp';
import opportunitiesPerson from '../../assets/opportunitiesPerson.webp';
import activityImg from '../../assets/activityHubCont.webp';
import circles from '../../assets/GroupCircles.svg';
import underline from '../../assets/underlineHeader.webp';
import underlineSteps from '../../assets/UnderlineSteps.svg';
import roundArrow from '../../assets/RoundArrow.svg';
import dot from '../../assets/Dot.svg';
import LazyImgComponent from '../../components/LazyImgComponent';

const EmploymentHub = () => {
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
    navigate('/activity-hub');
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
      <title>Discover Your New Career at Australia's Leading Employment Service</title>
      <meta name="description" content="Unlock exciting career opportunities with Australia's top employment service for neurodiverse workers. Explore how the Employment Hub can elevate your career aspirations and lead you to passionate work with a unique twist." />
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
              {showImage && <img src={appearingImgLeft} alt="Left Stripe" />}
            </div>
          </div>
          <div
            className={`${styles.appearingImgContainerRight} ${
              showImage ? styles.visible : ''
            }`}
          >
            <div id="imageDiv2">
              {showImage && <img src={appearingImgRight} alt="Right Stripe" />}
            </div>
          </div>
          <div className={styles.participantsWrapper}>
            <div className={styles.participantTextContainer}>
              <h2 className={styles.participantTitle}>
                Your new career is waiting for you<span>.</span>
              </h2>
              <p className={styles.participantText}>
                Join Australia’s leading employer and employment service for
                neurodiverse workers.
              </p>
              <div className={styles.btnModalContainer}>
                {EmploymentHubModalData.map(item => (
                  <HubModal
                    key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    sx={chipStylesEmploymentHub}
                    title={item.title}
                    header="Latest jobs"
                    children={
                      <>
                        {item.label === 'Check job board' && (
                          <>
                            <SelectComponent
                              arr={employmentHubSelectCheck}
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
                          </>
                        )}
                      </>
                    }
                  />
                ))}
                {EmploymentHubModalDataEnquire.map(item => (                  
                  <HubModalEnquire
                    key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    sx={chipStylesEmploymentHubEnquire}
                    title={`${item.title}`}
                    header="Employment Advice"
                    children={
                      <>
                        {item.label === 'Enquire Now' &&
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
             Three Ways the Employment Hub Can Elevate Your Career Aspirations
            </h2>

            <div className={styles.waysCards}>
              {waysCareerCard.map(item => (
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
              Discover Passionate Work with a Twist at Employment Hub!
            </h2>
            <div className={styles.bgBoxTextContainer}>
              <div className={styles.bgBoxDivider}></div>
              <p className={styles.bgBoxText}>
               Unlock opportunities tailored for the brilliance of neurodiversity
              </p>
            </div>
            <div className={styles.bgBtnContainer}>
              {EmploymentHubModalData.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  sx={chipStylesEmploymentHub}
                  title={item.title}
                  header="Latest jobs"
                  children={
                    <>
                      {item.label === 'Check job board' && (
                        <>
                          <SelectComponent
                            arr={employmentHubSelectCheck}
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
          <Ticker
            content={
              <div style={{ display: 'inline' }}>
                <span className={styles.text}>LIMITLESS POSSIBILITIES</span>
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
                <span className={styles.outlineText}>
                  {' '}
                  CAREER OPPORTUNITIES{' '}
                </span>
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
              <ItemsActivitiesForYouSlider arr={itemsForYouCard} />
            </div>
            <div className={styles.forYouImgContainer}>
              <img src={itemsImg} alt="Smiling woman" />
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
            Get started on your new career in 5 easy steps.
          </h2>
          <div className={styles.cardsBookingCall}>
            <BookCallCard arr={stepsCards} />
            </div>
          </div>
          <div className={styles.cardsSlider}>
            <SliderBookingCard />
          </div>
         
        </section>
        <section className={styles.hubsOpportunitiesSection}>
          <h3 className={styles.hubsTitle}>Employment Hub:<br/> Where Talent Meets Opportunity</h3>
          <div className={styles.hubsContainer}>
            <div className={styles.opportunitiesImgContainer}>
              <img src={opportunitiesPerson} alt="Woman posing for a photograph" />
            </div>
            <div className={styles.opportunitiesTextContainer}>
              <p className={styles.opportunitiesText}>
                At Employment Hub, we're not just providing jobs; we're crafting futures. Pioneering the forefront of employment for the neurodiverse community, we understand the magic that unfolds when individuals are empowered to work in ways that resonate with their unique strengths.<br />{' '}
                <br />
               Work Differently, Achieve More. Here, unconventional is our convention. We embrace different, knowing it leads to extraordinary outcomes.
                <br /> <br />
               <b>Love My Work</b> Initiative. Discover our participant-focused approach that tailors careers to individual capabilities, ensuring every day at work feels both rewarding and meaningful. Dive into a world where your abilities aren’t just recognised, they’re celebrated.
              </p>

              {EmploymentHubModalData.map(item => (
                <HubModal
                  key={item.id}
                  label={item.label}
                  src={item.img}
                  text={item.text}
                  sx={chipStylesEmploymentHub}
                  title={item.title}
                  header="Latest jobs"
                  children={
                    <>
                      {item.label === 'Check job board' && (
                        <>
                          <SelectComponent
                            arr={employmentHubSelectCheck}
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
            <EmploymentHubPersonSlider items={sliderHubPersonData} />
          </div>
          <div className={styles.activityWrapper}>
            <div className={styles.activityImgContainer}>
              <LazyImgComponent src={activityImg} alt="Friends embracing while enjoying a sunset" />
            </div>
            <div className={styles.activityTextContainer}>
              <span className={styles.social}>social</span>
              <h3 className={styles.socialTitle}>Activity hub</h3>
              <p className={styles.socialText}>
                Free and affordable social activities in a welcoming friendly
                community.
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

export default EmploymentHub;
