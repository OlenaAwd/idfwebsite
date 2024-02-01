import{
  ChangeEvent,
  MouseEvent,
  useEffect,
  useState,
  useRef,
  RefObject,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import ModalSupport from '../../components/ModalSupport';
import ParticipantCard from '../../components/ParticipantCard';
import ButtonComponent from '../../components/ButtonComponent';
import ImpactCard from '../../components/ImpactCard';
import DonateModal from '../../components/DonateModal';
import SelectComponent from '../../components/SelectComponent';
import LazyImgComponent from '../../components/LazyImgComponent';
import SliderParticipants from './SliderParticipants';
import Footer from '../../components/Footer';
import ThanksForDonationModal from '../../components/ThanksForDonationModal';
import useDebounce from '../../hooks/useDebounce';
import {
  productSelect,
  serviceSelect,
  volunteerSelect,
} from '../../constants/pages';
import {
  DonateCardData,
  impactCardData,
  participantCardData,
} from '../../constants/cardsData';
import { chipStyles } from '../../constants/styles/chip';
import styles from './HomePage.module.scss';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import SupportImg from '../../assets/iStockSupport.webp';
import Doodle from '../../assets/Doodle.svg';
import Ellipse from '../../assets/Ellipse.svg';
import socialRight from '../../assets/socialRight.webp';
import socialLeft from '../../assets/socialLeft.webp';
import subscribeImg from '../../assets/SubscribeImg.webp';

import {
  selectForm,
  setHub,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
} from '../../slices/form';
import MailService from '../../services/MailService';
import PriorityImgComponent from '../../components/PriorityImgComponent';


const HomePage = () => {
  const dispatch = useDispatch();
  const { firstname, lastname, email, phone } = useSelector(selectForm);
  const [emailError, setEmailError] = useState('');
  const [emailValue, setEmailValue] = useState(email ? email : '');
  const [firstNameValue, setFirstNameValue] = useState(
    firstname ? firstname : '',
  );
  const [lastNameValue, setLastNameValue] = useState(lastname ? lastname : '');
  const [isEdit, setEdit] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleChangeName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    setFirstNameValue(valueEdited);
    dispatch(setFirstName({ firstname: valueEdited }));
  };

  const handleChangeLastName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    setLastNameValue(valueEdited);
    dispatch(setLastName({ lastname: valueEdited }));
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmailError('');
    setEmailValue(val);
    setEdit(false);

    if (!val) {
      setEmailError('Please, enter your email');
      return;
    }
  };

  const handleSubscribe = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log('btn clicked');
    event.preventDefault();
    await MailService.sendMail({ firstname, lastname, email });
    dispatch(setFirstName({ firstname: '' }));
    dispatch(setLastName({ lastname: '' }));
    dispatch(setEmail({ email: '' }));
  };

  const debouncedEmail = useDebounce(emailValue, 500);

  useEffect(() => {
    if (debouncedEmail) {
      validateEmail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedEmail]);

  const validateEmail = () => {
    setEdit(true);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = regex.test(emailValue);
    if (emailValue.length === 0) {
      setEmailError('Please, enter your email');
      return;
    }

    if (!checkEmail) {
      setEmailError('Invalid email address, please try again');
      return;
    }

    setEmailError('');
    setEmailValue(emailValue);
    dispatch(setEmail({ email: emailValue }));
  };

  const handleDonate = async () => {
    const paypalLink: string | undefined = process.env.REACT_APP_PAYPAL_LINK;
    window.open(paypalLink, '_blank');
  };

  const isDisabled =
    !emailValue || !isEdit || !!emailError || !firstname || !lastname;

  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
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

  const handleSendModalForm = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log('btn clicked form');
    await MailService.sendMail({ firstname, lastname, email, phone });
    dispatch(setFirstName({ firstname: '' }));
    dispatch(setLastName({ lastname: '' }));
    dispatch(setEmail({ email: '' }));
    dispatch(setPhone({ phone: '' }));
    dispatch(setHub({hub: ''}));
  };




  return (
    <>
      <Helmet>
        <title>Intellectual Disability Foundation - Empowering Lives</title>
        <meta
          name="description"
          content="Empowering lives through purposeful opportunities at the Intellectual Disability Foundation. Join us on the journey to create richer, more meaningful lives for individuals with unique strengths and aspirations."
        />
      </Helmet>
      <HeaderHome onSearch={handleSearch} />
      <main ref={contentRef}>
        <section className={styles.searchSection}>
          <div className={styles.ourMissionContainer}>
            <div className={styles.missionTextContainer}>
              <h1 className={styles.aboutUsHeader}>
                Empowering Lives Through Purposeful Opportunities
              </h1>
              <p className={styles.missionDescription}>
                At the Intellectual Disability Foundation, we passionately
                believe in crafting life and work experiences tailored to the
                unique strengths and aspirations of our participants. Our
                mission transcends traditional boundaries, ensuring each
                individual finds purposeful work that resonates with their true
                potential. Proudly, we've empowered thousands to discover and
                embrace the work they cherish. Join us in this journey of
                creating richer, more meaningful lives.
              </p>
              <div className={styles.missionImgContainerResponsive}>
                <img src={SupportImg} alt="Woman watering plants"/>
              </div>
              <div className={styles.btnWrapper}>
                <button
                  onClick={scrollToSection(sectionRef)}
                  className={`${styles.btnRequestDemo}`}
                >
                  Give Support
                </button>

                <ModalSupport btnProp2="Get Support" />
              </div>
            </div>
            <div className={styles.missionImgContainer}>
            <PriorityImgComponent src={SupportImg} alt="Woman watering plants" fetchpriority="high" decoding="async" width='auto' height="auto"/>
            </div>
          </div>
          <div className={styles.waveContainer}>
            <LazyImgComponent src={WaveUp} alt="wave" />
            <LazyImgComponent src={WaveDown} alt="wave" />
          </div>
          <div className={styles.doodleContainer}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
        </section>
        <section className={styles.getSupportSection} id="your-support">
          <h1 className={styles.getSupportHeader}>
            Your Support, Our Priority.
            <br /> Exceptional Participant Services Await.
          </h1>
          <p className={styles.getSupportDescription}>
            Every year, we unveil numerous fresh work opportunities. Through our
            unique <span className={styles.supportSpan}>Love My Work</span>{' '}
            approach, we match participants' distinct skills and personalities
            with the ideal job. Beyond just employment, our lifestyle
            initiatives emphasise participant autonomy and foster lively social
            interactions. Dive in and experience the difference.
          </p>
          <div className={styles.cardsContainer}>
            {participantCardData.map(card => (
              <ParticipantCard
                key={card.id}
                id={card.id}
                src={card.src}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className={styles.cardsContainerSlider}>
            <SliderParticipants cards={participantCardData} />
          </div>
          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section>
        <section className={styles.becomeCustomer} ref={sectionRef}>
          <h1 className={styles.getSupportHeader}>
            Give support. Donate. Become a customer.
          </h1>
          <p className={styles.getSupportText}>
            Join us in our support for people living with disability. Your
            support today sets our participants up for a lifetime of greater
            independence.
          </p>
          <p className={styles.getSupportText}>I want to:</p>
          <div className={styles.chipContainer}>
            {DonateCardData.map(item => (
              <DonateModal
                key={item.id}
                label={item.label === 'Donate to IDF' ? 'Donate' : item.label}
                header={item.label}
                src={item.img}
                title={item.title}
                text={item.text}
                sx={chipStyles}
                children={
                  <>
                    {item.label === 'Donate to IDF' && (
                      <>
                        <div className={styles.donateContainer}>
                          <ThanksForDonationModal
                            btn={
                              <ButtonComponent
                                onClick={handleDonate}
                                color="red"
                                classes={styles.donateNowBtn}
                              >
                                I want to DONATE NOW
                              </ButtonComponent>
                            }
                          />
                          {/* <ButtonComponent
                            onClick={handleDonate}
                            color="white"
                            classes={styles.callTeam}
                          >
                            Call sales team Call our Donations Team
                          </ButtonComponent> */}
                        </div>
                      </>
                    )}
                    {item.label === 'Volunteer' && (
                      <>
                        <SelectComponent
                          arr={volunteerSelect}
                          title="Choose Activity"
                          children={
                            <div className={styles.donateContainer}>
                              <ButtonComponent
                                onClick={handleSendModalForm}
                                color="red"
                                classes={styles.donateNowBtnVolunteer}
                              >
                                I want to VOLUNTEER NOW
                              </ButtonComponent>
                            </div>
                          }
                        />
                      </>
                    )}
                    {item.label === 'Shop Business Services' && (
                      <SelectComponent
                        arr={serviceSelect}
                        title="Choose Service"
                        children={
                          <div className={styles.serviceContainer}>
                            <ButtonComponent
                              onClick={handleSendModalForm}
                              color="red"
                              classes={styles.donateNowBtn}
                            >
                              Enquire Now
                            </ButtonComponent>
                        
                            {/* <ButtonComponent
                              onClick={handleDonate}
                              color="white"
                              classes={styles.donateNowBtnWhite}
                            >
                              Call our Sales Team
                            </ButtonComponent> */}
                          </div>
                        }
                      />
                    )}
                    {item.label === 'Shop our Products' && (
                      <SelectComponent
                        arr={productSelect}
                        title="Choose Product Range"
                        children={
                          <div className={styles.serviceContainer}>
                            <ButtonComponent
                              onClick={handleSendModalForm}
                              color="red"
                              classes={styles.donateNowBtn}
                            >
                              Enquire now
                            </ButtonComponent>
                          
                            {/* <ButtonComponent
                              onClick={handleDonate}
                              color="white"
                              classes={styles.donateNowBtnWhite}
                            >
                              Call our Sales Team
                            </ButtonComponent> */}
                          </div>
                        }
                      />
                    )}
                  </>
                }
              />
            ))}
          </div>
        </section>
        <section className={styles.storiesImpact} id="group">
          <h1 className={styles.getSupportHeaderSecond}>
            Impact Through Supported Employment: Real Stories, Real Change.
          </h1>
          <h3 className={styles.getSupportHeaderAdditional}>
            LOVE MY WORK - <b>Our Proud Emblem</b>
          </h3>
          <p className={` ${styles.getSupportTextAdditional}`}>
            <b>Love my work</b> isn't just a phrase; it's our heartfelt
            declaration to the world. It signifies our passion for what we do
            and our aspiration for everyone to recognise and cherish our
            endeavours. Anchored in a participant-centric ethos, we stand as
            champions for a nurturing and inclusive workplace culture.
          </p>
          <p className={styles.getSubSupportText}>
            <b>Love my work</b> in action
          </p>
          <div className={styles.supportedCardContainer}>
            {impactCardData.map(item => (
              <ImpactCard
                id={item.id}
                key={item.id}
                img={item.img}
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </section>
        <section className={styles.socialStyles}>
          <h1 className={`${styles.socialHeader}`}>
            Our social enterprise success stories.
          </h1>
          <div className={styles.socialImgContainer} id="section1">
            <div className={styles.socialLeftContainer}>
              <div className={styles.socialLeftImgContainer}>
                <img src={socialLeft} alt="Contributing to social enterprise production" width="auto" height="auto"/>
                <h4 className={styles.socialTitle}>
                  Specially Made's Triumph: Celebrating Our Social Enterprise
                  Success Stories
                </h4>
                <div className={styles.linkContainer}>
                  {/* <NavLink to="resources/success-stories/1" className={styles.linkLearnMore}>
                    Learn More
                  </NavLink> */}
                </div>
              </div>
            </div>
            <div className={styles.socialLeftContainer}>
              <div className={styles.socialRightImgContainer}>
                <img src={socialRight} alt="Woman replanting in the garden" width="auto" height="auto"/>
                <h4 className={styles.socialTitle}>
                  Two Decades of Green Dreams: Celebrating Our Garden Centre's
                  Legacy
                </h4>
                <div className={styles.linkContainer}>
                  {/* <NavLink to="resources/success-stories/2" className={styles.linkLearnMore}>
                    Learn More
                  </NavLink> */}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ellipseContainerSocial}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2Social}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section>
        <section className={`${styles.subscribeContainer}`}>
          <div className={styles.subscribeImgContainer}>
            <img src={subscribeImg} alt="Man working in a grocery store" width="auto" height="auto"/>
          </div>
          <form className={styles.form}>
            <p className={styles.formTitle}>Subscribe to IDF News</p>
            <div className={styles.itemContainer}>
              <input
                id="name"
                value={firstNameValue}
                onChange={handleChangeName}
                type="text"
                className={styles.subscribeInput}
                placeholder="First Name"
              />
            </div>
            <div className={styles.itemContainer}>
              <input
                id="lastName"
                value={lastNameValue}
                onChange={handleChangeLastName}
                type="text"
                className={styles.subscribeInput}
                placeholder="Last Name"
              />
            </div>
            <div className={styles.itemContainer}>
              <input
                id="email"
                value={emailValue}
                onChange={handleChangeEmail}
                type="email"
                className={styles.subscribeInput}
                placeholder="Email"
              />
              <span className={styles.helperText}>{emailError}</span>
            </div>
            <ButtonComponent
              type="submit"
              onClick={handleSubscribe}
              classes={styles.btnSubscribe}
              color="red"
              disabled={isDisabled}
            >
              Subscribe
            </ButtonComponent>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
