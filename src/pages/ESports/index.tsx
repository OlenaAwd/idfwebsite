import  { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import NeurodiversityCard from '../../components/NeurodiversityCard';
import AnimatedEsports from '../../components/AnimatedEsports';
import ButtonComponent from '../../components/ButtonComponent';
import Loader from '../../components/Loader';
import LazyImgComponent from '../../components/LazyImgComponent';
import SliderESports from './SliderESports';
import {
  eSportsCardsData,
  esportStartCareerCardsData,
} from '../../constants/cardsData';
import { IEsportCard } from '../../types/cardType';
import CardService from '../../services/CardService';
import styles from './ESports.module.scss';
import appearingImgLeft from '../../assets/appearingImgLeft.webp';
import appearingImgRight from '../../assets/appearingImgRight.webp';
import gamingTeam from '../../assets/esports/gaming team.webp';
import star from '../../assets/Star.svg';


const ESports = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [esportsCardsData, setEsportsCardsData] = useState<Array<IEsportCard>>(
    [],
  );

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
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const sectionRef = useRef<HTMLDivElement>(null);

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
  useEffect(() => {
    setLoading(true);
    async function fetchblog() {
      const mcardData: Array<IEsportCard> = await CardService.getEsportCards();
      setEsportsCardsData(mcardData);
      setLoading(false);
    }
    fetchblog();
  }, []);

  if (loading) <Loader />;
  return (
    <div id="esports">
      <Helmet>
        <title>Gaming Beyond Boundaries - IDF E-Sports Initiative</title>
        <meta
          name="description"
          content="Discover the IDF E-Sports Initiative, where we believe in the limitless potential of every individual, including those with disabilities. Embrace equality in the virtual arena, where players are valued for their skills and teamwork, providing opportunities for global recognition."
        />
      </Helmet>
      <HeaderHome onSearch={handleSearch} />
      <main ref={contentRef}>
        <AnimatedEsports
          img={appearingImgLeft}
          img2={appearingImgRight}
          img3={gamingTeam}
        />
        <section
          ref={targetRef}
          className={`${styles.waysSection} ${styles.fadeInOut} ${
            isVisible ? styles.visible : ''
          }`}
        >
          <div className={styles.waysWrapper}>
            <h2 className={styles.waysTitle}>
              Launching an E-Sports Career Path for All​
            </h2>
            <p className={styles.waysDescription}>
              We envision a world where everyone has the opportunity to pursue
              their passions and build meaningful careers. With this vision in
              mind, we're excited to announce our latest venture into the realm
              of e-sports. ​
            </p>

            <div className={styles.waysCards}>
              {eSportsCardsData.map(item => (
                <div key={item.id}>
                  <NeurodiversityCard
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
            <SliderESports cards={eSportsCardsData} />
          </div>
          <div className={styles.starContainer}>
            <LazyImgComponent src={star} alt="star" />
          </div>
        </section>
        <section className={styles.transformationSection}>
          <h2 className={styles.transformationTitle}>
            Start your E-Sports career​
          </h2>
          <p className={styles.transformationDescription}>
            We invite all gaming enthusiasts, irrespective of their abilities,
            to join us on this exciting journey. Together, we can make the
            e-sports arena a space where everyone is equal, and every player has
            the chance to shine. We have all the resources to get your started.
            Join us on this journey.
          </p>
          <div className={styles.waysCards}>
            {esportStartCareerCardsData.map(item => (
              <div key={item.id}>
                <NeurodiversityCard
                  id={item.id}
                  img={item.img}
                  title={item.title}
                  description={item.description}
                  customBody={styles.careerBodyCard}
                />
              </div>
            ))}
          </div>
          <SliderESports cards={esportStartCareerCardsData} />
        </section>
        {/* <section className={styles.ourBusinessServices} ref={sectionRef}>
          <h2 className={styles.ourBusinessServicesTitle}>
            Trending Games at IDF E-Sports ​
          </h2>
          <p className={styles.ourBusinessServicesText}>
            IDF will be hosting and mentoring participants in the top 10 most
            popular e-sports.​
          </p>
          <CardHover arr={esportsCardsData} />
          <DiversifiedSlider arr={esportsCardsData} />
        </section> */}
        <section className={styles.talkUsSection}>
          <div className={styles.talkUsContainer}>
            <h3 className={styles.talkUsTitle}>
              Talk our E-Sports mentors today to find out more​
            </h3>
            <p className={styles.talkUsText}>
              We are open 5 days a week from 8am to 6pm
            </p>
          </div>
          <div className={styles.btnWrapper}>
            <ButtonComponent
              onClick={handleRequest}
              classes={styles.btnRequestDemo}
              color="red"
            >
              <a type="tel" href="tel:0285662800" className={styles.phoneLink}>
                02 8566 2800
              </a>
            </ButtonComponent>
            <a
              type="submit"
              href="mailto:admin@idfstgeorge.org.au"
              onClick={handleBuy}
              className={styles.buyNow}
            >
              Email Us
            </a>
          </div>
        </section>

        {/* <section className={styles.stepsSection}>
          <div className={styles.underlineStepsContainer}>
            <LazyImgComponent src={underlineSteps} alt="underline" />
          </div>
          <div className={styles.roundArrowContainer}>
            <LazyImgComponent src={roundArrow} alt="arrow" />
          </div>
          <h2 className={styles.stepsTitle}>Tools for you</h2>
          <div className={styles.cardsBookingCall}>
            <BookCallCard arr={toolsCards} />
          </div>
        </section>
        <section className={styles.successStories}>
          <h2 className={styles.storyHeader}>Success Stories</h2>
          <h2 className={styles.storyText}>
            Businesses and organisations who learn to thinking differently about
            ND can reap dividends. IDF’s advocacy team can advise you on the
            many ways ND talent can create value for your business.
          </h2>
          <div className={styles.supportedCardContainer}>
            {advocacySuccessCardData.map(item => (
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
        <section className={styles.sectionWrapper}>
          <div className={styles.hubsOpportunitiesSection}>
            <h3 className={styles.hubsTitle}>
              Our Diversity Hubs offer lifestyle, employment and self employment
              opportunities and resources.
            </h3>
            <div className={styles.cardsWrapper}>
              {advocacyCardsData.map(card => (
                <div className={styles.card} key={card.id}>
                  <LazyImgComponent src={card.img} alt="card" />
                  <p className={styles.cardTitle}>{card.title}</p>
                  <p
                    className={styles.cardText}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(card.text),
                    }}
                  />
                  <NavLink to={`${card.link}`} className={styles.link}>
                    Learn More
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>  */}
      </main>
      <Footer />
    </div>
  );
};

export default ESports;
