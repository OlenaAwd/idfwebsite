import React, { FC, useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardSliderItemForYou from '../CardSliderItemForYou';
import styles from './ItemsForYouSlider.module.scss';
import { IPurposeCard } from '../../types/cardType';

interface IArrProps {
  arr: IPurposeCard[];
}

const ItemsForYouSlider: FC<IArrProps> = ({ arr }) => {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider) {
        slider.slickNext();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [slider]);

  useEffect(() => {
    if (slider) {
      setProgress(0);

      const interval = 8000;
      const startTime = performance.now();

      const updateProgress = (timestamp: number) => {
        const elapsedTime = timestamp - startTime;
        const progressPercentage = (elapsedTime / interval) * 100;
        setProgress(progressPercentage);

        if (progressPercentage < 100) {
          animationFrameRef.current = requestAnimationFrame(updateProgress);
        } else {
          slider.slickNext();
        }
      };

      animationFrameRef.current = requestAnimationFrame(updateProgress);

      return () => {
        if (animationFrameRef.current !== undefined) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [slider, currentSlideIndex]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    beforeChange: (current: number, next: number) => {
      if (animationFrameRef.current !== undefined) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    },
    afterChange: (current: number) => {
      setCurrentSlideIndex(current);
    },
  };

  return (
    <Slider
      ref={sliderRef => setSlider(sliderRef)}
      {...settings}
      className={styles.slider}
    >
      {arr.map((item, index) => (
        <div key={item.id} className={`${styles.slide} `}>
          <CardSliderItemForYou
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            classes={`${index === currentSlideIndex ? styles.active : ''}`}
          />
          {index === currentSlideIndex && (
            <div className={styles.progressBarContainer}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default ItemsForYouSlider;
