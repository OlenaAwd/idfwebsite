import { FC } from 'react';
import { IPurposeCard } from '../../types/cardType';
import styles from './EmploymentCareerHubCard.module.scss';
import { useLocation } from 'react-router-dom';
import ThreeWaysModal from '../3waysModal';
import LazyImgComponent from '../LazyImgComponent';

const EmploymentCareerHubCard: FC<IPurposeCard> = ({
  title,
  img,
  description,
  id,
}) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.cardContainer} key={id}>
      <div className={styles.imgContainer}>
        <LazyImgComponent src={img} alt="img" />
      </div>
      <div className={styles.body}>
         <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardText}>{description}</p>
</div>
     
      {pathname === "/employment-hub" ? (<ThreeWaysModal children={
        <>
          {title === "On The Job Training" && (
            
            <div className={styles.container}>
                <div className={styles.imgContainerModal}>
                <LazyImgComponent src={img} alt="img" />&nbsp;
                <p className={styles.cardTitleModal}>{title}</p>
              </div>
              <p className={styles.cardTextModal}>Our training is specifically tailored to accommodate and leverage individual strengths, ensuring a supportive and inclusive environment. This approach not only fosters skill development and confidence but also promotes a deeper understanding and appreciation within the broader workforce. By integrating unique learning styles and requirements, on-the-job training in such settings empowers individuals to achieve their career aspirations while also enriching the overall work culture</p>
            </div>                
          )}
          {title === "Wellness Brand" && (
            <div className={styles.container}>
                <div className={styles.imgContainerModal}>
                <LazyImgComponent src={img} alt="img" />&nbsp;
                <p className={styles.cardTitleModal}>{title}</p>
              </div>
              <p className={styles.cardTextModal}>Dive into the dynamic world of manufacturing, marketing, and distribution with our unique wellness brand. Powered by a not-for-profit disability organisation, we're more than just a brand; we're a mission. As we expand, we're seeking passionate individuals who are eager to intertwine social responsibility with every creation. Be part of a team where quality meets a cause. Join now and shape a consumer brand with a difference!</p>
            </div> 
          )}
           {title === "Job Variety" && (
            <div className={styles.container}>
                <div className={styles.imgContainerModal}>
                <LazyImgComponent src={img} alt="img" />&nbsp;
                <p className={styles.cardTitleModal}>{title}</p>
              </div>
              <p className={styles.cardTextModal}>Are you looking for a role that’s more than just a job? At our organisation, we pride ourselves on offering a myriad of exciting roles tailored for individuals with intellectual disabilities. From packing for international giants, crafting wellness products, spearheading social media campaigns, to diving into the world of esports — there's something for everyone. All of this, in an environment that prioritises safety and inclusivity. If you're eager to embrace diverse opportunities and thrive, we'd love to hear from you! </p>
            </div> 
          )}
        </>
      }/> ): null}
    </div>
  );
};

export default EmploymentCareerHubCard;
