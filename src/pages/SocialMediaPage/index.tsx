import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import ModalRequestDemo from '../../components/ModalRequestDemo';
import ModalBuyNow from '../../components/ModalBuyNow';
import SliderSteps from '../../components/SliderSteps';
import Footer from '../../components/Footer';
import SliderReviews from '../../components/SliderReviews';
import HeaderHome from '../../components/HeaderHome';
import ModalLetsTalk from '../../components/ModalLetsTalk';
import ModalGetQuote from '../../components/ModalGetQuote';
import GrowRestaurantCardServices from '../../components/GrowRestaurantCardServicess';
import { growCardData3 } from '../../constants/cardsData';
import {
  sliderReviewsSocialsData,
  sliderSocialStepsData,
} from '../../constants/slider';
import styles from './SocialMediaPage.module.scss';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import Benefits from '../../assets/Benefits.webp';
import Ellipse from '../../assets/Ellipse.svg';
import Ellipse2 from '../../assets/Ellipse2.svg';
import EllipseGroup from '../../assets/EllipseGroup.svg';
import mainServices from '../../assets/mainSocial.webp';
import oneStepImg from '../../assets/SocialsPictures.webp';
import Steps from '../../assets/Steps.webp';
import AboutMain from '../../assets/AboutMain.webp';
import Logo1 from '../../assets/logoContainer/Logo1.webp';
import Logo2 from '../../assets/logoContainer/Logo2.webp';
import Logo3 from '../../assets/logoContainer/Logo3.webp';
import Logo4 from '../../assets/logoContainer/Logo4.webp';
import Testimonials from '../../assets/Testimonials.webp';
import LazyImgComponent from '../../components/LazyImgComponent';


const SocialMediaPage = () => {
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
      <title>Leverage Social Media to Boost Sales in Australia</title>
      <meta name="description" content="Discover how Australian businesses are driving sales with IDF's affordable social media services. Learn three effective ways to enhance your social media presence and increase sales." />
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
                More Australians are turning to social media to search for
                brands
              </h2>
              <p className={styles.customerDescription}>
                Learn how 'switched on' Australian businesses are using social
                media to drive sales by using IDF’s{' '}
                <b>social media services,</b> for as little as $15 a month.*
              </p>
              <p className={styles.feesTextResponsive}>
                *Fees depend on services required.
              </p>
              <div className={styles.btnContainer}>
                <ModalLetsTalk />
                <ModalGetQuote classes={styles.btnModalBuy} />
              </div>
            </div>

            <div className={styles.imgContainer}>
              <img src={mainServices} alt="main" />
            </div>
            <div className={styles.btnContainerResponsive}>
              <ModalRequestDemo classes={styles.btnRequestDemo} />
              <ModalBuyNow classes={styles.btnModalBuy} />
            </div>
            <div className={styles.doodleContainer}>
              <LazyImgComponent src={Doodle} alt="doodle" />
            </div>
          </div>
          <p className={styles.feesText}>*Fees depend on services required.</p>
        </section>
        <section className={styles.growSection}>
          <div className={styles.growRestContainer}>
            <div className={styles.benefitsContainer}>
              <LazyImgComponent src={Benefits} alt="benefits" />
            </div>
            <h2 className={styles.growRestTitle}>
              3 ways you can boost your sales using social media
            </h2>
            <p className={styles.growRestText}>
              Use our <b>social media services</b> to post on your behalf, to
              engage more people on social media and sell more.
            </p>
          </div>
          <div className={styles.cardsContainer}>
            {growCardData3.map(card => (
              <GrowRestaurantCardServices
                key={card.id}
                id={card.id}
                header={card.header}
                title={card.title}
                description={card.description}
              />
            ))}
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
              How your business can get considered by more customers for as
              little as $15 a month
            </h2>
            <h3 className={styles.oneStepSubTitle}>
              Social media engagement in Australia continues to grow
            </h3>
            <p className={styles.oneStepDescription}>
              Australians spend 2 hours and 4 minutes a day on social media. We
              are not only spending more time online, we are spending it on more
              platforms.
            </p>
          </div>
          <div className={styles.oneStepContentContainer}>
            <ul className={styles.oneStepTextContainer}>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>
                  Facebook is the platform of choice
                </h5>
                <p className={styles.textItemText}>
                  Facebook is used by 73.6% of Australians, reaching 2.96
                  billion users globally. Get your brand in front of more
                  customers with regular Facebook posts.
                </p>
              </li>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>More than one channel</h5>
                <p className={styles.textItemText}>
                  Australians are using more than one channel; 1 in 2 Facebook,
                  1 in 2 YouTube, 1 in 3 Instagram and 1 in 4 Snapchat. Cross
                  platform posting keeps brands top of mind.
                </p>
              </li>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>
                  More products are discovered on social
                </h5>
                <p className={styles.textItemText}>
                  34% of people use social media to research products, the
                  majority looking at a brand's organic social posts to learn
                  more. Social presence is key to product consideration.
                </p>
              </li>
              <li className={styles.textItem}>
                <h5 className={styles.textItemTitle}>
                  Social is key to customer service
                </h5>
                <p className={styles.textItemText}>
                  42% of people expect to have a complaint resolved on social
                  media within 60 minutes. Managing user comments and feedback
                  drives success on social channels.
                </p>
              </li>
            </ul>
            <div className={styles.oneStepImgContainer}>
              <LazyImgComponent src={oneStepImg} alt="one step" />
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
              <SliderSteps cards={sliderSocialStepsData} />
              <p className={styles.setUpTimeText}>
                * Set up time ranges from 3 to 48 hours, depending on demand.
              </p>
            </div>
            <p className={styles.setUpTimeTextResponsive}>
              * Set up time ranges from 3 to 48 hours, depending on demand.
            </p>
          </div>
          <div className={styles.ellipseCont}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
          <div className={styles.ellipseCont2}>
            <LazyImgComponent src={Ellipse2} alt="ellipse" />
          </div>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.aboutWrapper}>
            <div>
              <h4 className={styles.aboutTitle}>
                About IDF, Australia’s Social Media Management Service
              </h4>
              <p className={styles.aboutText}>
                <b>IDF Google Technology</b> is a not-for-profit social
                enterprise, a division of the{' '}
                <b>Intellectual Disability Foundation</b>. Our mission is to
                advance neurological diversity in the workplace.
              </p>
              <p className={styles.aboutText}>
                We employ over 200 people and serve over 2,000 businesses.
              </p>
              <p className={styles.aboutText}>
                IDF are chosen technology partners for leading organisations and
                thousands of Australian small businesses.
              </p>
            </div>
            <div className={styles.aboutImgContainer}>
              <LazyImgComponent src={AboutMain} alt="about" />
            </div>
          </div>
          <div className={styles.organisationWrapper}>
            <p className={styles.organisationText}>
              IDF is a trusted partner of Australia’s leading organisations
            </p>
            <div className={styles.logoContainer}>
              <LazyImgComponent src={Logo1} alt="logo1" />
              <LazyImgComponent src={Logo2} alt="logo2" />
              <LazyImgComponent src={Logo3} alt="logo3" />
              <LazyImgComponent src={Logo4} alt="logo4" />
            </div>
          </div>
        </section>
        <section className={styles.stepsSection}>
          <div className={styles.testimonialsContainer}>
            <LazyImgComponent src={Testimonials} alt="testimonials" />
          </div>
          <div className={styles.stepsCommonLast}>
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>Reviews from our customers</h2>
            </div>

            <SliderReviews items={sliderReviewsSocialsData} />
          </div>
          <div className={styles.doodleCont}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
        </section>
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
              className={styles.emailUsBtn}
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

export default SocialMediaPage;
