import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LazyImgComponent from '../../../components/LazyImgComponent';
import { IKeyObjectives, } from '../../../types/cardType';
import styles from './SliderKeyObjectives.module.scss';

interface CardSliderProps {
   cards: IKeyObjectives[];
}

const SliderKeyObjectives: FC<CardSliderProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
     {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
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
      {cards.map(item => (
       
        <div key={item.id} className={styles.wrapper}>
                  <div className={styles.imgObjContainer}>
                    <LazyImgComponent src={item.img} alt="card" />
                  </div>
                  <p className={styles.objTitle}>{item.title}</p>
                  <p className={styles.objDescription}>{item.description}</p>
                  <ul className={styles.span}>
                    Initiatives:
                    <li className={styles.initiativeItem}>{item.point}</li>
                    <li className={styles.initiativeItem}>{item.point2}</li>
                  </ul>
                </div>
      ))}
    </Slider>
  );
};

export default SliderKeyObjectives;
