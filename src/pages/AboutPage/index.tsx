import { RefObject, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DOMPurify from 'dompurify';
import ModalAbout from '../../components/ModalAbout';
import HeaderHome from '../../components/HeaderHome';
import ButtonComponent from '../../components/ButtonComponent';
import MultipleRowsSliderServices from '../../components/MultipleRowsSliderServices';
import ImpactCard from '../../components/ImpactCard';
import Footer from '../../components/Footer';
import {
  dataSliderMultipleSocialEnterprice,
  participantServicesSliderMultiple,
} from '../../constants/slider';
import {
  keyObjectivesCard,
  keyObjectivesCardSlider,
  opportunitiesDataCards,
  opportunitiesDataCardsSlider,
} from '../../constants/cardsData';
import LazyImgComponent from '../../components/LazyImgComponent';
import SupportEmploymentComponentAbout from '../../components/SupportEmploymentComponentAbout';
import SliderKeyObjectives from './SliderKeyObjectives';
import SliderHubSection from './SliderHubSection';
import DiversifiedSlider from './DiversifiedSlider';
import Loader from '../../components/Loader';
import { IImpactCard } from '../../types/cardType';
import useSize from '../../hooks/useSize';
import CardService from '../../services/CardService';
import styles from './AboutPage.module.scss';
import aboutUs from '../../assets/aboutUs.webp';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import Ellipse from '../../assets/Ellipse.svg';
import ourVision from '../../assets/ourVision.webp';
import organisation from '../../assets/organisation.webp';
import loveWork from '../../assets/loveWork.webp';
import socialEnterpise from '../../assets/socialEnterprise.webp';
import diversityHub from '../../assets/diversityHubs.webp';
import abilitiesImg from '../../assets/iStockAbilities.webp';


const AboutPage = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [cardData, setCardData] = useState<Array<IImpactCard>>([]);
  const { width } = useSize();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleLearn = () => {
    console.log('handleLearn');
  };
  const handleRead = () => {
    console.log('handleRead');
  };
  const sanitizer = DOMPurify.sanitize;
  const navigate = useNavigate();

  const sectionOrganisationRef = useRef<HTMLDivElement>(null);
  const sectionVisionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSearch = (query: string) => {
    if (contentRef.current) {
      const content = contentRef.current;
      console.log('content :>> ', content);
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
      const mcardData: Array<IImpactCard> = await CardService.getCards();
      setCardData(mcardData);
      setLoading(false);
    }
    fetchblog();
  }, []);

  if (loading) <Loader />;
  return (
    <>
      <Helmet>
        <title>About Us - Our Mission, Vision, and Services</title>
        <meta
          name="description"
          content="Learn about our mission to support people with intellectual disabilities and neurodiversity. Discover our commitment to helping individuals lead happy, healthy, and productive lives through supported employment and comprehensive services."
        />
      </Helmet>
      <HeaderHome onSearch={handleSearch} />
      <main
        ref={contentRef}
        style={{
          maxWidth: '1440px',
          background: '#f8f8f8',
          position: 'relative',
        }}
      >
        <section className={styles.searchSection}>
          <div className={styles.aboutUsContainer}>
            <h1 className={styles.aboutUsHeader}>About Us</h1>
            <p className={styles.aboutUsDescription}>
              About our mission, vision, enterprise, leadership and the people
              we serve.
            </p>
          </div>
          <div className={styles.ourMissionContainer}>
            <div className={styles.missionTextContainer}>
              <h1 className={styles.aboutUsHeader}>Our mission</h1>
              <p
                className={`${styles.missionDescription} ${styles.aboutUsDescription}`}
              >
                Our mission is to provide the capital, facilities and
                coordination of support that will enable people with
                intellectual disabilities to live{' '}
                <b>happy, healthy and productive lives.</b>
              </p>
              {/* <ButtonComponent
                onClick={handleLearn}
                classes={styles.btnLearn}
                color="red"
              >
                Learn More
              </ButtonComponent> */}
            </div>
            <div className={styles.missionImgContainer}>
              <img src={aboutUs} alt="Man tending to flowers in a greenhouse" />
            </div>
            <div className={styles.sectionBtnWrapper}>
              <ButtonComponent
                onClick={handleLearn}
                classes={styles.btnLearnResponsive}
                color="red"
              >
                Learn More
              </ButtonComponent>
            </div>
          </div>
          <div className={styles.waveContainer}>
            <LazyImgComponent src={WaveUp} alt="wave" />
            <LazyImgComponent src={WaveDown} alt="wave" />
          </div>
          <div className={styles.doodleContainer}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
        </section>
        <section className={styles.abilitiesContainer}>
          <SupportEmploymentComponentAbout
            organisationalClick={scrollToSection(sectionOrganisationRef)}
            ourVisionClick={scrollToSection(sectionVisionRef)}
            children={
              <div className={styles.textContainer}>
                <h2 className={styles.textTitle}>
                  For people of different abilities.
                  <br /> Supported Employment.
                </h2>
                <p className={styles.text}>
                  We support participants who are living with disability and
                  neurodiversity.
                </p>
              </div>
            }
          />

          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section>
        <section className={styles.visionSection} ref={sectionVisionRef}>
          <div className={styles.ourMissionContainer}>
            <div className={styles.missionTextContainer}>
              <h1 className={styles.aboutUsHeader}>Our vision</h1>
              <p
                className={`${styles.missionDescription} ${styles.aboutUsDescription}`}
              >
                Our vision is to be Australia’s leading provider of supported
                work for people living with disability.
              </p>
              {/* <ButtonComponent
                onClick={handleRead}
                classes={styles.btnLearn}
                color="red"
              >
                Read More
              </ButtonComponent> */}
            </div>
            <div className={styles.missionImgContainer}>
              <LazyImgComponent src={ourVision} alt="Woman sorting vegetables" />
            </div>
            <div className={styles.sectionBtnWrapper}>
              <ButtonComponent
                onClick={handleRead}
                classes={styles.btnLearnResponsive}
                color="red"
              >
                Read More
              </ButtonComponent>
            </div>
          </div>
          <div className={styles.doodleContainer2}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
        </section>
        <section className={styles.keyObjSection}>
          <div className={styles.keyObjContainer}>
            <h2 className={styles.keyTitle}>
              Our key objectives to deliver on our vision
            </h2>
            <div className={styles.cardsContainer}>
              {keyObjectivesCard.map(item => (
                <div key={item.id} className={styles.wrapper}>
                  <div className={styles.imgObjContainer}>
                    <LazyImgComponent src={item.img} alt="card" />
                  </div>
                  <p className={styles.objTitle}>{item.title}</p>
                  <p className={styles.objDescription}>{item.description}</p>
                  <p className={styles.initiatives}>Initiatives:</p>
                  <ul className={styles.span}>
                    <li className={styles.initiativeItem}>{item.point}</li>
                    <li className={styles.initiativeItem}>{item.point2}</li>
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.cardsContainerSlider}>
              <SliderKeyObjectives
                cards={
                  width > 1190 ? keyObjectivesCardSlider : keyObjectivesCard
                }
              />
            </div>
          </div>
        </section>
        <section
          className={styles.organizationSection}
          ref={sectionOrganisationRef}
        >
          <div className={styles.leftSide}>
            <h1 className={styles.organisationHeader}>Our Organisation</h1>
            <p className={styles.organisationTitle}>
              IDF Foundation, Supported Employment
            </p>
            <div className={styles.organisationImgContainer}>
              <LazyImgComponent src={organisation} alt="Man working in a factory" />
            </div>
          </div>
          <div className={styles.rightSide}>
            <div className={styles.loveImgContainer}>
              <LazyImgComponent src={loveWork} alt="love work" />
            </div>

            <p className={styles.rightSideText}>
              All of our employment support is founded on created meaningful and
              regarding work... Our <b>Love my work</b> participant centred
              approach is at the heart of all we do.
              <br />
              <br /> <b>Love my work</b> shows the world the joy our
              participants have in their work. Our highly engaged workers,
              really love what they do, everyday!
            </p>
          </div>
        </section>
        <section className={styles.ourSection}>
          <div className={styles.ourContainer}>
            <div className={styles.ourLeftContainer}>
              <div className={styles.modalCont}>
                <ModalAbout children="Our People" />
                <p className={styles.peopleDescr}>
                  Leaders in supported employment
                </p>
              </div>
            </div>
            <div className={styles.ourRightContainer}>
              <div className={styles.modalCont}>
                <ModalAbout children="Our History" />
                <p className={styles.peopleDescr}>
                  Supported employment since 1962
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.socialEnterprise}>
          <h2 className={styles.personTitle}>
            Social enterprise
            <br /> Creating supported work opportunities
          </h2>
          <div className={styles.supportedEmploymentContainer}>
            <div className={styles.employmentTextContainer}>
              <h1 className={styles.supportedEmployment}>
                Supported employment. Social enterprise.
              </h1>
              <p
                className={`${styles.missionDescription} ${styles.aboutUsDescription}`}
              >
                Our diversity of entities provides more opportunities for a
                wider talent pool and develops a broader range of skills in our
                workers.
              </p>
              <p
                className={`${styles.missionDescription} ${styles.aboutUsDescription}`}
              >
                Our <b>highly engaged employees</b> create resourceful,
                inclusive and diverse organisations.
              </p>

              {/* <ButtonComponent
                onClick={handleRead}
                classes={styles.btnLearn}
                color="red"
              >
                Learn More
              </ButtonComponent> */}
            </div>
            <div className={styles.missionImgContainer}>
              <LazyImgComponent src={socialEnterpise} alt="The management team in a professional setting" />
            </div>
            <div className={styles.sectionBtnWrapper}>
              <ButtonComponent
                onClick={handleRead}
                classes={styles.btnLearnResponsive}
                color="red"
              >
                Learn More
              </ButtonComponent>
            </div>
          </div>
        </section>
        <section className={styles.diversifiedSection}>
          <h2 className={styles.diversifiedTitle}>
            Our diversified social enterprise
          </h2>
          <p className={styles.diversifiedText}>
            IDF invests in and manages consumer brands which are created and
            manufactured by supported employees. Our diverse range of roles and
            sectors allows us to offer employment opportunities which best match
            natural aptitude and interests.
          </p>
          <div className={styles.diversifiedSliderContainerNew}>
            {dataSliderMultipleSocialEnterprice.map(item => (
              <div
                className={`${styles.sliderCardServices} `}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                key={item.id}
              >
                <div className={styles.wrapperCardFirst}>
                  <img src={item.src} alt={item.span} />
                  {item.span && (
                    <div className={styles.imgTextContainerFirst}>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(item.span),
                        }}
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    isHovered === false
                      ? styles.cardTextHoverHide
                      : styles.cardTextHoverShowFirst
                  }`}
                >
                  <span> {item.hoverText}</span>
                </div>
              </div>
            ))}
          </div>
          {/* <div className={styles.diversifiedSliderContainer}>
           <MultipleRowsSlider
              children={dataSliderMultiple.map((item) => (
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
               
                  <div
                    className={`${
                      isHovered === false
                        ? styles.cardTextHoverHide
                        : styles.cardTextHoverShowFirst
                    }`}
                  >
                    <span> {item.hoverText}</span>
                  </div>
                  </div>
              ))}
            />
          </div> */}
          <DiversifiedSlider arr={dataSliderMultipleSocialEnterprice} />
        </section>
        <section className={`${styles.diversityHubs}`}>
          <div className={styles.supportedServEmploymentContainer}>
            <div className={styles.employmentServTextContainer}>
              <h1 className={styles.participantServicesTitle}>
                Participant services. Support to work differently.
              </h1>
              <p
                className={`${styles.missionDescription} ${styles.aboutUsDescription}`}
              >
                Our <b>Diversity Hubs</b> are dedicated to enabling supported
                workers to find the work they love.
              </p>
              <p
                className={`${styles.missionDescription} ${styles.aboutUsDescription}`}
              >
                Our hubs are equipped with resources, mentors, equipment,
                training and work opportunities that will support people to work
                differently and lean into their strengths and preferences.
              </p>

              {/* <ButtonComponent
                onClick={handleRead}
                classes={styles.btnLearn}
                color="red"
              >
                Learn More
              </ButtonComponent> */}
            </div>
            <div className={styles.hubsImgContainer}>
              <img src={diversityHub} alt="Empowering workspaces with resources, mentors, and opportunities for diverse and effective collaboration" />
            </div>
            <div className={styles.sectionBtnWrapper}>
              {/* <ButtonComponent
                onClick={handleRead}
                classes={styles.btnLearnResponsive}
                color="red"
              >
                Learn More
              </ButtonComponent> */}
            </div>
          </div>
        </section>
        <section className={styles.extraAbilitiesSection}>
          <div className={styles.abilitiesImgContainer}>
            <img src={abilitiesImg} alt="Woman showcasing exceptional talents in supported employment" />
          </div>
          <div className={styles.abilitiesTextContainer}>
            <h1 className={styles.abilitiesTitle}>
              The extraordinary abilities of supported employment talent.
            </h1>
            <p
              className={`${styles.missionDescription} ${styles.aboutUsDescription}`}
            >
              A ‘differently abled’ inclusive organisation harnesses the unique
              abilities inherent in the different ways our brains and bodies
              work.
            </p>
            <p className={styles.aboutUsDescription}>
              A supported employment organisation is more agile, energised and
              ideas rich. It is better resourced to face the challenges of a
              world in constant reinvention.
            </p>
          </div>
        </section>
        <section className={styles.opportunitiesSection}>
          <h2 className={styles.opportunitiesTitle}>
            Our Diversity Hubs offer lifestyle, employment and self employment
            opportunities and resources.
          </h2>
          <div className={styles.opportunitiesCardsWrapper}>
            {opportunitiesDataCards.map(item => (
              <div className={styles.cardOpportunities} key={item.id}>
                <div className={styles.cardImgOpportunities}>
                  <LazyImgComponent src={item.src} alt="card" />
                </div>
                <h6 className={styles.cardOpportunitiesTitle}>{item.title}</h6>
                <div className={styles.opportunitiesBody}>
                  <p
                    className={styles.cardOpportunitiesText}
                    dangerouslySetInnerHTML={{ __html: sanitizer(item.text) }}
                  />
                  {item.text2 !== undefined && (
                    <p
                      className={styles.cardOpportunitiesText2}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(item.text2),
                      }}
                    />
                  )}
                </div>
                <p
                  className={styles.learnOpportunities}
                  onClick={() => {
                    navigate(`${item.link}`);
                  }}
                >
                  Learn More
                </p>
              </div>
            ))}
          </div>
          <div className={styles.opportunitiesCardsWrapperSlider}>
            <SliderHubSection
              cards={
                width > 960
                  ? opportunitiesDataCardsSlider
                  : opportunitiesDataCards
              }
            />
          </div>
        </section>
        <section className={styles.diversifiedSection}>
          <h2 className={styles.diversifiedTitle}>Your choice</h2>
          <p className={`${styles.diversifiedText} ${styles.supportText}`}>
            Our array of services within the business, employment, and activity
            hubs is continually evolving and broadening to cater to the diverse
            needs of our participants.
          </p>
          <div className={styles.diversifiedSliderContainer}>
            <MultipleRowsSliderServices
              children={participantServicesSliderMultiple.map((item, index) => (
                <div
                  className={`${styles.sliderCardServices} `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                >
                  <div className={styles.wrapperCard}>
                    <img src={item.src} alt={item.src} />
                    {item.span && (
                      <div className={styles.imgTextContainer}>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: sanitizer(item.span),
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className={`${
                      isHovered === false
                        ? styles.cardTextHoverHide
                        : styles.cardTextHoverShow
                    }`}
                  >
                    <span> {item.hoverText}</span>
                  </div>
                </div>
              ))}
            />
          </div>
        </section>
        <section className={styles.storiesImpact}>
          <h1 className={styles.getSupportHeaderSecond}>Participant Stories</h1>
          <h1 className={styles.getSupportHeaderAdditional}>LOVE MY WORK</h1>
          <p className={styles.getSupportText}>
            Our ‘participant centred approach’ to workplace culture.
          </p>
          <p className={styles.getSubSupportText}>Love my work in action</p>
          <div className={styles.supportedCardContainer}>
            {cardData.slice(0, 4).map(item => (
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
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
