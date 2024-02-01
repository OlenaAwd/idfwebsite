import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IGrowCard } from '../../types/cardType';
import styles from './GrowRestaurantCardServices.module.scss';


const GrowRestaurantCardServices: FC<IGrowCard> = ({
  id,
  header,
  title,
  description,
  classes
}) => {
  const { pathname } = useLocation();

  return (
    <div className={`${styles.cardContainer} ${pathname === "/real-estate-services" && styles.updatedCardContainer} ${classes && classes}`} key={id} >
      <div className={styles.body}>
      <p className={styles.cardTitle}>{title}</p>
      <h6 className={styles.cardHeader}>{header}</h6>
      <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default GrowRestaurantCardServices;
