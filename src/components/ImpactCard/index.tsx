import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IImpactCard } from '../../types/cardType';
import styles from './ImpactCard.module.scss';
import ModalParticipantCard from '../ModalParticipantCard';
import ModalSchoolLeavers from '../ModalSchoolLeavers';

const ImpactCard: FC<IImpactCard> = ({ title, img,  link , modalTitles}) => {
   const { pathname } = useLocation();
  return (
      <div className={styles.cardContainer}>
          <div className={styles.imgContainer} style={{
              backgroundImage: `url(${img})`
          }}>
        
      </div>
      <div className={styles.textContainer}>
        <p className={styles.cardTitle}>{title}</p>
              {pathname === "/" ?

                  (<div className={styles.modalContainer}>
                      <ModalParticipantCard btnTitle='Learn More >' title={title} />
                      <ModalSchoolLeavers btnTitle='School Leavers >' title={title} />
                  </div>) :
                    <button
                    className={`${pathname === "/advocacy" ? styles.btnAdvocacy : styles.btn}`}
                      onClick={() => {
                          window.location.href = `${link}`;
                    }}
                  >
                    Learn More
                  </button>
                  
        }
      </div>
    </div>
  );
};

export default ImpactCard;
