import  { useRef } from 'react';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../../components/ButtonComponent';
import useSize from '../../hooks/useSize';
import Footer from '../../components/Footer';
import HeaderHome from '../../components/HeaderHome';
import SolutionCardsAdditional from '../../components/SolutionCardsComponent/SolutionCardsAdditional';
import DiversifiedSlider from '../AboutPage/DiversifiedSlider';
import SliderSteps from '../../components/SliderSteps';
import {speciallyWayListData } from '../../constants/advantages';
import { dataSliderMultipleSpecial, sliderSpecialStepsData } from '../../constants/slider';

import styles from "./SpeciallyMade.module.scss";
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import mainServices from '../../assets/speciallyMade.webp';
import mainServicesResponsive from '../../assets/specialMadeResponsive.webp';
import Benefits from '../../assets/Benefits.webp';
import Ellipse from '../../assets/Ellipse.svg';
import EllipseGroup from '../../assets/EllipseGroup.svg';
import SpeciallyAdvantagesImg from "../../assets/specialAdv.webp";
import Ellipse2 from '../../assets/Ellipse2.svg';
import Steps from '../../assets/Steps.webp';
import LazyImgComponent from '../../components/LazyImgComponent';



const SpeciallyMade = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  
  // const [isHovered, setIsHovered] = useState(false);

  const { width } = useSize();
  const navigate=useNavigate()

  const sanitizer = DOMPurify.sanitize;

  const handleLearn = () => {
    console.log('handleRequest');
    navigate("/resources")
  };

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
  const handleMouseEnter = () => {
    // setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // setIsHovered(false);
  };

  return (
    <>
     <Helmet>
      <title>Specially Made - Your Scented Beauty and Wellness Sanctuary</title>
      <meta name="description" content="Experience the scented world of Specially Made, Australia's beauty and wellness range. Our products go beyond skin deep, offering a ritual of self-love. Discover the difference with creams, balms, fragrances, and more to enhance your outer and inner glow." />
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
              Specially Made, Australia’s scented beauty and wellness range.
              </h2>
              <p className={styles.customerDescription}>
              Create your own scented world with products designed to make you glow on the inside and out.<br/><br/>Our beauty and wellness range go beyond skin deep, they are a ritual of self love.
              </p>
              <div className={styles.btnContainer}>
              <ButtonComponent
                onClick={handleLearn}
                classes={`${styles.btnRequestDemo}`}
                color="red"
              >
              Learn More
              </ButtonComponent>
              <a href='https://specially-made.com.au' target='_blanket' className={`${styles.btnModalBuy}`}>Buy Now</a>
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={width > 860 ? mainServices : mainServicesResponsive} alt="Discover Specially Made, Australia's scented beauty and wellness range for a radiant glow inside and out" />
            </div>
            <div className={styles.btnContainerResponsive}>
                <ButtonComponent
                onClick={handleLearn}
                classes={`${styles.btnRequestDemo}`}
                color="red"
              >
              Learn More
              </ButtonComponent>
              <a href='https://specially-made.com.au' target='_blanket' className={`${styles.btnModalBuy}`}>Buy Now</a>
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
            Specially Made difference
            </h2>
            <p className={styles.growRestText}>Specially Made allows you to create a scented sanctuary in your own home, rejuvenating creams and balms and fragrant rooms.</p>
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
            Specially Made’s fragrant wonders
            </h2>
            <h5 className={styles.investmentSubTitle}>
            Take the spa home, waft in sensual fragrances and nourish yourself with hand made oils, creams and balms.
            </h5>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.advantagesContainer}>
              {speciallyWayListData.map(item => (
                <div key={item.id} className={styles.advantagesItem}>
                  <h6 className={styles.advantagesTitle}>{item.title}</h6>
                  <p className={styles.text}>{item.description}</p>
                </div>
              ))}
             
            </div>
            <div className={styles.imgAdvantagesContainer}>
              <img src={SpeciallyAdvantagesImg} alt="Experience Specially Made's fragrant wonders at home with handcrafted oils, creams, and balms" />
            </div>
          </div>
          
          <div className={styles.ellipseContainerAdv}>
            <LazyImgComponent src={EllipseGroup} alt="ellipseGroup" />
          </div>
        </section>
        {/* <section className={styles.growSection}>
          <div className={styles.growRestContainer}>
            <div className={styles.benefitsContainer}>
            <LazyImgComponent src={Services} alt="services" />
            </div>
            <h2 className={styles.growRestTitle}>
            Design your own wellness routine
            </h2>
            <p className={styles.growRestText}>Choose a complete range of products in your favourite fragrance for your own personal spa ritual. Layer the fragrance with our body cream and oils and fill the room with Combine the fragrances for your own signature scent.</p>
          </div>
          <SolutionHamperImgCard />
           <div className={styles.ellipseCont}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
          <div className={styles.ellipseCont2}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div> 
       </section> */}
       <section className={styles.diversifiedSection}>
          <h2 className={styles.diversifiedTitle}>
          Dive into our world of scented products
          </h2>
          <p className={styles.diversifiedText}>
          Choose from our extensive range of wellness products and in a gorgeous range of flavours.
          </p>
          <div className={styles.diversifiedSliderContainerNew}>
            {dataSliderMultipleSpecial.map((item) => (
                 <div
                  className={`${styles.sliderCardServices} `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={item.id}
                >
                  <div className={styles.wrapperCardFirst}>
                  <img src={item.src} alt={item.span} />
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
          <DiversifiedSlider arr={dataSliderMultipleSpecial}/>
        </section>
         <section className={styles.stepsSection}>
          <div className={styles.stepsContainer}>
            <LazyImgComponent src={Steps} alt="steps" />
          </div>
          <div className={styles.stepsCommon}>
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>How to order Specially Made Products</h2>
              <p className={styles.stepsText}>
              Complete your order online or over the phone in a simple and practical way
              </p>
            </div>
            <div className={styles.stepsSlider}>
              <SliderSteps cards={sliderSpecialStepsData} />
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
            Talk to our Specially Made team to get you started
            </h3>
            <p className={styles.talkUsText}>
            We are open 5 days a week from 8am to 6pm
            </p>
          </div>
          <div className={styles.btnWrapper}>
            <a type="tel" href="tel:0285662800" className={styles.phoneLink}>02 8566 2800</a>
            <a
              type="submit"
              href="mailto:admin@idfstgeorge.org.au"
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

export default SpeciallyMade