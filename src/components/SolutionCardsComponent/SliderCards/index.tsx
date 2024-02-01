import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderCards.module.scss';
import { ICardForHamper } from './data';
import { useLocation } from 'react-router-dom';


interface ISliderHamper{
  array: ICardForHamper[]
}

const SliderCards:FC<ISliderHamper> = ({array}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,

    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


const {pathname}=useLocation()

  return (
   
      <Slider  {...settings} className={styles.sliderContainer}>
        {array.map(item=>(
          <div className={`${pathname==="/restaurant-services" ?styles.cardContainerRestaurant : styles.cardContainer} ${pathname==="/specially-made"  && styles.cardContainerSpecial}`} key={item.id} >
                    <p className={styles.cardTitle}>{item.title}</p>
                    
                <div className={styles.body}>
                    <h6 className={styles.cardHeader}>{item.header}</h6>
                    <p className={styles.cardDescription}>{item.description}</p>
              </div>
          </div>
        ))} 
      </Slider>
     
  );
};

export default SliderCards;
