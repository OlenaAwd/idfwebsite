import React, { FC } from 'react';
import DOMPurify from 'dompurify';
import { IGrowCard } from '../../types/cardType';
import styles from './GrowRestaurantCard.module.scss';

const GrowRestaurantCard: FC<IGrowCard> = ({
  id,
  header,
  title,
  description,
  classes
}) => {
      const sanitizer = DOMPurify.sanitize;
  return (
    <div className={`${styles.cardContainer} ${classes && classes}` } key={id}>
      <p className={styles.cardTitle}>{title}</p>
      <h6 className={styles.cardHeader}>{header}</h6>
       <p className={styles.cardDescription} dangerouslySetInnerHTML={{__html: sanitizer(description),}} />
    </div>
  );
};

export default GrowRestaurantCard;
