import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderParticipants.module.scss';
import { ISliderLastSection } from '../../../types/cardType';
import ParticipantCard from '../../../components/ParticipantCard';

interface CardSliderProps {
  cards: ISliderLastSection[];
}

const SliderParticipants: FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 860,
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

  return (
    <Slider {...settings} className={styles.sliderContainer}>
      {cards.map(card => (
       
         <ParticipantCard
                key={card.id}
                id={card.id}
                src={card.src}
                title={card.title}
                description={card.description}
              />
      ))}
    </Slider>
  );
};

export default SliderParticipants;
