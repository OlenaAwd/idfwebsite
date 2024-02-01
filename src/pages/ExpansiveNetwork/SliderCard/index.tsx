import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComponent from '../../../components/OurExpansiveNetwork/card';
import { ICardProps } from '../../../constants/ourExpansiveNetwork';

import styles from './SliderCard.module.scss';


interface IExpansiveProps{
  arr: ICardProps[]
}

const SliderCard:FC<IExpansiveProps> = ({arr}) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,

    responsive: [
      {
        breakpoint: 1133,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
        <div className={styles.wrapper}>
    <Slider {...settings} className={styles.sliderContainer}>
    {arr.map(card=>(
       <CardComponent id={card.id} span={card.span} img={card.img} title={card.title} description={card.description}/>
    ))}
    </Slider>
    </div>
  );
};

export default SliderCard;
