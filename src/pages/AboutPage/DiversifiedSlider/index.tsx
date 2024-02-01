import React, { FC, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './DiversifiedSlider.module.scss';
import { IdataSliderMultiple } from '../../../types/cardType';
import DOMPurify from 'dompurify';

interface ISliderProps {
  arr: IdataSliderMultiple[];
}

const DiversifiedSlider: FC<ISliderProps> = ({ arr }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,

    // responsive: [
    //     {
    //         breakpoint: 1320,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //         },
    //     },
    //     {
    //         breakpoint: 960,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //         },
    //     },
    // ],
  };
  const [isHovered, setIsHovered] = useState(false);

  const sanitizer = DOMPurify.sanitize;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings} className={styles.sliderContainer}>
        {arr.slice(0, 6).map(item => (
          <div
            className={`${styles.sliderCardServices} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={item.id}
          >
            <div className={styles.wrapperCardFirst}>
              <img src={item.src} alt={item.span} />
              {item.span && (
                <div className={styles.imgTextContainerFirst}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(item.span),
                    }}
                  />
                </div>
              )}
            </div>

            <div
              className={`${
                isHovered === false
                  ? styles.cardTextHoverHide
                  : styles.cardTextHoverShowFirst
              }`}
            >
              <span> {item.hoverText}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DiversifiedSlider;
