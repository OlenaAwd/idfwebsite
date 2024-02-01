import React, { FC, useState } from 'react';
import DOMPurify from 'dompurify';
import { IServicesProps } from '../../types/cardType';
import styles from './CardHover.module.scss';

interface IPropsCards {
  arr: IServicesProps[];
}

const CardHover: FC<IPropsCards> = ({ arr }) => {
  const [isHovered, setIsHovered] = useState(false);
  const sanitizer = DOMPurify.sanitize;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className={styles.cardsServices}>
      {arr.slice(0, 6).map(item => (
        <div
          className={`${styles.sliderCardServices} `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={item.id}
        >
              <div className={styles.wrapperCard} style={{ backgroundImage: 'url("' + item.src + '")' }}>
            <div className={styles.imgTextContainer}>
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizer(item.span),
                }}
              />
            </div>
          </div>

          <div
            className={`${
              isHovered === false
                ? styles.cardTextHoverHide
                : styles.cardTextHoverShow
            }`}
          >
            <span> {item.hoverText}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardHover;
