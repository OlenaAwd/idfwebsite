import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../components/Footer';
import HeaderHome from '../../components/HeaderHome';
import ModalRequestDemo from '../../components/ModalRequestDemo';
import ModalBuyNow from '../../components/ModalBuyNow';
import SolutionHamperImgCard from '../../components/SolutionCardsComponent/SolutionHamperImgCard';
import SliderSteps from '../../components/SliderSteps';
import LazyImgComponent from '../../components/LazyImgComponent';
import {packingListData } from '../../constants/advantages';
import { sliderPackingStepsData } from '../../constants/slider';
import styles from "./PackingPage.module.scss";
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import mainServices from '../../assets/packingMain.webp';
import Benefits from '../../assets/Benefits.webp';
import Testimonials from '../../assets/Testimonials.webp';
import Ellipse from '../../assets/Ellipse.svg';
import EllipseGroup from '../../assets/EllipseGroup.svg';
import SpeciallyAdvantagesImg from "../../assets/packingServices.webp";
import Ellipse2 from '../../assets/Ellipse2.svg';
import packingMissionImg from "../../assets/packingMission.webp";
import packingDoImg from "../../assets/packingDo.webp";
import partnerPackingImg from "../../assets/partnerPacking.webp";



const PackingPage = () => {
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
      <title>IDF Packing Services - Packaging with Purpose</title>
      <meta name="description" content="Welcome to IDF's Packaging Services! We go beyond packing, creating an inclusive environment where every individual, regardless of their abilities, thrives. Partner with us to elevate your business and make a meaningful difference for the community." />
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
              Welcome to the Intellectual Disability Foundation of St George limited Packing Services!
              </h2>
              <p className={styles.customerDescription}>
              <b>Packaging with Purpose</b><br/><br/>At IDF (Intellectual Disability Foundation), we do more than just packing. Our dedicated team works tirelessly to pack products for renowned brands while building an inclusive environment where every individual, regardless of their abilities, is valued, respected, and given opportunities to thrive.
              </p>
              <div className={styles.btnContainer}>
              <ModalRequestDemo />
                <ModalBuyNow classes={styles.btnModalBuy} />
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={mainServices} alt="People in a factory engaged in packing services." />
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
            Proudly Packing for Renowned Brands 
            </h2>
            <p className={styles.growRestText}>By partnering with IDF, not only do you elevate your restaurant or bar's presence, but you also gift someone with an intellectual disability the joy and thrill of contributing to your business's growth. Adopt out solutions and make a meaningful difference both for your business and the community.</p>
          </div>
          <SolutionHamperImgCard />
          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section>
        <section className={styles.packingSection}>
          <div className={styles.packingMissonWrapper}>
            <div className={styles.packingMissonContainer}>
              <h4 className={styles.missionTitle}>Our Mission</h4>
              <div className={styles.missionImgContainer}>
              <img src={packingMissionImg} alt="Empowering those with intellectual disabilities to discover, nurture skills, and actively participate in the work environment"/>                
              </div>
              <h6 className={styles.missionHeader}>Empowering Individuals with Intellectual Disabilities to Thrive in the Workplace</h6>
              <p className={styles.missionText}>To offer a space where people with intellectual disabilities discover their potential, nurture their capabilities, and gain both the skills and confidence to participate actively in the work environment. It's not just about packing products — it’s about packing dreams, ambitions, and pure joy into every box that passes through our hands.</p>
            </div>
            <div className={styles.packingMissonContainer}>
            <h4 className={styles.missionTitle}>What We Do</h4>
            <div className={styles.missionImgContainer}>
                <img src={packingDoImg} alt="People specialize in meticulous, efficient, and quality packing services. Securely pack your products with us, preserving their quality from our doors to yours"/>
            </div>
            <h6 className={styles.missionHeader}>Precision Packing Services: Safeguarding Your Products, Every Step of the Way</h6>
            <p className={styles.missionText}>We specialise in providing meticulous, efficient, and quality packing services, ensuring your products are securely packed, preserving their quality from our doors to yours. Our team is trained in various packing techniques suitable for a wide array of products, from cereals to chocolates and beyond.</p>
            </div>
          </div>
        </section>
        <section className={styles.investmentsSection}>
        <div className={styles.ellipseCont}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
          <div className={styles.ellipseCont2}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div> 
          <div className={styles.headerContainer}>
            <h2 className={styles.investmentTitle}>
            More than a Packing Service
            </h2>
             <p className={styles.investmentText}>
             Fostering Employee Engagement and Driving Social Impact: Our approach goes beyond traditional packing services by creating work our people love.
            </p>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.advantagesContainer}>
              {packingListData.map(item => (
                <div key={item.id} className={styles.advantagesItem}>
                  <h6 className={styles.advantagesTitle}>{item.title}</h6>
                  <p className={styles.text}>{item.description}</p>
                </div>
              ))}
             
            </div>
            <div className={styles.imgAdvantagesContainer}>
              <img src={SpeciallyAdvantagesImg} alt="Our approach transcends traditional packing services, focusing on creating work that our people love" />
            </div>
          </div>
          
          <div className={styles.ellipseContainerAdv}>
            <LazyImgComponent src={EllipseGroup} alt="ellipseGroup" />
          </div>
        </section>
         <section className={styles.stepsSection}>
          <div className={styles.stepsContainer}>
            <LazyImgComponent src={Testimonials} alt="steps" />
          </div>
          <div className={styles.stepsCommon}>
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>Hear From Our Valuable Partners</h2>
            </div>
            <div className={styles.stepsSlider}>
              <SliderSteps cards={sliderPackingStepsData} />
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
          <div className={styles.partnerContainer}>
            <div className={styles.textContainer}>
            <h3 className={styles.talkUsTitle}>
          Partner with us
            </h3>
            <p className={styles.textPartner}>When you choose IDF for your packing needs, you are not only guaranteeing a top-notch service for your products but are also contributing towards creating supportive, rewarding, and purposeful employment opportunities for our extraordinary team.<br/><br/> Let’s weave a tale of empowerment, inclusiveness, and top-quality service together.</p>

            <p className={styles.textPartnerLast}>Get in Touch to begin this chapter with us.</p>
            </div>
            <div className={styles.partnerImgCont}>
              <LazyImgComponent src={partnerPackingImg} alt="Smiling woman providing packing service" />
            </div>
         
          </div>
          <div className={styles.talkUsContainer}>
          <div className={styles.doodleContainer2}>
              <LazyImgComponent src={Doodle} alt="doodle" />
            </div>
            <h3 className={styles.talkUsTitle}>
            Connect With Us
            </h3>
            <p className={styles.talkUsText}>
            We invite you to join us on this fulfilling journey. Partner with us and make a direct impact on the lives of our vibrant community members. Contact Us today to explore collaboration possibilities.
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

export default PackingPage