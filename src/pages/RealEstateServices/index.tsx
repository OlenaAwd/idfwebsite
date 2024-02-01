import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalRequestDemo from '../../components/ModalRequestDemo';
import ModalBuyNow from '../../components/ModalBuyNow';
import SliderSteps from '../../components/SliderSteps';
import Footer from '../../components/Footer';
import HeaderHome from '../../components/HeaderHome';
import SolutionCardsComponent from '../../components/SolutionCardsComponent';
import SolutionCardsAdditional from '../../components/SolutionCardsComponent/SolutionCardsAdditional';
import {
  sliderStepsData,
} from '../../constants/slider';
import styles from './RealEstateServices.module.scss';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import Benefits from '../../assets/Benefits.webp';
import Ellipse from '../../assets/Ellipse.svg';
import EllipseGroup from '../../assets/EllipseGroup.svg';
import mainServices from '../../assets/googleServicesMain.webp';
import oneStepImg from '../../assets/OneStepGServices.webp';
import Steps from '../../assets/Steps.webp';
import AboutMain from '../../assets/AboutMain.webp';
import LazyImgComponent from '../../components/LazyImgComponent';


const RealEstateServices = () => {
  const handleRequest = () => {
    console.log('handleRequest');
  };

  const handleBuy = () => {
    console.log('handleBuy');
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
      <title>IDF Digital Solutions: Powering Real Estate's Future</title>
      <meta name="description" content="Capture the attention of property seekers in the digital landscape. Stand out with our digital solutions, cater to clients seamlessly, and power the future of real estate." />
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
                IDF Digital Solutions: Powering the Future of Real Estate
              </h2>
              <p className={styles.customerDescription}>
               Capture the attention of potential property seekers and buyers in a modern, digital landscape. Make your listings stand out and seamlessly cater to clients with ease.
              </p>
              <div className={styles.btnContainer}>
                <ModalRequestDemo />
                <ModalBuyNow classes={styles.btnModalBuy} />
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={mainServices} alt="Woman chatting on her phone" />
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
              OUR SOLUTIONS
            </h2>
          </div>
          <SolutionCardsComponent />
          <div className={styles.bonusContainer}>

            <h2 className={styles.oneStepTitle}>
              The Bonus Touch
            </h2>
            <h3 className={styles.oneStepDescription}>
              When you work with IDF, you're not just boosting your agency's digital reach; you're also creating an invaluable impact. Each time you adopt our solutions, someone with an intellectual disability finds purpose and pride by playing a part in growing your business. Your success story is intertwined with theirs, making every sale even more meaningful.
            </h3>
            
          </div>
          <div className={styles.whyMatter}>
            <h2 className={styles.growRestTitleAdditional}>
             WHY IDF MATTERS TO REAL ESTATE
            </h2>
            <SolutionCardsAdditional />
          </div>
          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section>
        <section className={styles.oneStepSection}>
          <div className={styles.oneStepTitleContainer}>
            <h2 className={styles.oneStepTitle}>
              How your real estate agency can get one step ahead of the
              competition for as little as $15 a month
            </h2>
            <h3 className={styles.oneStepSubTitle}>
              Google Search is the key starting point for real estate customers
            </h3>
            <p className={styles.oneStepDescription}>
              69% who convert on a real estate site come from local search.
            </p>
          </div>
          <div className={styles.oneStepContentContainer}>
            <ul className={styles.oneStepTextContainer}>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>
                  Reaching buyers first is critical
                </h5>
                <p className={styles.textItemText}>
                  73% of buyers interviewed only one real estate agent during
                  their home search. Google Business Messenger can help you be
                  first.
                </p>
              </li>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>
                  Buying a home begins online
                </h5>
                <p className={styles.textItemText}>
                  41% of the home buyers search for properties online as their
                  first step. Use Business Messenger to connect to customers
                  when they begin their journey.
                </p>
              </li>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>
                  Get discovered through Google
                </h5>
                <p className={styles.textItemText}>
                  99% of home buyers use the internet to find homes in their
                  home buying process. Increase your prospect base through
                  Business Messenger.
                </p>
              </li>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>
                  Building relationships are key
                </h5>
                <p className={styles.textItemText}>
                  The average buyer contacts an agent in week 3 and buys in
                  month 3. Use Business Messenger to create enduring
                  relationships.
                </p>
              </li>
            </ul>
            <div className={styles.oneStepImgContainer}>
              <img src={oneStepImg} alt="Elevate your real estate agency's competitiveness for just £15 a month" />
            </div>
          </div>
          <div className={styles.ellipseContainerAdv}>
            <LazyImgComponent src={EllipseGroup} alt="ellipseGroup" />
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.stepsContainer}>
            <LazyImgComponent src={Steps} alt="steps" />
          </div>
          <div className={styles.stepsCommon}>
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>Quick and Easy to Set Up</h2>
              <p className={styles.stepsText}>
                We can have you up and running in 5 simple steps in as little as
                3 hours.*
              </p>
            </div>
            <div className={styles.stepsSlider}>
              <SliderSteps cards={sliderStepsData} />
              <p className={styles.setUpTimeText}>
                * Set up time ranges from 3 to 48 hours, depending on demand.
              </p>
            </div>
            <p className={styles.setUpTimeTextResponsive}>
              * Set up time ranges from 3 to 48 hours, depending on demand.
            </p>
          </div>
          {/* <div className={styles.ellipseCont}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
          <div className={styles.ellipseCont2}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div> */}
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.aboutWrapper}>
            <div>
              <h4 className={styles.aboutTitle}>
                Pioneering Inclusive Employment in the Digital Age
              </h4>
              <p className={styles.aboutText}>
                At IDF, we're not just a team; we're a movement. With a proud workforce of over 200 talented individuals with intellectual disabilities, we're redefining the employment landscape. Gone are the days when opportunities for those with disabilities were limited to conventional roles. We believe in tapping into the boundless potential of every individual. That's why we've carved out spaces in the exhilarating realms of technology and digital marketing for our exceptional team.<br/>

              </p>
              <p className={styles.aboutText}>
                But our mission doesn’t stop at breaking barriers in employment. Our team is at the forefront, assisting businesses in harnessing cutting-edge technologies essential for growth. By partnering with us, you're not just adopting innovative solutions for your business, you're also joining a revolution that champions inclusivity and progress. Experience the IDF difference today, and be a part of a brighter, more inclusive tomorrow.
              </p>
              
            </div>
            <div className={styles.aboutImgContainer}>
              <LazyImgComponent src={AboutMain} alt="about" />
            </div>
          </div>
          {/* <div className={styles.organisationWrapper}>
            <p className={styles.organisationText}>
              IDF is a trusted partner of Australia’s leading organisations
            </p>
            <div className={styles.logoContainer}>
              <LazyImgComponent src={Logo1} alt="logo1" />
              <LazyImgComponent src={Logo2} alt="logo2" />
              <LazyImgComponent src={Logo3} alt="logo3" />
              <LazyImgComponent src={Logo4} alt="logo4" />
            </div>
          </div> */}
        </section>

        {/* <section className={styles.stepsSection}> */}
          {/* <div className={styles.testimonialsContainer}>
            <LazyImgComponent src={Testimonials} alt="testimonials" />
          </div>
          <div className={styles.stepsCommonLast}>
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>Reviews from our customers</h2>
            </div>

            <SliderReviews items={sliderReviewsRealEstateData} />
          </div>
          <div className={styles.doodleCont}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div> */}
        {/* </section> */}
        <section className={styles.aboutSection}>
          <div className={styles.talkUsContainer}>
            <h3 className={styles.talkUsTitle}>
              Talk to us for free to get started
            </h3>
            <p className={styles.talkUsText}>
              We are open 5 days a week from 8am to 6pm
            </p>
          </div>
          <div className={styles.btnWrapper}>
            {/* <ButtonComponent
              onClick={handleRequest}
              classes={styles.btnRequestDemo}
              color="red"
            >
              02 8566 2800
            </ButtonComponent> */}
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
  );
};

export default RealEstateServices;
