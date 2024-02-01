import { RefObject, useRef } from 'react';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import SupportEmploymentComponent from '../../components/SupportEmploymentComponent';
import Footer from '../../components/Footer';
import SliderLastSection from '../../components/SliderLastSection';
import CardHover from '../../components/CardHover';
import SliderKeyObjectives from './SliderKeyObj';
import DiversifiedSlider from '../AboutPage/DiversifiedSlider';
import LazyImgComponent from '../../components/LazyImgComponent';
import {
  businessServiceSupportedCards,
  forPurposeCard,
} from '../../constants/cardsData';
import { sliderLastSectionData } from '../../constants/slider';
import { businessCardsData } from '../../constants/businessCards';
import styles from './BusinessServices.module.scss';
import businessHeaderImg from '../../assets/businessServicesHeader.webp';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import Ellipse from '../../assets/Ellipse.svg';

const BusinessServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRefPacking =useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const sanitizer = DOMPurify.sanitize;

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
      <title>Empower Your Business with Digital Services</title>
      <meta name="description" content="Unlock the potential of your business with our cutting-edge digital services. Manage your Google Business Profile, boost your online presence through strategic social postings, and engage customers with intuitive chatbots. Join us in supporting talented individuals with intellectual disabilities in the dynamic world of Digital and Technology." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.shopServicesSection}>
          <div className={styles.ourMissionContainer}>
            <div className={styles.missionTextContainer}>
              <h1 className={styles.shopServiceTitle}>
               Unleash the potential of your business with our cutting-edge digital services. 
              </h1>
              <p className={`${styles.missionDescription}`}>
                Manage your Google Business Profile, boost your online presence through strategic social postings, engage customers with intuitive chatbots across Google, Instagram, Facebook, and now, Apple Business Connect. 
              </p>
              <p className={styles.missionDescriptionLast}>Not only will you propel your business into the digital forefront, but you'll also provide invaluable opportunities for talented individuals with intellectual disabilities to thrive in the dynamic world of Digital and Technology. It's growth with a purpose! Join us and transform your business journey.</p>

              {/* <ButtonComponent
                onClick={handleLearn}
                classes={styles.btnLearn}
                color="red"
              >
                Learn More
              </ButtonComponent> */}
            </div>
            <div className={styles.missionImgContainer}>
              <img src={businessHeaderImg} alt="Team discussing the current task" />
            </div>
            <div className={styles.sectionBtnWrapper}>
              {/* <ButtonComponent
                onClick={handleLearn}
                classes={styles.btnLearnResponsive}
                color="red"
              >
                Learn More
              </ButtonComponent> */}
            </div>
          </div>
          <div className={styles.waveContainer}>
            <img src={WaveUp} alt="wave" />
            <img src={WaveDown} alt="wave" />
          </div>
          <div className={styles.doodleContainer}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
        </section>
        <section className={styles.abilitiesSection}>
          <SupportEmploymentComponent
            onClick={scrollToSection(sectionRef)}
            ourVisionClick={scrollToSection(sectionRefPacking)}
            ourHampersClick={scrollToSection(sectionRef)}
            items={businessServiceSupportedCards}
            children={
              <div className={styles.textContainer}>
                <h2 className={styles.textTitle}>
                Discover Our Business Services. Supported employment.
                </h2>
                <p
                  className={styles.textRangerServ}
                  style={{ marginBottom: '20px' }}
                >
                  IDF have a wide range of services in many sectors including
                  technology, digital marketing and manufacturing.
                </p>
                <p className={styles.textRangerServ}>
                  Our business services are managed by industry leaders
                  providing supported employment to a talented neurodiverse
                  team.
                </p>
              </div>
            }
          />
        </section>
        <section className={styles.keyObjSection}>
          <div className={styles.keyObjContainer}>
            <h2 className={styles.keyTitle}>
              IDF Foundation is a 'for purpose' social enterprise focused on
              creating meaningful and rewarding, supported employment.
            </h2>
            <p className={styles.keyText}>
              IDF business services are delivered by neurodiverse organisations,
              delivering exceptional results. Our business services are social
              enterprises which reinvest business profit into supported
              employment.
            </p>
            <div className={styles.cardsContainer}>
              {forPurposeCard.map(item => (
                <div key={item.id} className={styles.wrapper}>
                  <div className={styles.imgObjContainer}>
                    <LazyImgComponent src={item.img} alt="card" />
                  </div>
                  <p className={styles.objTitle}>{item.title}</p>

                  <p
                    className={styles.objDescription}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(item.description),
                    }}
                  />
                </div>
              ))}
            </div>
            <SliderKeyObjectives cards={forPurposeCard} />
          </div>
       
          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section>
        <section className={styles.ourBusinessServices} ref={sectionRef}>
          <h2 className={styles.ourBusinessServicesTitle}>
          Discover Our Business Services:<br/> Elevating Businesses, Championing Inclusivity
          </h2>
          <p className={styles.ourBusinessServicesText} ref={sectionRefPacking}>
            Dive into our multifaceted offerings spanning Packing, Digital Marketing, Curated Hampers, and Order Fulfilment. Directed by seasoned industry leaders, our services not only deliver unparalleled quality but also uplift and empower our talented neurodiverse team
          </p>      
          <CardHover arr={businessCardsData} />
          <DiversifiedSlider arr={businessCardsData}/>
        </section>
        <section className={styles.sliderLastSection}>
          <h2 className={styles.sliderTitle}>Our Business Services Overview</h2>
          <p className={styles.sliderText}>Elevate your brand with our diverse suite of business services. From precise packing for global brands to enhancing online visibility with Google Business Profile and Apple Business Connect, we've got you covered. Engage audiences 24/7 through innovative chatbots across Google, Facebook, and Instagram and boost your brand's reach with social posting. And when it's time to leave a lasting impression, our corporate gifts and bespoke hampers make the perfect statement. All our services are designed to seamlessly combine efficiency with excellence.</p>
          <div className={styles.sliderLastContainer}>
            <SliderLastSection cards={sliderLastSectionData} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BusinessServices;
