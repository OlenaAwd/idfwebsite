import { FC } from 'react';
import ModalParticipantCard from '../ModalParticipantCard';
import { IParticipantCardProps } from '../../types/cardType';
import styles from './ParticipantCard.module.scss';

const ParticipantCard: FC<IParticipantCardProps> = ({
  src,
  title,
  description,
}) => {

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={src} alt={title} />
      </div>

      <div className={styles.textContainer}>
        <h6 className={styles.cardTitle}>{title}</h6>
        <p className={styles.cardDescription}>{description}</p>
        
        <ModalParticipantCard btnTitle='Read More' title={title}/>
      </div>
    </div>
  );
};

export default ParticipantCard;
