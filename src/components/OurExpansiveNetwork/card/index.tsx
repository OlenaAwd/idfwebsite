import React, { FC, useState } from 'react';
import DOMPurify from 'dompurify';
import { ICardProps } from '../../../constants/ourExpansiveNetwork';
import styles from './CardComponent.module.scss';
import arrow from "../../../assets/arrowUp.svg"


const CardComponent: FC<ICardProps> = ({ span, id, title, description, img }) => {
    const sanitizer = DOMPurify.sanitize;
     const [showMore, setShowMore] = useState(false);
  return (
      <div className={`${styles.cardContainer} ${showMore && styles.expandedContainer}`} key={id}>
          <p className={styles.span}>{span}</p>
          <div className={styles.imgContainer}>
              <img src={img} alt={span} />
          </div>
          <p className={styles.title} dangerouslySetInnerHTML={{ __html: sanitizer(title), }} />
          {showMore ? <p className={styles.description}>{description}</p> : `${description.substring(0, 0)}`}
            <p className={`${styles.showMore} ${showMore && styles.showLess}`} onClick={() => setShowMore(!showMore)}>
          {showMore ? "Less" : "More "}&nbsp; <img src={arrow} alt="arrow" />
         </p>
         
    </div>
  )
}

export default CardComponent