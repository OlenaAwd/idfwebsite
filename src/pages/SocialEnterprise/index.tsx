import React, {
  ChangeEvent,
  useState,
  MouseEvent,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import DiversifiedSlider from '../AboutPage/DiversifiedSlider';
import HeaderHome from '../../components/HeaderHome';
import ButtonComponent from '../../components/ButtonComponent';
import Footer from '../../components/Footer';
import {dataSliderMultipleSocialEnterprice } from '../../constants/slider';
import {selectForm, setFirstName, setLastName, setEmail
} from '../../slices/form'; 
import MailService from '../../services/MailService';
import styles from './SocialEnterprise.module.scss';
import socialEnterpriseMain from '../../assets/socialEnterpriseMain.webp';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import advocacyImg from '../../assets/advocacyContainerImg.webp';
import subscribeImg from '../../assets/SubscribeImg.webp';
import LazyImgComponent from '../../components/LazyImgComponent';


const SocialEnterprise = () => {
  const dispatch = useDispatch();
  const {    firstname,lastname,email } = useSelector(
    selectForm
  );
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(''); 
  const [isEdit, setEdit] = useState(true); 

  const handleAdvocacy = () => {
    navigate('/advocacy');
    window.scrollTo(0, 0);
  };
  const handleChangeName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
     dispatch(setFirstName({ firstname: valueEdited } ));
  };

  const handleChangeLastName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    dispatch(setLastName({ lastname: valueEdited } ));
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmailError(''); 
    dispatch(setEmail({ email: val } ));
    setEdit(false);

    if (!val) {
      setEmailError('Please, enter your email');
      return;
    }
     
  };

  const handleSubscribe = async(event: MouseEvent<HTMLButtonElement>) => {
    console.log('btn clicked');
    event.preventDefault();
      await MailService.sendMail({  firstname,lastname,email});
    dispatch(setFirstName({ firstname: '' }));
    dispatch(setLastName({ lastname: '' }));
    dispatch(setEmail({ email: '' } ));
  };

  const sectionRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const sanitizer = DOMPurify.sanitize;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isDisabled =
    !email || !isEdit || !!emailError || !firstname || !lastname;
  
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
      <title>IDF's Social Enterprises - Elevating Purpose and Passion</title>
      <meta name="description" content="Experience innovation, social impact, and empowerment through IDF's Social Enterprises. Join us on a journey through our diverse and dynamic ventures that champion inclusion and bespoke solutions." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.shopServicesSection}>
          <div className={styles.aboutUsContainer}>
            <h1 className={styles.aboutUsHeader}>IDF's Social Enterprises</h1>
            <p className={styles.aboutUsDescription}>
              Elevating Purpose and Passion
            </p>
          </div>
          <div className={styles.ourMissionContainer}>
            <div className={styles.missionTextContainer}>
              <p className={styles.missionDescription}>
                At IDF, our heart and vision transcend the conventional. Through our Social Enterprises, we marry innovation with social impact, crafting bespoke solutions while championing inclusion and empowerment. Let's take you on a journey through our diverse and dynamic Social Enterprise ventures.
              </p>

              {/* <ButtonComponent
                onClick={handleLearn}
                classes={styles.btnLearn}
                color="red"
              >
                Learn More
              </ButtonComponent> */}
            </div>
            <div className={styles.missionImgContainer}>
              <img src={socialEnterpriseMain} alt="Woman florist replanting plants" />
            </div>
            {/* <div className={styles.sectionBtnWrapper}>
              <ButtonComponent
                onClick={handleLearn}
                classes={styles.btnLearnResponsive}
                color="red"
              >
                Learn More
              </ButtonComponent>
            </div> */}
          </div>
          <div className={styles.waveContainer}>
            <LazyImgComponent src={WaveUp} alt="wave" />
            <LazyImgComponent src={WaveDown} alt="wave" />
          </div>
          <div className={styles.doodleContainer}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
        </section>
        {/* <section className={styles.abilitiesSection}>
          <SocialSupportEmploymentComponent
            onClick={scrollToSection(sectionRef)}
            children={
              <div className={styles.textContainer}>
                <h2 className={styles.textTitle}>
                  Give support. Shop our social enterprise.
                </h2>
                <p className={styles.text}>
                  IDF manage a diversified range of social enterprise to provide
                  supported employment for people living with disability.
                </p>
              </div>
            }
          />
        </section> */}
        <section className={styles.diversifiedSection} ref={sectionRef}>
          <h2 className={styles.diversifiedTitle}>
            Our diversified social enterprise
          </h2>
          <p className={styles.diversifiedText}>
            IDF invests in and manages consumer brands which are created and
            manufactured by supported employees. Our diverse range of roles and
            sectors allows us to offer employment opportunities which best match
            natural aptitude and interests.
          </p>
          <div className={styles.diversifiedSliderContainerNew}>
            {dataSliderMultipleSocialEnterprice.map((item) => (
                 <div
                  className={`${styles.sliderCardServices} `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                >
                  <div className={styles.wrapperCard}>
                  <img src={item.src} alt={item.span} />
                   { item.span && <div className={styles.imgTextContainer}>
                    <p dangerouslySetInnerHTML={{
                      __html: sanitizer(item.span),
                    }} />
                  </div>}
                  </div>
               
                  <div
                    className={`${
                      isHovered === false
                        ? styles.cardTextHoverHide
                        : styles.cardTextHoverShow
                    }`}
                  >
                    <span> {item.hoverText}</span>
                  </div>
                  </div>
              ))}
           
          </div>
           <DiversifiedSlider arr={dataSliderMultipleSocialEnterprice}/>
          {/* <div className={styles.diversifiedSliderContainer}>
            <MultipleRowsSlider
              children={dataSliderMultipleSocialEnterprice.slice(0, 6).map((item) => (
                 <div
                  className={`${styles.sliderCardServices} `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                >
                  <div className={styles.wrapperCard}>
                  <LazyImgComponent src={item.src} alt={item.span} />
                   { item.span && <div className={styles.imgTextContainer}>
                    <p dangerouslySetInnerHTML={{
                      __html: sanitizer(item.span),
                    }} />
                  </div>}
                  </div>
               
                  <div
                    className={`${
                      isHovered === false
                        ? styles.cardTextHoverHide
                        : styles.cardTextHoverShow
                    }`}
                  >
                    <span> {item.hoverText}</span>
                  </div>
                  </div>
              ))}
            />
          </div> */}
          <div className={styles.lastThoughts}>
            <span>Final Thoughts</span>
              <p >
           At IDF's Social Enterprises, every initiative, every product, every service is infused with heart and purpose. We aren't just about offering solutions; we're about creating experiences, championing inclusivity, and making a difference - one product, one service, one interaction at a time. Join us in this transformative journey of passion and purpose.
          </p>
           </div>
        
        </section>
        {/* <section className={styles.shopEnterpriseSection}>
          <h2 className={styles.shopEnterpriseTitle}>
            Shop our Social Enterprise
          </h2>
          <SocialEnterpriseCards />
          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section> */}
        <section className={styles.advocacySection}>
          <div className={styles.ourMissionContainer}>
            <div className={styles.advocacyTextContainer}>
              <h1 className={styles.advocacyHeader}>
                Advocacy. Inspire, educate, transform.
              </h1>
              <p className={styles.advocacyDescription}>
                We work with organisations, small business and government to
                advocate for increased neurodiversity in the workplace.
              </p>
              <p className={styles.advocacyDescription}>
                Our organisational development and social work experience
                demonstrates diversity not only shows positive cultural impacts,
                it also pays dividends in productivity.
              </p>
              <p className={styles.advocacyDescription}>
                IDF Foundation consultants advocate for and support
                organisations, to make the shift to a more neuroinclusive
                organisation.
              </p>

              <ButtonComponent
                onClick={handleAdvocacy}
                classes={styles.btnAdvocacy}
                color="red"
              >
                Find Out More
              </ButtonComponent>
            </div>
            <div className={styles.advocacyImgContainer}>
              <img src={advocacyImg} alt="People participating in a meeting" />
            </div>
            <div className={styles.sectionBtnWrapper}>
              <ButtonComponent
                onClick={handleAdvocacy}
                classes={styles.btnAdvocacyResponsive}
                color="red"
              >
                Find Out More
              </ButtonComponent>
            </div>
          </div>
        </section>
        <section className={styles.subscribeSection}>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeImgContainer}>
              <img src={subscribeImg} alt="Man working on a cash register" />
            </div>
            <form className={styles.form}>
              <p className={styles.formTitle}>Subscribe to IDF News</p>
              <div className={styles.itemContainer}>
                <input
                  id="name"
                  value={firstname}
                  onChange={handleChangeName}
                  type="text"
                  className={styles.subscribeInput}
                  placeholder="First Name"
                />
              </div>
              <div className={styles.itemContainer}>
                <input
                  id="lastName"
                  value={lastname}
                  onChange={handleChangeLastName}
                  type="text"
                  className={styles.subscribeInput}
                  placeholder="Last Name"
                />
              </div>
              <div className={styles.itemContainer}>
                <input
                  id="email"
                  value={email}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SocialEnterprise;
