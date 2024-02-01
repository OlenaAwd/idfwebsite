import { useState, useEffect, FC } from 'react';
import { useSelector } from 'react-redux';
import DonateModal from '../DonateModal';
import SelectComponent from '../SelectComponent';
import ButtonComponent from '../ButtonComponent';
import { diversityHubSelect } from '../../constants/pages';
import { chipStylesSupportEnquire } from '../../constants/styles/chip';
import styles from './AnimatedHubSection.module.scss';
import EnquireImg from '../../assets/EnquireAbout.webp';

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
const AnimatedHubSection: FC<IImgProps> = ({ img, img2, img3 }) => {

  const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );
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

  const handleFindOut = async () => {
    const payload = { hub, firstname, lastname, email, phone };
    await MailService.sendMail(payload);
  };
   const isDisabled =
    !email ||
    !phone ||
    !firstname ||
    !lastname;
  
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
            Join the Journey. Your destination for career and lifestyle growth.
          </h2>
          <p className={styles.participantText}>
The Employment Hub and Business Hub offer the resources and guidance to launch your career or kickstart your business concept.
            <br />
            <br />
           The Activity Hub equips you with the tools and knowledge to enhance your health, social interactions, creative pursuits, and self-reliance.
          </p>
          <DonateModal
            label="Enquire now"
            header="Enquire about Diversity Hubs"
            src={EnquireImg}
            title=""
            text=""
            sx={chipStylesSupportEnquire}
            children={
              <>
                <SelectComponent
                  arr={diversityHubSelect}
                  title="Choose Hub"
                  children={
                    <div className={styles.serviceContainer}>
                      <ButtonComponent
                        onClick={handleFindOut}
                        color="red"
                        classes={styles.findOutBtn}
                        disabled={isDisabled}
                      >
                       I want to find out more
                      </ButtonComponent>
                    </div>
                  }
                />
              </>
            }
          />
        </div>
        <div
          className={`${styles.participantImgContainer} ${
            showImageMain ? styles.visibleImg : ''
          }`}
        >
          <div id="imageDiv3">
            {showImageMain && <LazyImgComponent src={img3} alt="Man working with headphones" />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHubSection;
