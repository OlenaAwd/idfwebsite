import { FC, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ISliderSteps } from '../../constants/slider';
import styles from './SliderSteps.module.scss';
import ArrowPrev from '../../assets/ArrowPrevRed.svg';
import ArrowNext from '../../assets/ArrowNextRed.svg';

interface CardSliderProps {
  cards: ISliderSteps[];
}

const SliderSteps: FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef<Slider | null>(null);


  const goToPrev = () => {
    sliderRef?.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef?.current?.slickNext();
  };
  const { pathname } = useLocation();

  return (
    <>
      <Slider ref={sliderRef} {...settings} className={styles.sliderContainer}>
        {cards.map(card => (
          <div key={card.id} className={`${pathname === "/packing" ? styles.cardPacking : styles.card}`}>
            <div className={`${(pathname!=="/hamper" && pathname !== "/specially-made"&& pathname !== "/packing" ) ? styles.imgContainer : styles.imgContainerHide} ${pathname === "/packing" && styles.imgContainerPacking}`}>
            {card.src ?  <img src={card.src} alt="card" /> : ""}
            </div>
            <div className={`${(pathname==="/hamper" || pathname ==="/specially-made") && styles.body}`}>
            <p className={styles.descr}>{card.description}</p>
            {card.span && <p className={`${pathname === "/packing" ? styles.descrAdditionalPacking : styles.descrAdditional}`}>{card.span}</p>}
            </div>
          </div>
        ))}
      </Slider>
      <div
        className={`${styles.btnContainer} ${(pathname==="/hamper" || pathname ==="/specially-made") && styles.hamperContainer} ${
          pathname === '/social-media' && styles.btnContainerSocialPage
        } ${pathname === "/real-estate-services" && styles.btnContainerRealEstate} ${pathname === "/packing" && styles.btnContainerPacking}`}
      >
        <button onClick={goToPrev}>
          <img src={ArrowPrev} alt="prev" style={{ marginRight: '12px' }} />
        </button>
        <button onClick={goToNext}>
          <img src={ArrowNext} alt="next" />
        </button>
      </div>
    </>
  );
};

export default SliderSteps;
