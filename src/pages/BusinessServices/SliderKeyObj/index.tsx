import { FC } from 'react';
import DOMPurify from 'dompurify';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IPurposeCard, } from '../../../types/cardType';
import styles from './SliderKeyObj.module.scss';


interface CardSliderProps {
   cards: IPurposeCard[];
}

const SliderKeyObjectives: FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
     {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 930,
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
      {/* <div className={styles.cardsContainer}> */}
              {cards.map(item => (
                <div key={item.id} className={styles.wrapper}>
                  <div className={styles.imgObjContainer}>
                    <img src={item.img} alt="card" />
                  </div>
                  <p className={styles.objTitle}>{item.title}</p>

                  <p
                    className={styles.objDescription}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(item.description),
                    }}
                  />
                   </div>
              ))}
                {/* </div> */}
    </Slider>
  );
};

export default SliderKeyObjectives;
