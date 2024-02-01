import React from 'react';
import { useLocation } from 'react-router-dom';
import CardComponent from './card';
import { ourExpansiveNetwork } from '../../constants/ourExpansiveNetwork';
import styles from "./OurExpansiveNetwork.module.scss"
import SliderCard from '../../pages/ExpansiveNetwork/SliderCard';


const OurExpansiveNetwork = () => {
  const { pathname } = useLocation();

  return (
      <section className={`${styles.sectionContainer} ${pathname==='/business-services' && styles.additionalSectionContainer}`}>
          <h2 className={styles.sectionTitle}>Explore Our Expansive Network</h2>
          <p className={styles.sectionDescription}>At IDF, we pride ourselves on offering a diverse range of digital solutions, tailored to boost your business's visibility and engagement in the ever-evolving digital landscape. Dive into the individual facets of our extensive network.
      </p>
      <div className={styles.cardContainer}>
        {ourExpansiveNetwork.map(card => (
          <CardComponent id={card.id} span={card.span} img={card.img} title={card.title} description={card.description}/>
          
        ))}
      </div>
      <div className={styles.cardSliderContainer}>
        <SliderCard arr={ourExpansiveNetwork} />
      </div>
      
    </section>
  )
}

export default OurExpansiveNetwork