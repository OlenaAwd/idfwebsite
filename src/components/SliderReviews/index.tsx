import { FC, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ISliderReviews } from '../../constants/slider';
import styles from './SliderReviews.module.scss';
import ArrowPrev from '../../assets/ArrowPrevRed.svg';
import ArrowNext from '../../assets/ArrowNextRed.svg';
import { useLocation } from 'react-router-dom';

interface CardSliderProps {
  items: ISliderReviews[];
}

const SliderReviews: FC<CardSliderProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1380,
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
        {items.map(card => (
          <div key={card.id} className={styles.card}>
            <div className={styles.titleContainer}>
              <div className={styles.imgContainer}>
                <img src={card.src} alt="" />
              </div>
              <p className={styles.name}>{card.name}</p>
            </div>
            <p className={styles.descr}>{card.review}</p>
          </div>
        ))}
      </Slider>
      <div
        className={`${styles.btnContainer} ${
          pathname === '/real-estate-services' && styles.btnRealEstateContainer
        }`}
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

export default SliderReviews;
