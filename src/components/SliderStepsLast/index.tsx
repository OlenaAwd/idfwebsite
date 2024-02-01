import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC, useRef } from 'react';
import { ISliderSteps } from '../../constants/slider';
import styles from './SliderStepsLast.module.scss';
import ArrowPrev from '../../assets/ArrowPrevRed.svg';
import ArrowNext from '../../assets/ArrowNextRed.svg';

interface CardSliderProps {
  cards: ISliderSteps[];
}

const SliderStepsLast: FC<CardSliderProps> = ({ cards }) => {
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
        breakpoint: 860,
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

  return (
    <>
      <Slider ref={sliderRef} {...settings} className={styles.sliderContainer}>
        {cards.map(card => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={card.src} alt="" />
            </div>
            <p className={styles.descr}>{card.description}</p>
          </div>
        ))}
      </Slider>
      <div className={styles.btnContainer}>
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

export default SliderStepsLast;
