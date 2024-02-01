import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderHubSection.module.scss';
import { IOpportunitiesCard } from '../../../types/cardType';
import DOMPurify from 'dompurify';
import LazyImgComponent from '../../../components/LazyImgComponent';

interface CardSliderProps {
  cards: IOpportunitiesCard[] ;
}

const SliderHubSection: FC<CardSliderProps> = ({ cards }) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // centerMode: true,

    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
              <div className={styles.cardOpportunities} key={card.id}>
                <div className={styles.cardImgOpportunities}>
                  <LazyImgComponent src={card.src} alt="card" />
                </div>
                <h6 className={styles.cardOpportunitiesTitle}>{card.title}</h6>
                <div className={styles.opportunitiesBody}>
                  <p
                    className={styles.cardOpportunitiesText}
                    dangerouslySetInnerHTML={{ __html: sanitizer(card.text) }}
                  />
                  {card.text2 !== undefined && (
                    <p
                      className={styles.cardOpportunitiesText2}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(card.text2),
                      }}
                    />
                  )}
                </div>
                <p
                  className={styles.learnOpportunities}
                  onClick={() => {
                    navigate(`${card.link}`);
                  }}
                >
                  Learn More
                </p>
              </div>
      ))}
    </Slider>
  );
};

export default SliderHubSection;
