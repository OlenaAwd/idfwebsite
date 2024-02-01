import { FC } from 'react';
import DOMPurify from 'dompurify';
import Slider from 'react-slick';
import { IManagementCard } from '../../types/cardType';
import styles from './OurPeopleSlider.module.scss';
import LinkedIn from '../../assets/LinkedIn.svg';

interface IMultipleSliderProps {
  items: IManagementCard[];
}

const OurPeopleSlider: FC<IMultipleSliderProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,

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
  const sanitizer = DOMPurify.sanitize;

  return (
    <div>
      <Slider {...settings} className={styles.sliderContainer}>
        {items.map(card => (
          <div className={styles.wrapper} key={card.id}>
            <div key={card.id} className={styles.card}>
              <div className={styles.imgContainer}>
                <img src={card.img} alt="person" />
              </div>
              <div>
                <p className={styles.name}>{card.name}</p>
                <p
                  className={styles.name}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(card.position),
                  }}
                />
                <p className={styles.subPosition}>{card.subPosition}</p>

                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(card.description),
                  }}
                />
                <a href={card.social} target="_blank" rel="noreferrer">
                  <img src={LinkedIn} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurPeopleSlider;
