import React, { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
// import ButtonComponent from '../../components/ButtonComponent';
import GrowRestaurantCard from '../../components/GrowRestaurantCard';
// import SliderReviews from '../../components/SliderReviews';
import ModalRequestDemo from '../../components/ModalRequestDemo';
import ModalBuyNow from '../../components/ModalBuyNow';
import RestaurantHome from '../../components/RestaurantHome';
import SliderSteps from '../../components/SliderSteps';
import Footer from '../../components/Footer';
import SolutionCardsAdditional from '../../components/SolutionCardsComponent/SolutionCardsAdditional';
import { growCardData, growWaysData } from '../../constants/cardsData';
import { advantagesListData } from '../../constants/advantages';
import { sliderRestaurantStepsData } from '../../constants/slider';
import styles from './MainPage.module.scss';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import Glass from '../../assets/Glass.svg';
import Ellipse from '../../assets/Ellipse.svg';
import Ellipse2 from '../../assets/Ellipse2.svg';
import EllipseGroup from '../../assets/EllipseGroup.svg';
import Pizza from '../../assets/Pizza.svg';
import AdvantagesImg from '../../assets/AdvantagesPictures.webp';
import Burger from '../../assets/Burger.svg';
import Plate from '../../assets/Plate.svg';
import AboutMain from '../../assets/AboutMain.webp';
import Video from '../../assets/video/IDF_Compressed.mp4';
import LazyImgComponent from '../../components/LazyImgComponent';




const MainPage = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    videoRef.current?.play();
  }, []);

   const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset video to the beginning
      videoRef.current.play(); // Start playing the video again
    }
  };

  const handleRequest = () => {
    console.log('handleRequest');
  };

  const handleBuy = () => {
    console.log('handleBuy');
  };


  return (
    <>
     <Helmet>
      <title>Attract Diners to Your Food & Beverage Establishment</title>
      <meta name="description" content="Direct diners to your establishment with mouth-watering meals and sip-worthy concoctions. Make your offerings searchable and boost customer visits." />
      </Helmet>
      <RestaurantHome />
      <main style={{ background: '#fff' }}>
        <section className={styles.customersMainSection}>
              <div className={styles.customerTextContainer}>
            <h1 className={styles.customerHeader}>
              Attract diners searching for their favorite meal or beverage directly to your food or bar establishment.
            </h1>
            <p className={styles.customerDescription}>
              Ensure your mouth-watering meals or sip-worthy concoctions aren't missed by potential patrons — make them searchable and boost your customer visits
            </p>
            <div className={styles.btnContainer}>
              <ModalRequestDemo />
              <ModalBuyNow />
            </div>
          </div>
          <div className={styles.phoneContainer}>
            <video ref={videoRef} autoPlay src={Video} muted  onEnded={handleVideoEnd}></video>
          </div>
        
          <div className={styles.doodleContainer}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
          <div className={styles.waveContainer}>
            <LazyImgComponent src={WaveUp} alt="wave" />
            <LazyImgComponent src={WaveDown} alt="wave" />
          </div>
          <div className={styles.glassContainer}>
            <LazyImgComponent src={Glass} alt="glass" />
          </div>
        </section>
        <section className={styles.growSection}>
          <div className={styles.growRestContainer}>
            <p className={styles.growOutline}>BENEFITS</p>
            <h2 className={styles.growRestTitle}>
              OUR SOLUTIONS
            </h2>
          </div>
          <p className={styles.ourSolutionsText}>By partnering with IDF, not only do you elevate your restaurant or bar's presence, but you also gift someone with an intellectual disability the joy and thrill of contributing to your business's growth. Adopt our solutions and make a meaningful difference both for your business and the community.</p>
          <div className={styles.cardsContainer}>
            {growCardData.map(card => (
              <GrowRestaurantCard
                key={card.id}
                id={card.id}
                header={card.header}
                title={card.title}
                description={card.description}
              />
            ))}
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
          <div className={styles.pizzaContainer}>
            <LazyImgComponent src={Pizza} alt="pizza" />
          </div>
          <div className={styles.headerContainer}>
            <h2 className={styles.investmentTitle}>
              Equip your business with these cutting-edge solutions and set the stage for unparalleled growth
            </h2>
            <h5 className={styles.investmentSubTitle}>
              When people are hungry, they turn to Google and Apple Maps
            </h5>
            <p className={styles.investmentText}>
            Near me and buy now searches are growing at 136% in 2023
            </p>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.advantagesContainer}>
              {advantagesListData.map(item => (
                <div key={item.id} className={styles.advantagesItem}>
                  <h6 className={styles.advantagesTitle}>{item.title}</h6>
                  <p className={styles.text}>{item.description}</p>
                </div>
              ))}
              <p className={styles.text}>
                * A once off set up fee of $200 applies
              </p>
            </div>
            <div className={styles.imgAdvantagesContainer}>
              <img src={AdvantagesImg} alt="Empower your business with cutting-edge solutions for unparalleled growth" />
            </div>
          </div>
          
          <div className={styles.ellipseContainerAdv}>
            <LazyImgComponent src={EllipseGroup} alt="ellipseGroup" />
          </div>
        </section>

  
        <section className={styles.stepsSection}>
              <h2 className={styles.growRestaurantTitle}>
             3 Ways IDF will help your restaurant or bar grow
            </h2>
          <div className={styles.cardsContainer}>
            {growWaysData.map(card => (
              <GrowRestaurantCard
                classes={styles.customCard}
                key={card.id}
                id={card.id}
                header={card.header}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <p className={styles.growOutline}>STEPS</p>
          <div className={styles.stepsCommon}>
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>Quick and Easy to Set Up</h2>
              <p className={styles.stepsText}>
               Complete your order online or over the phone in a simple and practical way
              </p>
            </div>
            <div className={styles.stepsSlider}>
              <SliderSteps cards={sliderRestaurantStepsData} />
              <p className={styles.setUpTimeText}>
                * Set up time ranges from 3 to 48 hours, depending on demand.
              </p>
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
          <div className={styles.aboutWrapper}>
            <div className={styles.aboutTextContainer}>
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
              <img src={AboutMain} alt="Pioneering inclusive employment in the digital age" />
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
        {/* <section className={styles.aboutSection}>
          <div className={styles.aboutWrapper}>
            <div>
              <h4 className={styles.aboutTitle}>
                About IDF, Australia’s Restaurant Google Partner
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

          <div className={styles.forkContainer}>
            <LazyImgComponent src={ForkAndKnife} alt="fork" />
          </div>
          <div className={styles.appleContainer}>
            <LazyImgComponent src={Apple} alt="apple" />
          </div>
        </section> */}
        {/* <section
          className={`${styles.stepsSection} ${styles.stepsSectionTestimonials}`}
        >
          <p
            className={`${styles.growOutline} ${styles.growOutlineTestimonials}`}
          >
            TESTIMONIALS
          </p>
          <div
            className={`${styles.stepsCommon} ${styles.stepsCommonTestimonials}`}
          >
            <div className={styles.stepsTextWrapper}>
              <h2 className={styles.stepsTitle}>Reviews from our customers</h2>
            </div>
            <div className={styles.reviewsSlider}>
              <SliderReviews items={sliderReviewsData} />
            </div>
          </div>
        </section> */}
        <section className={styles.talkUsSection}>
          <div className={styles.talkUsContainer}>
            <h3 className={styles.talkUsTitle}>
              Talk to us for free to get started
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
              className={styles.buyNow}
            >
              Email Us
            </a>
          </div>

          <div className={styles.burgerContainer}>
            <LazyImgComponent src={Burger} alt="burger" />
          </div>
          <div className={styles.plateContainer}>
            <LazyImgComponent src={Plate} alt="plate" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
