import React from 'react';
import { useLocation } from 'react-router-dom';
import SliderSolutionsCards from '../SliderSolutionsCards';
import { cardsDataWithImg, cardsDataWithImgSpecially } from '../SliderSolutionsCards/data';
import styles from "./SolutionHamperImgCard.module.scss";
import img1 from "../../../assets/sweet.webp";
import img2 from "../../../assets/rejuventating.webp";
import img3 from "../../../assets/delicious.webp";
import img4 from "../../../assets/citrus.webp";
import img5 from "../../../assets/ocean.webp";
import img6 from "../../../assets/rose.webp";
import img7 from "../../../assets/packing/packingBrand1.webp";
import img8 from "../../../assets/packing/packingBrand2.webp";
import img9 from "../../../assets/packing/packingBrand3.webp";
import LazyImgComponent from '../../LazyImgComponent';



const SolutionHamperImgCard = () => {
  const { pathname } = useLocation();
  return (
   <>
       {pathname === "/hamper" && (
        <>
         <div className={styles.cardsContainer}>
           <div className={`${styles.cardContainer}`}  >
                    <p className={styles.cardTitle}>sweet</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img1} alt="sweet"/>
                    </div>
                <div className={styles.body}>
                    <h6 className={styles.cardHeader}>Confectionary Wonders Hamper</h6>
                    <p className={styles.cardDescription}>An ever-expanding array of sweet delights await in our hampers. From specially blended teas that soothe the soul, hand-made fudge that melts the heart, to beautifully packed rock candy that sparkles with joy—every bite is a celebration.</p>
              </div>
          </div>
          <div className={`${styles.cardContainer}`}  >
                    <p className={styles.cardTitle}>REJUVENTATING</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img2} alt="rejuventating"/>
                    </div>
                <div className={styles.body}>
                    <h6 className={styles.cardHeader}>Specially Made Wellness Hamper</h6>
                    <p className={styles.cardDescription}>Our hampers are brimming with our scented and beauty range. Candles that illuminate, diffusers that invigorate, hand creams that rejuvenate, and lip balms that nourish. Each product reflects our commitment to quality, passion, and love.</p>
              </div>
              </div>
       
          <div className={`${styles.cardContainer}`}  >
                    <p className={styles.cardTitle}>DELICIOUS</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img3} alt="delicious"/>
                    </div>
                <div className={styles.body}>
                    <h6 className={styles.cardHeader}>Gourmet Foodies Hampers</h6>
                    <p className={styles.cardDescription}>Heartfelt Hampers for Foodies are a culinary delight. Indulge in a gourmet journey featuring an exquisite selection of fine teas, decadent fudge, artisanal crackers, and an array of premium condiments. It's a flavour-packed experience that'll tantalize every food lover's taste buds.</p>
              </div>
          </div>
          </div>
          <SliderSolutionsCards array={cardsDataWithImg}/>

        </>
      )}
       {pathname === "/specially-made" && (
        <>
         <div className={styles.cardsContainerSpecial}>
           <div className={`${styles.cardContainerSpecial}`}  >
                    <p className={styles.cardTitle}>CITRUS</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img4} alt="citrus"/>
                    </div>
                <div className={styles.body}>
                    <h6 className={styles.cardHeader}>Mandarin, blood orange and lime scent</h6>
                    <p className={styles.cardDescription}>Our zesty citrus range includes:
        Essential oils, diffusers, candles, body creams, balms and body wash.</p>
              </div>
          </div>
          <div className={`${styles.cardContainerSpecial}`}  >
                    <p className={styles.cardTitle}>OCEAN</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img5} alt="ocean"/>
                    </div>
                <div className={styles.body}>
                    <h6 className={styles.cardHeader}>Ocean fresh, acqua scent</h6>
                    <p className={styles.cardDescription}>The crisp invigorating scent of Amalfi Coast will bring an ocean breeze into your very home. You can get the ocean fragrance through our body creams, balms, oils and home scents such as candles, diffusers and essential oils.</p>
              </div>
              </div>
       
          <div className={`${styles.cardContainerSpecial}`}  >
                    <p className={styles.cardTitle}>ROSE</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img6} alt="rose"/>
                    </div>
                <div className={styles.body}>
                    <h6 className={styles.cardHeader}>Succulent and rich rose fragrance</h6>
                    <p className={styles.cardDescription}>The classic warm rose fragrance will make your home and body feel fresh and sweet. Freshen the room with glorious scent of rose wafting from our range of candles, oils and diffusers</p>
              </div>
          </div>
          </div>
          <SliderSolutionsCards array={cardsDataWithImgSpecially}/>

        </>
      )}
       {pathname === "/packing" && (
        <>
         <div className={styles.cardsContainerPacking}>
           <div className={`${styles.cardContainerPacking}`}  >
                    <p className={styles.cardTitle}>LINDT</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img7} alt="hand-made"/>
                    </div>
                <div className={styles.bodyPacking}>
                    <h6 className={styles.cardHeaderPacking}>Elegant packing finished by hand</h6>
                    <p className={styles.cardDescriptionPacking}>Assuring each sweet delight is encased with love and dedication.</p>
              </div>
          </div>
          <div className={`${styles.cardContainerPacking}`}  >
                    <p className={styles.cardTitle}>KELLOGG’S</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img8} alt="brand"/>
                    </div>
                <div className={styles.bodyPacking}>
                    <h6 className={styles.cardHeaderPacking}>Leaders in sustainable packaging</h6>
                    <p className={styles.cardDescriptionPacking}>Ensuring your favourite breakfasts are packed with utmost care and precision.</p>
              </div>
              </div>
       
          <div className={`${styles.cardContainerPacking}`}  >
                    <p className={styles.cardTitle}>RANDOM HARVEST</p>
                    <div className={styles.cardImgContainer}>
                      <LazyImgComponent src={img9} alt="packing"/>
                    </div>
                <div className={styles.bodyPacking}>
                    <h6 className={styles.cardHeaderPacking}>Gourmet Gift packaging</h6>
                    <p className={styles.cardDescriptionPacking}>Safeguarding a myriad of gourmet condiments, ensuring they reach your table with the same quality and zest with which they were crafted.</p>
              </div>
          </div>
          </div>
        </>
      )}
      </>
  )
}

export default SolutionHamperImgCard;