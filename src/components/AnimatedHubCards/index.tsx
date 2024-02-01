import { useState, useEffect, FC } from 'react';
import DOMPurify from 'dompurify';
import { NavLink } from 'react-router-dom';
import styles from './AnimatedHubCards.module.scss';
import { ICareerCard } from '../../types/cardType';
import { careerCardsData } from '../../constants/cardsData';
import SliderHubSectionSupport from '../../pages/ParticipantStories/SliderHubSectionSupport';

interface IImgProps {
  img?: string;
  img2?: string;
  arr: ICareerCard[];
}
const AnimatedHubCards: FC<IImgProps> = ({ img, img2, arr }) => {
  const [showImage, setShowImage] = useState(false);
  const [cards, setCards] = useState(false);

  useEffect(() => {
    const showImageWithTimeout = () => {
      setShowImage(true);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(showImageWithTimeout, 1000);
          return () => clearTimeout(timeoutId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const targetElement = document.getElementById('imageDivFirst');
    const targetElement2 = document.getElementById('imageDivLast');
    const targetElement3 = document.getElementById('cardsDiv');

    if (targetElement) {
      observer.observe(targetElement);
    }
    if (targetElement2) {
      observer.observe(targetElement2);
    }
    if (targetElement3) {
      observer.observe(targetElement3);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const showImageWithTimeout = () => {
      setCards(true);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timeoutId = setTimeout(showImageWithTimeout, 2000);
          return () => clearTimeout(timeoutId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const targetElement3 = document.getElementById('cardsDiv');

    if (targetElement3) {
      observer.observe(targetElement3);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  const sanitizer = DOMPurify.sanitize;

  return (
    <section className={styles.participantServicesSection}>
      <div
        className={`${styles.appearingImgContainerLeft} ${
          showImage ? styles.visible : ''
        }`}
      >
        <div id="imageDivFirst">
          {showImage && <img src={img} alt="Left Stripe" />}
        </div>
      </div>
      <div
        className={`${styles.appearingImgContainerRight} ${
          showImage ? styles.visible : ''
        }`}
      >
        <div id="imageDivLast">
          {showImage && <img src={img2} alt="Right Stripe" />}
        </div>
      </div>
      <div className={styles.participantsWrapper}>
        <div className={styles.participantTextContainer}>
          <h2 className={styles.participantTitle}>
           Whether you're looking to find a new career, start a business, get fit, or connect with friends, our Diversity Hubs offer something for everyone
          </h2>
        </div>
        <div className={styles.cardsWrapper}>
          {arr.map(card => (
            <div
              className={`${cards ? styles.visibleCards : ''}`}
              key={card.id}
            >
              <div id="cardsDiv">
                {cards && (
                  <div className={styles.card} key={card.id}>
                    <img src={card.img} alt="card" />
                    <p className={styles.cardTitle}>{card.title}</p>
                    <p
                      className={styles.cardText}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(card.description),
                      }}
                    />
                    <NavLink to={`${card.link}`} className={styles.link}>
                      Learn More
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
         <SliderHubSectionSupport cards={careerCardsData} />
      </div>
    </section>
  );
};

export default AnimatedHubCards;
