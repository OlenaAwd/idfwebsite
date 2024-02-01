import { useState, useEffect, FC } from 'react';
import {  useSelector } from 'react-redux';
import {chipStylesEmploymentHubEnquire,
  chipStylesEsportsEnquire,
} from '../../constants/styles/chip';
import {AdvocacyHubModalDataEnquire,
  EsportsbModalDataEnquire,
} from '../../constants/cardsData';
import styles from './AnimatedEsports.module.scss';
import virtualArena from '../../assets/esports/virtualArena.webp';
import AdvocacyModalEnquire from '../AdvocacyModalEnquire';
import ModalForm from '../ModalForm';
import ButtonComponent from '../ButtonComponent';
import HubModalEnquire from '../HubModalEnquire';
import {
  selectForm,  
} from '../../slices/form'; 
import MailService from '../../services/MailService';
import LazyImgComponent from '../LazyImgComponent';
interface IImgProps {
  img: string;
  img2: string;
  img3?: string;
}
const AnimatedEsports: FC<IImgProps> = ({ img, img2, img3 }) => {
  const [showImage, setShowImage] = useState(false);
  const [showImageMain, setShowImageMain] = useState(false);
  
  const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );
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

  const handleDonate = async () => {
    const payload = { hub, firstname, lastname, email, phone };
    await MailService.sendMail(payload);
  };

  return (
    <section className={styles.participantServicesSection}>
      <div
        className={`${styles.appearingImgContainerLeft} ${
          showImage ? styles.visible : ''
        }`}
      >
        <div id="imageDiv">
          {showImage && <LazyImgComponent src={img} alt="Left Stripe" />}
        </div>
      </div>
      <div
        className={`${styles.appearingImgContainerRight} ${
          showImage ? styles.visible : ''
        }`}
      >
        <div id="imageDiv2">
          {showImage && <LazyImgComponent src={img2} alt="Right Stripe" />}
        </div>
      </div>

      <div className={styles.participantsWrapper}>
        <div className={styles.participantTextContainer}>
          <h2 className={styles.participantTitle}>
            Gaming beyond boundaries
          </h2>
          <p className={styles.participantText}>
           IDF E-Sports Initiative
            <br />
            <br />
            At the Intellectual Disability Foundation (IDF), we believe in the limitless potential of every individual, regardless of their physical or intellectual abilities.
          </p>
          <div className={styles.btnModalContainer}>
            <a href='https://www.facebook.com/IDFofStGeorge' target="_blank" className={styles.follow} rel="noreferrer">Follow Us</a>
             {EsportsbModalDataEnquire.map(item => (
                  <HubModalEnquire
                   key={item.id}
                    label={item.label}
                    src={item.img}
                    text={item.text}
                    sx={chipStylesEsportsEnquire}
                    title={`${item.title}`}
                    header="I want to know more about E-Sports careers."
                    children={
                      <>
                        {item.label === 'Enquire Now' &&
                          <>
                          <h2 className={styles.enquireTitle}>Tell me more about starting an e-sports career</h2>
                          <ModalForm
                            children={
                            <div className={styles.serviceContainer}>
                            <ButtonComponent
                              onClick={handleDonate}
                              color="red"
                              classes={styles.donateNowBtnEnquire}
                            >
                            Contact me
                            </ButtonComponent>
                              </div>
                            }
                          />
                        </>
                        }
                      </>
                    }
                  />
                ))}
          </div>
        </div>

        <div
          className={`${styles.participantImgContainer} ${
            showImageMain ? styles.visibleImg : ''
          }`}
        >
          <div id="imageDiv3" className={styles.gamingTeamContainer}>
            {showImageMain && <LazyImgComponent src={img3} alt="Gaming team enjoying their playtime" />}
          </div>
          <div className={styles.btnModalContainerResponsive}>
          <a href='https://www.facebook.com/IDFofStGeorge' target="_blank" className={styles.follow} rel="noreferrer">Follow Us</a>
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
          <LazyImgComponent src={virtualArena} alt="Man gaming in a virtual arena" />
        </div>
        <div className={styles.advocacyManTextContainer}>
          <h3 className={styles.advocacyManTitle}>
           Equality in the <br/>​Virtual Arena​
          </h3>
          <div className={styles.advocacyManImgContainerResponsive}>
            <LazyImgComponent src={virtualArena} alt="virtual Arena" />
          </div>
          <p className={styles.advocacyManText}>
           The world of e-sports is expansive and inclusive. In the virtual gaming arenas, players are judged not by their physical abilities but by their strategy, skill, and teamwork. This presents an unparalleled opportunity for individuals with disabilities to showcase their talents on a global stage.​
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnimatedEsports;
