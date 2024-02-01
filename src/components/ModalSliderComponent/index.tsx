import React, {FC} from 'react';
import Slider from 'react-slick';
import styles from "./ModalSliderComponent.module.scss";

interface IModalProps {
    //   items: IHubPersonCard[];
    firstChildren?: JSX.Element,
    secondChildren?:JSX.Element,
}

const ModalSliderComponent:FC<IModalProps> = ({firstChildren, secondChildren}) => {
     const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false

  };
  return (
      <Slider {...settings} className={styles.sliderContainer}>
          <div className={styles.firstSlide}>{firstChildren}</div>
            <div className={styles.secondSlide}>{secondChildren}</div>
     </Slider>
  )
}

export default ModalSliderComponent