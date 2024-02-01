import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import { IVideoCardsProps } from '../../types/cardType';
import styles from './VideoCards.module.scss';

const VideoCards: FC<IVideoCardsProps> = ({ url, light, title, id, src }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.player}>
        <img src={src} alt="" />
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
    </div>
  );
};

export default VideoCards;
