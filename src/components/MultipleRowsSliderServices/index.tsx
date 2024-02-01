import { FC, ReactNode } from 'react';
import Slider from 'react-slick';
import styles from './MultipleRowsSliderServices.module.scss';
interface IMultipleSliderProps {
  children?: ReactNode;
}

const MultipleRowsSliderServices: FC<IMultipleSliderProps> = ({ children }) => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    rows: 2,
    dots: true,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
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

export default MultipleRowsSliderServices;
