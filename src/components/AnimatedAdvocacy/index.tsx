import { useState, useEffect, FC } from 'react';
import {
  chipStylesAdvocacy,
  chipStylesAdvocacyEnquire,
  chipStylesEmploymentHub,
  chipStylesEmploymentHubEnquire,
} from '../../constants/styles/chip';
import {
  ActivityHubModalData,
  AdvocacyHubModalDataEnquire,
} from '../../constants/cardsData';
import styles from './AnimatedAdvocacy.module.scss';
import advocacyImg from '../../assets/advocacyMan.webp';
import CheckOurProgramModal from '../CheckOurProgramModal';
import AdvocacyModalEnquire from '../AdvocacyModalEnquire';

interface IImgProps {
  img: string;
  img2: string;
  img3?: string;
}
const AnimatedAdvocacy: FC<IImgProps> = ({ img, img2, img3 }) => {
  const [showImage, setShowImage] = useState(false);
  const [showImageMain, setShowImageMain] = useState(false);

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

    const targetElement = document.getElementById('imageDiv');
    const targetElement2 = document.getElementById('imageDiv2');
    const targetElement3 = document.getElementById('imageDiv3');
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
      setShowImageMain(true);
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

    const targetElement3 = document.getElementById('imageDiv3');

    if (targetElement3) {
      observer.observe(targetElement3);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.participantServicesSection}>
      <div
        className={`${styles.appearingImgContainerLeft} ${
          showImage ? styles.visible : ''
        }`}
      >
        <div id="imageDiv">
          {showImage && <img src={img} alt="Left Stripe" />}
        </div>
      </div>
      <div
        className={`${styles.appearingImgContainerRight} ${
          showImage ? styles.visible : ''
        }`}
      >
        <div id="imageDiv2">
          {showImage && <img src={img2} alt="Right Stripe" />}
        </div>
      </div>

      <div className={styles.participantsWrapper}>
        <div className={styles.participantTextContainer}>
          <h2 className={styles.participantTitle}>
            Supported employment. Neurodiverse organisations.
          </h2>
          <p className={styles.participantText}>
            We create supported employment for neurodiverse people.
            <br />
            <br />
            We share our knowledge and skills enabling neurotypical
            organisations make the transformation to neurodiversity.
          </p>
          <div className={styles.btnModalContainer}>
            {ActivityHubModalData.map(item => (
              <CheckOurProgramModal
                key={item.id}
                label={item.label}
                src={item.img}
                text={item.text}
                sx={chipStylesAdvocacy}
              />
            ))}
            {AdvocacyHubModalDataEnquire.map(item => (
              <AdvocacyModalEnquire
                key={item.id}
                label={item.label}
              
                text={item.text}
                sx={chipStylesAdvocacyEnquire}
              />
            ))}
          </div>
        </div>

        <div
          className={`${styles.participantImgContainer} ${
            showImageMain ? styles.visibleImg : ''
          }`}
        >
          <div id="imageDiv3">
            {showImageMain && <img src={img3} alt="Woman working on a laptop" />}
          </div>
          <div className={styles.btnModalContainerResponsive}>
            {ActivityHubModalData.map(item => (
              <CheckOurProgramModal
                key={item.id}
                label={item.label}
                src={item.img}
                text={item.text}
                sx={chipStylesEmploymentHub}
              />
            ))}
            {AdvocacyHubModalDataEnquire.map(item => (
              <AdvocacyModalEnquire
                key={item.id}
                label={item.label}
                src={item.img}
                text={item.text}
                sx={chipStylesEmploymentHubEnquire}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.workDifferently}>
        <div className={styles.advocacyManImgContainer}>
          <img src={advocacyImg} alt="Man working in neurodiversity" />
        </div>
        <div className={styles.advocacyManTextContainer}>
          <h3 className={styles.advocacyManTitle}>
            Work differently to create a difference. Neurodiverse talent.
          </h3>
          <div className={styles.advocacyManImgContainerResponsive}>
            <img src={advocacyImg} alt="person" />
          </div>
          <p className={styles.advocacyManText}>
            Just as nature intended, neurodiversity works within organisations
            to increase its value and resilience.
            <br />
            <br /> Neurodiverse organisations achieve more because they tap into
            the innate abilities found in the different ways our brains and
            bodies work.
            <br />
            <br /> Neurodiverse organisations have a distinct advantage over
            their neuro typical peers, they are more multi-disciplinary, complex
            problem solvers and engaged.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAdvocacy;
