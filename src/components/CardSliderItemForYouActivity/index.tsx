import { FC } from 'react';
import styles from './CardSliderItemForYouActivity.module.scss';
import { IPurposeCard } from '../../types/cardType';

const CardSliderItemForYouActivity: FC<IPurposeCard> = ({
  img,
  title,
  description,
  id,
  classes,
}) => {
  return (
    <div className={`${styles.cardContainer} ${classes && classes}`} key={id}>
      <div className={styles.imgContainer}>
        <img src={img} alt="img" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardText}>{description}</p>
      </div>
    </div>
  );
};

export default CardSliderItemForYouActivity;
