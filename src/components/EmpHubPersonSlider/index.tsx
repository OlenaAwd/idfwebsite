import { FC } from 'react';
import Slider from 'react-slick';
import styles from './OurPeopleSlider.module.scss';
import { IManagementCard } from '../../types/cardType';

interface IMultipleSliderProps {
  items: IManagementCard[];
}

const OurPeopleSlider: FC<IMultipleSliderProps> = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,

    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className={styles.sliderContainer}>
        {items.map(card => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imgContainer}>
              <img src={card.img} alt="" />
            </div>
            {/* <p className={styles.name}>{card.name}</p> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurPeopleSlider;
