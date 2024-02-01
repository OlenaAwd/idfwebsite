import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ISupportedEmploymentCard } from '../../types/cardType';
import styles from './SupportEmploymentComponent.module.scss';
import ModalSupport from '../ModalSupport';

interface SupportProps {
  items: ISupportedEmploymentCard[];
  children: JSX.Element;
  onClick?: () => void;
  ourVisionClick?: () => void;
  ourHampersClick?:() => void;
}

const SupportEmploymentComponent: FC<SupportProps> = ({
  items,
  children,
  onClick,
  ourVisionClick,
  ourHampersClick
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.employmentSection}>
      <div className={styles.cardWrapper}>
        {pathname === '/support' && (
          <>
            <ModalSupport btnProp2="" />
          </>
        )}
        {pathname === '/business-services' ?
          items.map((card, index) => (
          <div key={card.id}>
            {card.id ===10 && (
              <div className={styles.cardsContainer} onClick={onClick}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" width="auto" height="auto"/>
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
              )}
              {card.id ===11 && (
              <div className={styles.cardsContainer} onClick={ourVisionClick}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
              )}
              {card.id ===12 && (
              <div className={styles.cardsContainer} onClick={ourHampersClick}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
            )}
            {card?.link !== undefined && card.id !== 10 && card.id !== 11 && card.id !== 12 &&(
              <div
                className={styles.cardsContainer}
                key={card.id}
                onClick={() => {
                  navigate(`${card.link}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.title}>{card.title}</p>
              </div>
            )}
            {pathname !== '/business-services' && index === 3 && (
              <div className={styles.cardsContainer}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
            )}
          </div>
        )) : items.map((card, index) => (
          <div key={card.id}>
            {card.id ===10 && (
              <div className={styles.cardsContainer} onClick={onClick}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
            )}
            {card?.link !== undefined && card.id !== 10 && (
              <div
                className={styles.cardsContainer}
                key={card.id}
                onClick={() => {
                  navigate(`${card.link}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.title}>{card.title}</p>
              </div>
            )}
            {index === 3 && (
              <div className={styles.cardsContainer}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
            )}
          </div>
        ))}

        {/* {items.map((card, index) => (
          <div key={card.id}>
            {index === 0 && (
              <div className={styles.cardsContainer} onClick={onClick}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
            )}
            {card?.link !== undefined && index !== 0 && (
              <div
                className={styles.cardsContainer}
                key={card.id}
                onClick={() => {
                  navigate(`${card.link}`);
                  window.scrollTo(0, 0);
                }}
              >
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.title}>{card.title}</p>
              </div>
            )}
            {index === 3 && (
              <div className={styles.cardsContainer}>
                <div className={styles.imgContainer}>
                  <img src={card.img} alt="card" />
                </div>
                <p className={styles.titleWithoutLink}>{card.title}</p>
              </div>
            )}
          </div>
        ))} */}
      </div>
      {children}
    </div>
  );
};

export default SupportEmploymentComponent;
