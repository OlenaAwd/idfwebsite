import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import BookCallCard from '../../components/BookCallCard';
import ImpactCard from '../../components/ImpactCard';
import AnimatedAdvocacy from '../../components/AnimatedAdvocacy';
import NeurodiversityCard from '../../components/NeurodiversityCard';
import SliderHubSection from './SliderHubSection';
import SliderHubSectionLast from './SliderHubSectionLast';
import {
  advocacyCardsData,
  advocacySuccessCardData,
  neurodiversityCardsData,
  neurodiversityTransformationCardsData,
  toolsCards,
} from '../../constants/cardsData';
import styles from './Advocacy.module.scss';
import appearingImgLeft from '../../assets/appearingImgLeft.webp';
import appearingImgRight from '../../assets/appearingImgRight.webp';
import advocacyWoman from '../../assets/advocacyWoman.webp';
import star from '../../assets/Star.svg';
import groupStars from '../../assets/GroupStar.svg';
import underlineSteps from '../../assets/UnderlineStepsActivity.svg';
import roundArrow from '../../assets/RoundArrow.svg';
import LazyImgComponent from '../../components/LazyImgComponent';

const AdvocacyPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);


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
      <title>Supported Employment and Neurodiversity Transformation</title>
      <meta name="description" content="Discover the power of neurodiversity in organizations. Supported employment and knowledge sharing to transform neurotypical organizations. Unlock the value and resilience of neurodiversity for increased engagement and complex problem-solving." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <AnimatedAdvocacy
          img={appearingImgLeft}
          img2={appearingImgRight}
          img3={advocacyWoman}
        />
        <section
          ref={targetRef}
          className={`${styles.waysSection} ${styles.fadeInOut} ${
            isVisible ? styles.visible : ''
          }`}
        >
          <div className={styles.waysWrapper}>
            <h2 className={styles.waysTitle}>
              Neurodiverse organisations are higher performers than neurotypical
              peers
            </h2>
            <p className={styles.waysDescription}>
              Organisations who embrace neurodiversity, grow in capability by
              accessing a larger talent pool and a greater range of skills.
              Neurodiverse, ND organisations, see neurodiverse talents as assets
              and are rewarded for doing so.
            </p>
            <div className={styles.waysCards}>
              {neurodiversityCardsData.map(item => (
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
            <SliderHubSection cards={neurodiversityCardsData} />
          </div>
          <div className={styles.starContainer}>
            <LazyImgComponent src={star} alt="star" />
          </div>
          <div className={styles.groupStarContainer}>
            <LazyImgComponent src={groupStars} alt="star" />
          </div>
        </section>
        <section className={styles.transformationSection}>
          <h2 className={styles.transformationTitle}>
            Make the transformation to a neurodiverse organisation.
          </h2>
          <p className={styles.transformationDescription}>
            IDF Foundation works with organisations to make the transition to
            greater neurodiversity. We can help you understand the roles and
            responsibilities which are enriched by a more neurodiverse
            workforce. We can coach you through transformation using the
            approaches we have applied for decades.
          </p>
          <div className={styles.waysCards}>
            {neurodiversityTransformationCardsData.map(item => (
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
          <SliderHubSection cards={neurodiversityTransformationCardsData} />
        </section>
        <section className={styles.stepsSection}>
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
          Businesses and organisations who learn to thinking differently about neurodiversity can reap dividends. IDF’s advocacy team can advise you on the many ways ND talent can create value for your business.
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
                      __html: sanitizer(card.description),
                    }}
                  />
                  <NavLink to={`${card.link}`} className={styles.link}>
                    Learn More
                  </NavLink>
                </div>
              ))}
            </div>
             <div className={styles.opportunitiesCardsWrapperSlider}>
             <SliderHubSectionLast cards={advocacyCardsData} />
          </div>
          </div>
          
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AdvocacyPage;
