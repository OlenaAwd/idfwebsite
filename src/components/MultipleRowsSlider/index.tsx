import { FC, ReactNode } from 'react';
import Slider from 'react-slick';
import styles from './MultipleRowsSlider.module.scss';
interface IMultipleSliderProps {
  children?: ReactNode;
}

const MultipleRowsSlider: FC<IMultipleSliderProps> = ({ children }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    rows: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
      // {
      //   breakpoint: 750,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 3,
      //   },
      // },
    ],
  };

  return (
    <div>
      <Slider {...settings} className={styles.slider}>
        {children}
      </Slider>
    </div>
  );
};

export default MultipleRowsSlider;
