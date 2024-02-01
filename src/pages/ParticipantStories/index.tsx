import { useRef, useState } from 'react';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import AnimatedHubSection from '../../components/AnimatedHubSection';
import SupportEmploymentComponent from '../../components/SupportEmploymentComponent';
import MultipleRowsSliderServices from '../../components/MultipleRowsSliderServices';
import AnimatedHubCards from '../../components/AnimatedHubCards';
import Footer from '../../components/Footer';
import Chips from './Chips';
import {
  careerCardsData,
  participantServiceSupportedCards,
} from '../../constants/cardsData';
import { participantServicesSliderMultiple } from '../../constants/slider';
import styles from './ParticipantStories.module.scss';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import getSupportMain from '../../assets/getSupportMain.webp';
import mainSupportImg from '../../assets/mainSupport.webp';
import appearingImgLeft from '../../assets/appearingImgLeft.webp';
import appearingImgRight from '../../assets/appearingImgRight.webp';
import PriorityImgComponent from '../../components/PriorityImgComponent';


const ParticipantStories = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = useState(false);
    const sanitizer = DOMPurify.sanitize;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      <title>Participant Services - Your Path to Growth</title>
      <meta name="description" content="Explore our journey of career and lifestyle growth. Discover resources, guidance, and tools at the Employment Hub, Business Hub, and Activity Hub to support your path to success." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.shopServicesSection}>
          <div className={styles.supportImgContainer}>
            <PriorityImgComponent src={getSupportMain} alt="People cooking together" fetchpriority="high"/>
          </div>
          <Chips />
          {/* <div className={styles.container}>
            <h1>Participant services suggestions for you</h1>
            <div className={styles.chipsContainer}>
              {participantData.map(card => (
                  <div className={`${styles.thumb} ${isClicked===true && styles.visibleThumb} `}key={card.id}> 
                  {/* {card.link ? */}
                    {/* <Chip
                      label={card.title}
                      sx={chipParticipantStyles}
                      onClick={
                        () => {
                         !card.link ? setIsClicked(isClicked=> !isClicked) :
                          navigate(`${card.link}`);
                          window.scrollTo(0, 0);
                        }}
                    />
        
                    <>
                      <div className={`${(isClicked===true && !card.link) ? styles.hoverContainer: styles.hoverContainerHide}`}>
                  {card.hoverArr && card.hoverArr.map(element => (
                        <span
                          dangerouslySetInnerHTML={{
                          __html: sanitizer(element.hoverText),
                        }}
                          onClick={() => {
                          navigate(`${element.hoverLink}`);
                          setTimeout(() => {
                            const contactSection = document.getElementById(`${element.id}`);
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: "smooth" });
                            } 
                          }, 100);
                            }
                          }
                    />
                      ))}
                    </div>
                      <div className={`${isClicked===true && !card.link ? styles.imgContainer: styles.imgContainerHide}`}>
                    <LazyImgComponent src={triangleImg} alt="triangle"/></div>
                    </>
               
              </div>  */}
              {/* ))}
            </div>
          </div> */} 
          <div className={styles.waveContainer}>
            <img src={WaveUp} alt="wave" />
            <img src={WaveDown} alt="wave" />
          </div>
          <div className={styles.doodleContainer}>
            <img src={Doodle} alt="doodle" />
          </div>
        </section>
        <AnimatedHubSection
          img={appearingImgLeft}
          img2={appearingImgRight}
          img3={mainSupportImg}
        />

        <section className={styles.supportedEmployment}>
          <SupportEmploymentComponent
            items={participantServiceSupportedCards}
            children={
              <div className={styles.textContainer}>
                <h2 className={styles.textTitle}>
                 Our Services
                </h2>
                <p className={styles.text}>
                 We offer employment support and enriching lifestyle activities for those navigating life with unique abilities.
                </p>
              </div>
            }
          />
        </section>
        <section className={styles.diversifiedSection} id="yourChoice">
          <h2 className={styles.diversifiedTitle}>
            Your choice
          </h2>
          <p className={styles.diversifiedText}>
           Our array of services within the business, employment, and activity hubs is continually evolving and broadening to cater to the diverse needs of our participants.
          </p>
          <div className={styles.diversifiedSliderContainer} >
            <MultipleRowsSliderServices
              children={participantServicesSliderMultiple.map((item, index) => (
       
                <div 
                  className={`${styles.sliderCardServices} `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                >
                  <div className={styles.wrapperCard}>
                  <PriorityImgComponent src={item.src} alt={item.hoverText} loading="eager" decoding="async"/>
                 {item.span && <div className={styles.imgTextContainer}><p dangerouslySetInnerHTML={{
                          __html: sanitizer(item.span),
                    }} />
                    </div>}
                  </div>
               
                  {/* <div
                    className={`${
                      isHovered === false
                        ? styles.cardTextHoverHide
                        : styles.cardTextHoverShow
                    }`}
                  >
                    <span> {item.hoverText}</span>
                  </div> */}
                  </div>
              
              ))}
            />
          </div>
        </section>
        <AnimatedHubCards
          img={appearingImgLeft}
          img2={appearingImgRight}
          arr={careerCardsData}
        />
      </main>
      <Footer />
    </>
  );
};

export default ParticipantStories;
