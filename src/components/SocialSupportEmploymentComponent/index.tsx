import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { productSelect, serviceSelect } from '../../constants/pages';
import SelectComponent from '../SelectComponent';
import ButtonComponent from '../ButtonComponent';
import {
  SocialEnterpriseServicesData,
  SocialServicesData,
} from '../../constants/cardsData';
import styles from './SocialSupportEmploymentComponent.module.scss';
import img1 from '../../assets/socialEntDynamic/Picture1.webp';
import img2 from '../../assets/socialEntDynamic/Picture2.webp';
import img3 from '../../assets/socialEntDynamic/Picture3.webp';
import img4 from '../../assets/socialEntDynamic/IDF Advocacy.webp';

import SocialEnterpriseServicesModal from '../SocialEnterpriseServicesModal';

interface SupportProps {
  children: JSX.Element;
  onClick?: () => void;
}

const SocialSupportEmploymentComponent: FC<SupportProps> = ({
  children,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleDonate = () => {
    console.log('handleDonate');
  };

  return (
    <div className={styles.employmentSection}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardsContainer} onClick={onClick}>
          <div className={styles.imgContainer}>
            <img src={img1} alt="card" />
          </div>
          <p className={styles.title}>Our Enterprise</p>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.imgContainer}>
            <img src={img2} alt="card" />
          </div>
          {SocialEnterpriseServicesData.map(item => (
            <SocialEnterpriseServicesModal
              key={item.id}
              header={item.label}
              src={item.img}
              title={item.title}
              text={item.text}
              btn="Shop Products"
              children={
                <>
                  {item.label === 'Shop Our Products' && (
                    <SelectComponent
                      arr={productSelect}
                      title="Choose Product Range"
                      children={
                        <div className={styles.serviceContainer}>
                          <ButtonComponent
                            onClick={handleDonate}
                            color="red"
                            classes={styles.donateNowBtn}
                          >
                            Enquire now
                          </ButtonComponent>
                          <ButtonComponent
                            onClick={handleDonate}
                            color="white"
                            classes={styles.donateNowBtnWhite}
                          >
                            Call our Sales Team
                          </ButtonComponent>
                        </div>
                      }
                    />
                  )}
                </>
              }
            />
          ))}
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.imgContainer}>
            <img src={img3} alt="card" />
          </div>
          {SocialServicesData.map(item => (
            <SocialEnterpriseServicesModal
              key={item.id}
              header={item.label}
              src={item.img}
              title={item.title}
              text={item.text}
              btn="Shop Services"
              children={
                <>
                  {item.label === 'Become a Business Client' && (
                    <SelectComponent
                      arr={serviceSelect}
                      title="Choose Service"
                      children={
                        <div className={styles.serviceContainer}>
                          <ButtonComponent
                            onClick={handleDonate}
                            color="red"
                            classes={styles.donateNowBtn}
                          >
                            Enquire Now
                          </ButtonComponent>
                          <ButtonComponent
                            onClick={handleDonate}
                            color="white"
                            classes={styles.donateNowBtnWhite}
                          >
                            Call our Sales Team
                          </ButtonComponent>
                        </div>
                      }
                    />
                  )}
                </>
              }
            />
          ))}
        </div>
        <div
          className={styles.cardsContainer}
          onClick={() => {
            navigate('/advocacy');
          }}
        >
          <div className={styles.imgContainer}>
            <img src={img4} alt="card" />
          </div>
          <p className={styles.title}>Advocacy</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SocialSupportEmploymentComponent;
