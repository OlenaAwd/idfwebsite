import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import ModalRequestDemo from '../../components/ModalRequestDemo';
import AdvocacyModalEnquire from '../../components/AdvocacyModalEnquire';
import {  ExpansiveModalDataEnquire } from '../../constants/cardsData';
import { chipStylesExpansiveEnquire } from '../../constants/styles/chip';
import OurExpansiveNetwork from '../../components/OurExpansiveNetwork';
import Footer from '../../components/Footer';
import styles from "./ExpansiveNetwork.module.scss"
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import expansiveServices from "../../assets/expansiveHero.webp";
import LazyImgComponent from '../../components/LazyImgComponent';



const ExpansiveNetwork = () => {
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
      <title>Explore Our Expansive Network of Digital Solutions - IDF</title>
      <meta name="description" content="Discover IDF's diverse digital solutions tailored to enhance your business's visibility and engagement in the ever-evolving digital landscape. Explore our individual facets, including Voice Search, Chat Bots, Social Posting, and Menu Search Results." />
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
              Explore Our Expansive Network
              </h2>
              <p className={styles.customerDescription}>
              At IDF, we pride ourselves on offering a diverse range of digital solutions, tailored to boost your business's visibility and engagement in the ever-evolving digital landscape. Dive into the individual facets of our extensive network.
              </p>
              <div className={styles.btnContainer}>
              <ModalRequestDemo />
              {ExpansiveModalDataEnquire.map(item => (
              <AdvocacyModalEnquire
                key={item.id}
                label={item.label}
                text={item.text}
                sx={chipStylesExpansiveEnquire}
              />
            ))}
               
              </div>
            </div>
            <div className={styles.imgContainer}>
              <img src={expansiveServices} alt="Man checking the route on a mobile map app" />
            </div>
            <div className={styles.btnContainerResponsive}>
            <ModalRequestDemo />
            {ExpansiveModalDataEnquire.map(item => (
              <AdvocacyModalEnquire
                key={item.id}
                label={item.label}
                text={item.text}
                sx={chipStylesExpansiveEnquire}
              />
            ))}
            
            </div>

            <div className={styles.doodleContainer}>
              <LazyImgComponent src={Doodle} alt="doodle" />
            </div>
          </div>
        </section>
        <OurExpansiveNetwork />
         <p className={styles.expansiveDescription}>
         Our network isn't just about the breadth of solutions; it's about depth. It's about ensuring that every interaction a potential customer has with your brand is meaningful, efficient, and leaves a lasting impression.<br/><br/> Let IDF's expansive network be the catalyst for your brand's digital evolution.
          </p>
        </main>
        <Footer />
        </>
  )
}

export default ExpansiveNetwork