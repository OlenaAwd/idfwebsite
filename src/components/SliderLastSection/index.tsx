import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import { ISliderLastSection } from '../../types/cardType';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderLastSection.module.scss';

interface CardSliderProps {
  cards: ISliderLastSection[] ;
}

const SliderLastSection: FC<CardSliderProps> = ({ cards }) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const { pathname } = useLocation();
  console.log('pathname :>> ', pathname);

  return (
    <Slider {...settings} className={styles.sliderContainer}>
      {cards.map(card => (
        <div key={card.id} className={`${ styles.card}`}>
          <div className={styles.imgContainer}>
            <img src={card.src} alt={card.title} />
          </div>
          <p className={styles.title}>{card.title}</p>
                <p className={styles.subTitle}>{card.subTitle}</p>
          <p className={styles.descr}>{card.description}</p>

          {card.url && (
            <div className={styles.linkContainer}>
              <p
                onClick={() => {
                  navigate(`${card.url}`);
                  window.scrollTo(0, 0);
                }}
                className={styles.linkLearnMore}
              >
                Enquire Now
              </p>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default SliderLastSection;
