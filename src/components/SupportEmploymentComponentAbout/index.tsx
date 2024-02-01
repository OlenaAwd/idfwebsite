import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SupportEmploymentComponentAbout.module.scss';
import supportedEmp1 from '../../assets/supportedEmploymentCard/Picture1.webp';
import supportedEmp2 from '../../assets/supportedEmploymentCard/Picture2.webp';
import supportedEmp3 from '../../assets/supportedEmploymentCard/Picture3.webp';
import supportedEmp4 from '../../assets/supportedEmploymentCard/Picture4.webp';

interface SupportProps {
  children: JSX.Element;
  ourVisionClick?: () => void;
  organisationalClick?: () => void;
}

const SupportEmploymentComponentAbout: FC<SupportProps> = ({
  children,
  organisationalClick,
  ourVisionClick,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.employmentSection}>
      <div className={styles.cardWrapper}>
        <div className={styles.cardsContainer} onClick={ourVisionClick}>
          <div className={styles.imgContainer}>
            <img src={supportedEmp1} alt="card" />
          </div>
          <p className={styles.titleWithoutLink}>Our vision</p>
        </div>
        <div
          className={styles.cardsContainer}
          onClick={() => {
            navigate('/social-enterprise');
            window.scrollTo(0, 0);
          }}
        >
          <div className={styles.imgContainer}>
            <img src={supportedEmp2} alt="card" />
          </div>
          <p className={styles.title}>Social enterprise</p>
        </div>
        <div
          className={styles.cardsContainer}
          onClick={() => {
            navigate('/support');
            window.scrollTo(0, 0);
          }}
        >
          <div className={styles.imgContainer}>
            <img src={supportedEmp3} alt="card" />
          </div>
          <p className={styles.title}>Support services</p>
        </div>
        <div className={styles.cardsContainer} onClick={organisationalClick}>
          <div className={styles.imgContainer}>
            <img src={supportedEmp4} alt="card" />
          </div>
          <p className={styles.titleWithoutLink}>Our organisation</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SupportEmploymentComponentAbout;
