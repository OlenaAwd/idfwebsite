import { FC, useRef } from 'react';
import Slider from 'react-slick';
import { IHubPersonCard } from '../../types/cardType';
import styles from './EmploymentHubPersonSlider.module.scss';
import ArrowPrev from '../../assets/ArrowPrevBlack.svg';
import ArrowNext from '../../assets/ArrowNextBlack.svg';
import { useLocation } from 'react-router-dom';
import PriorityImgComponent from '../PriorityImgComponent';

interface IHubProps {
  items: IHubPersonCard[];
}

const EmploymentHubPersonSlider: FC<IHubProps> = ({ items }) => {
  const settings = {
    dots: false,
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

  const sliderRef = useRef<Slider | null>(null);

  const goToPrev = () => {
    sliderRef?.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef?.current?.slickNext();
  };
const {pathname}=useLocation();
  return (
    <div>
      <Slider ref={sliderRef} {...settings} className={styles.sliderContainer}>
        {items.map(card => (
          <div key={card.id} className={styles.cardCont}>
            <div className={`${pathname==="/gaming-hub" ? styles.gamingWrapper : styles.wrapper}`}>
              <div className={styles.imgContainer}>
                <PriorityImgComponent src={card.src} alt={card.title} loading="eager" decoding="async"/>
              </div>
              <div className={styles.textContainer}>
                <h4 className={styles.title}>{card.title}</h4>
                <p className={`${styles.section} ${styles.sectionWithLine}`}>
                  <span></span>
                  {card.section}
                </p>
                <p className={styles.section}>{card.text}</p>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button onClick={goToPrev}>
                <img src={ArrowPrev} alt="prev" />
              </button>
              <p className={styles.count}>{card.id}/4</p>
              <button onClick={goToNext}>
                <img src={ArrowNext} alt="next" />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EmploymentHubPersonSlider;
