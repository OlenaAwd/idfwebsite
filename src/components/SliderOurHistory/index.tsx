import { FC } from 'react';
import Slider from 'react-slick';
import { IHistoryCard } from '../../types/cardType';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderOurHistory.module.scss';
import LazyImgComponent from '../LazyImgComponent';

interface CardSliderProps {
  cards: IHistoryCard[];
}

const SliderOurHistory: FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.sliderContainer}>
      {cards.map(card => (
         <div className={styles.cardHistory} key={card.id}>
            <LazyImgComponent src={card.src} alt="history" />
            <p className={styles.cardYear}>{card.year}</p>
            <p className={styles.cardDescription}>
              {card.description}
            </p>
          </div>
      ))}
    </Slider>
  );
};

export default SliderOurHistory;
