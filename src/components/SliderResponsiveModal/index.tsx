import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderResponsiveModal.module.scss';
import { interestSelect } from '../../constants/pages';
import SelectComponent from '../SelectComponent';
import ButtonComponent from '../ButtonComponent';

interface CardSliderProps {
  src: string;
}

const SliderResponsiveModal: FC<CardSliderProps> = ({ src }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

  };
  const handleDonate = () => {
    console.log('handleDonate');
  };

  return (
    <Slider {...settings} className={styles.sliderContainer}>
      <div>
        <h2 className={styles.modalTitle}>
          Work with us to transform into a ND organisation.
        </h2>
        <div className={styles.card}>
          <div className={styles.imgContainer}>
            <img src={src} alt="transform" />
          </div>
          {/* <p className={styles.title}>
            Our coaching and partnering services can fast track your ND
            adoption.
          </p>
          <p className={styles.descr}>
            We work with business and government agencies large and small. We
            can custom build a ND team for your organisation. We work with some
            of Australia’a leading organisations including Kelloggs and Lindt.
          </p> */}
        </div>
      </div>

      <div className={styles.cardSecond}>
        <SelectComponent
          arr={interestSelect}
          title="I am interested in"
          children={
            <div className={styles.serviceContainer}>
              <ButtonComponent
                onClick={handleDonate}
                color="red"
                classes={styles.donateNowBtn}
              >
                Enquire Now
              </ButtonComponent>
              <ButtonComponent
                onClick={handleDonate}
                color="white"
                classes={styles.donateNowBtnWhite}
              >
                Call our Sales Team
              </ButtonComponent>
            </div>
          }
        />
      </div>
    </Slider>
  );
};

export default SliderResponsiveModal;
