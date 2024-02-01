import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderHubSection.module.scss';

import NeurodiversityCard from '../../../components/NeurodiversityCard';
import { IPurposeCard } from '../../../types/cardType';


interface CardSliderProps {
  cards: IPurposeCard[] ;
}

const SliderHubSection: FC<CardSliderProps> = ({ cards }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    // centerMode: true,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <Slider {...settings} className={styles.sliderContainer}>
    
      {cards.map(item => (
              <div key={item.id}>
                  <NeurodiversityCard
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                  />
                </div>
      ))}
    </Slider>
  );
};

export default SliderHubSection;
