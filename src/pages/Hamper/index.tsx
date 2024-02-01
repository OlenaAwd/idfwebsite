import React, { useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer';
import HeaderHome from '../../components/HeaderHome';
import ModalRequestDemo from '../../components/ModalRequestDemo';
import ModalBuyNow from '../../components/ModalBuyNow';
import SolutionHamperImgCard from '../../components/SolutionCardsComponent/SolutionHamperImgCard';
import DiversifiedSlider from '../AboutPage/DiversifiedSlider';
import SliderSteps from '../../components/SliderSteps';
import SolutionCardsAdditional from '../../components/SolutionCardsComponent/SolutionCardsAdditional';
import { dataSliderMultipleHamper, sliderHamperStepsData } from '../../constants/slider';
import { hamperListData } from '../../constants/advantages';

import styles from "./Hamper.module.scss";
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import mainServices from '../../assets/hamperMain.webp';
import Benefits from '../../assets/Benefits.webp';
import Services from '../../assets/Services.webp';
import Ellipse from '../../assets/Ellipse.svg';
import EllipseGroup from '../../assets/EllipseGroup.svg';
import HamperAdvantagesImg from "../../assets/HamperAdvantages.webp";
import Ellipse2 from '../../assets/Ellipse2.svg';
import Steps from '../../assets/Steps.webp';
import LazyImgComponent from '../../components/LazyImgComponent';



const Hamper = () => {
  const handleRequest = () => {
    console.log('handleRequest');
  };

  const handleBuy = () => {
    console.log('handleBuy');
  };
  const contentRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = useState(false);

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
          // selection.addRange(range);
           selection.removeAllRanges();
        }
      }
    }
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const sanitizer = DOMPurify.sanitize;

  return (
    <>
     <Helmet>
      <title>Heartfelt Hampers - Luxury, Love, and Thoughtfulness in Every Gift</title>
      <meta name="description" content="Choose Heartfelt Hampers for the perfect gift that shows appreciation and makes a lasting impression. Our curated hampers are full of Australia's favorite products, and by choosing us, you change lives while indulging in scents, skin pampering, and tasty treats. Versatile for every occasion, our hampers give twice by bringing joy to recipients and empowering individuals with intellectual disabilities." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.customersMainSection}>
          <div className={styles.waveContainer}>
            <LazyImgComponent src={WaveUp} alt="wave" />
            <LazyImgComponent src={WaveDown} alt="wave" />
          </div>

          <div className={styles.customersContainer}>
            <div className={styles.customerTextContainer}>
              <h2 className={styles.customerHeader}>
              Heartfelt Hampers, made with luxury and love
              </h2>
              <p className={styles.customerDescription}>
              The perfect way to show appreciation and make a lasting impression.<br/><br/>Full of Australia’s favourites products, our curated hampers are an expression of gratitude and thoughtfulness.
              </p>
              <div className={styles.btnContainer}>
                <ModalRequestDemo />
                <ModalBuyNow classes={styles.btnModalBuy} />
              </div>
            </div>
            <div className={styles.imgContainer}>
              <LazyImgComponent src={mainServices} alt="main" />
            </div>
            <div className={styles.btnContainerResponsive}>
              <ModalRequestDemo classes={styles.btnRequestDemo} />
              <ModalBuyNow classes={styles.btnModalBuy} />
            </div>
            <div className={styles.doodleContainer}>
              <LazyImgComponent src={Doodle} alt="doodle" />
            </div>
          </div>
        </section>
       <section className={styles.growSection}>
          <div className={styles.growRestContainer}>
            <div className={styles.benefitsContainer}>
              <LazyImgComponent src={Benefits} alt="benefits" />
            </div>
            <h2 className={styles.growRestTitle}>
            Why choose Hamper Co
            </h2>
            <p className={styles.growRestText}>By choosing Hamper Co, you are not only gifting products people love, you are changing the lives of those who make them.</p>
          </div>
          <SolutionCardsAdditional />
          
          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section>
        <section className={styles.investmentsSection}>
          <div className={styles.headerContainer}>
            <h2 className={styles.investmentTitle}>
            Heartfelt Hampers for every heart’s desire
            </h2>
            <h5 className={styles.investmentSubTitle}>
            From modest budgets to sheer luxury, our hampers are curated to match every pocket and preference.
            </h5>
            <p className={styles.investmentText}>
            Each hamper, regardless of its size or price, carries the same promise: quality, care, and a touch of magic.
            </p>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.advantagesContainer}>
              {hamperListData.map(item => (
                <div key={item.id} className={styles.advantagesItem}>
                  <h6 className={styles.advantagesTitle}>{item.title}</h6>
                  <p className={styles.text}>{item.description}</p>
                </div>
              ))}
             
            </div>
            <div className={styles.imgAdvantagesContainer}>
              <LazyImgComponent src={HamperAdvantagesImg} alt="advantages" />
            </div>
          </div>
          
          <div className={styles.ellipseContainerAdv}>
            <LazyImgComponent src={EllipseGroup} alt="ellipseGroup" />
          </div>
        </section>
        <section className={styles.growSection}>
          <div className={styles.growRestContainer}>
            <div className={styles.benefitsContainer}>
            <LazyImgComponent src={Services} alt="services" />
            </div>
            <h2 className={styles.growRestTitle}>
            Packed with Australia’s favourite goodies
            </h2>
            <p className={styles.growRestText}>Choose from our range of confectionary, wellness, or gourmet hampers, or choose a combination of them all.</p>
          </div>
          <SolutionHamperImgCard />
           <div className={styles.ellipseCont}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
          <div className={styles.ellipseCont2}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div> 
       </section>
       <section className={styles.diversifiedSection}>
          <h2 className={styles.diversifiedTitle}>
          Be spoilt for choice by Heartfelt Hampers
          </h2>
          <p className={styles.diversifiedText}>
          Select from one of our curated combination hampers or curate one of your own from our extensive range of hamper goodies.
          </p>
          <div className={styles.diversifiedSliderContainerNew}>
            {dataSliderMultipleHamper.map((item) => (
                 <div
                  className={`${styles.sliderCardServices} `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                >
                  <div className={styles.wrapperCardFirst}>
                  <LazyImgComponent src={item.src} alt={item.span} />
                   { item.span && <div className={styles.imgTextContainerFirst}>
                    <p dangerouslySetInnerHTML={{
                      __html: sanitizer(item.span),
                    }} />
                  </div>}
                  </div>
               
                  {/* <div
                    className={`${
                      isHovered === false
                        ? styles.cardTextHoverHide
                        : styles.cardTextHoverShowFirst
                    }`}
                  >
                    <span> {item.hoverText}</span>
                  </div> */}
                  </div>
              ))}
           
          </div>
          <DiversifiedSlider arr={dataSliderMultipleHamper}/>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsContainer}>
            <LazyImgComponent src={Steps} alt="steps" />
          </div>
          <div className={styles.stepsCommon}>
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>How to order your Heartfelt Hamper</h2>
              <p className={styles.stepsText}>
              Complete your order online or over the phone in a simple and practical way
              </p>
            </div>
            <div className={styles.stepsSlider}>
              <SliderSteps cards={sliderHamperStepsData} />
            </div>
           
          </div>
          <div className={styles.ellipseCont}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
          <div className={styles.ellipseCont2}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
         
        </section>
     
         
        <section className={styles.aboutSection}>
          <div className={styles.talkUsContainer}>
            <h3 className={styles.talkUsTitle}>
            Talk to our Hamper Co team to get you started
            </h3>
            <p className={styles.talkUsText}>
            We are open 5 days a week from 8am to 6pm
            </p>
          </div>
          <div className={styles.btnWrapper}>
            <a onClick={handleRequest} type="tel" href="tel:0285662800" className={styles.phoneLink}>02 8566 2800</a>
            <a
              type="submit"
              href="mailto:admin@idfstgeorge.org.au"
              onClick={handleBuy}
              className={`${styles.emailUsBtn}`}
            >
              Email Us
            </a>
          </div>
        </section>   
      </main>
      <Footer />
    </>
  )
}

export default Hamper