import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderHubSectionLast.module.scss';
import { ICareerCard,  } from '../../../types/cardType';
import { NavLink } from 'react-router-dom';
import DOMPurify from 'dompurify';


interface CardSliderProps {
  cards: ICareerCard[] ;
}

const SliderHubSectionLast: FC<CardSliderProps> = ({ cards }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
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

const sanitizer = DOMPurify.sanitize;
  return (
    <Slider {...settings} className={styles.sliderContainer}>
    
      {cards.map(card => (
               <div className={styles.card} key={card.id}>
                  <img src={card.img} alt="card" />
                  <p className={styles.cardTitle}>{card.title}</p>
                  <p
                    className={styles.cardText}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(card.description),
                    }}
                  />
                  <NavLink to={`${card.link}`} className={styles.link}>
                    Learn More
                  </NavLink>
                </div>
      ))}
    </Slider>
  );
};

export default SliderHubSectionLast;
