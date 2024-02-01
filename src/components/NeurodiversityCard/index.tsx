import React, { FC } from 'react';
import {  useSelector } from 'react-redux';
import ButtonComponent from '../ButtonComponent';
import SelectComponent from '../SelectComponent';
import ModalNeurodiversity from '../ModalNeurodiversity';
import { interestSelect } from '../../constants/pages';
import { IPurposeCard } from '../../types/cardType';
import styles from './NeurodiversityCard.module.scss';
import modal1 from '../../assets/modal1.webp';
import modal2 from '../../assets/modal2.webp';
import modal3 from '../../assets/modal3.webp';
import modal4 from '../../assets/modal4.webp';
import modal4Mobile from '../../assets/modal4Mobile.webp';
import SliderResponsiveModal from '../SliderResponsiveModal';
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';

import { selectForm, 
} from '../../slices/form'; 
import MailService from '../../services/MailService';
import LazyImgComponent from '../LazyImgComponent';
const NeurodiversityCard: FC<IPurposeCard> = ({
  title,
  img,
  description,
  id,
  customBody
}) => {
  const { hub, firstname,lastname,email,phone,} = useSelector(
    selectForm
  );
  const handleDonate = async () => {
    await MailService.sendMail({hub, firstname,lastname,email,phone});
  };
  const { pathname } = useLocation();
      const sanitizer = DOMPurify.sanitize;
  
  return (
    <div className={`${styles.card} ${customBody && customBody}`} key={id}>
      <div className={styles.imgContainer}>
        <LazyImgComponent src={img} alt="img" />
      </div>
      <div className={`${styles.cardBody} `}>
        <p className={styles.cardTitle}>{title}</p>
         <p
                    className={styles.cardText}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(description),
                    }}
                  />
      </div>

      {pathname === "/e-sports" ? null :  (
         <ModalNeurodiversity
        btn="Find Out More"
        classes={`${
          (id === 1 || id === 4 || id === 5 || id === 6) && styles.modal1
        }  ${id === 2 && styles.modal2}`}
        children={
          <>
            {id === 1 && (
              <div className={styles.modalContainer}>
                <h2 className={styles.modalTitle}>What is neurodiversity?</h2>
                <div className={styles.contentWrapper}>
                  <div className={styles.leftSide}>
                    <h3 className={styles.leftSideTitle}>
                      Many people see their neurodiversity as a strength rather
                      than a disability.
                    </h3>
                    <p className={styles.leftSideText}>
                      Neurodiversity includes a number of diagnoses affecting
                      between 15 to 20% of Australians, which includes but is
                      not limited to:
                      <br />
                      <br /> Addiction Autism spectrum disorder.
                      <br /> Attention-deficit hyperactivity disorder (ADHD).
                      <br /> Down syndrome.
                      <br /> Dyscalculia (difficulty with math).
                      <br /> Dysgraphia (difficulty with writing).
                      <br /> Dyslexia (difficulty with reading).
                      <br /> Dyspraxia (difficulty with coordination).
                      <br />
                    </p>
                  </div>
                  <div className={styles.rightSide}>
                    <LazyImgComponent src={modal1} alt="person" />
                  </div>
                </div>
                <p className={styles.leftSideTextAdditional}>
                  Intellectual disabilities <br /> Mental health conditions like
                  bipolar disorder, obsessive-compulsive disorder and more.{' '}
                  <br />
                  Prader-Willi syndrome. <br /> Sensory processing disorders.{' '}
                  <br />
                  Social anxiety (a specific type of anxiety disorder). <br />{' '}
                  Tourette syndrome. <br /> Trauma Williams syndrome.
                </p>
              </div>
            )}
            {id === 2 && (
              <div className={styles.modalContainer}>
                <h2 className={styles.modalTitle}>
                  What is a neurodiverse organisation?
                </h2>
                <div className={styles.contentWrapper}>
                  <div className={styles.leftSideSecond}>
                    <h3 className={styles.leftSideTitleSecond}>
                      Neurodiverse organisations manage different abilities of
                      ND talents as assets.
                    </h3>
                    <p className={styles.leftSideText}>
                    Organisations that recognise and manage Neurodiverse talent are high performers.
                      <br />
                      <br /> US <b>Research</b> shows up to 30% of tertiary
                      educated white collar workers have some disabilities, but
                      only 3% shared this with employers.
                      <br />
                      <br />
                      Organisations that recognize and manage ND are high
                      performers. Just some of the gifts neurodiverse talent
                      have include:
                      <br /> <b>Autism Spectrum:</b> technical abilities, high
                      concentration, reliable
                      <br /> <b>Dyslexia:</b> entrepreneurial skills, spatial
                      intelligence, 3-D thinking, mechanical skills
                      <br />
                      <b>ADHD:</b> creative, high energy, hyperfocus, problem
                      solvers
                    </p>
                  </div>
                  <div className={styles.rightSide}>
                    <LazyImgComponent src={modal2} alt="person" />
                  </div>
                </div>
              </div>
            )}

            {id === 3 && (
              <div className={styles.modalContainer}>
                <h2 className={styles.modalTitle}>
                  How does neurodiversity make a difference?
                </h2>
                <div className={styles.contentWrapper}>
                  <div className={styles.leftSideSecond}>
                    <h3 className={styles.leftSideTitleSecond}>
                      Neurodiverse organisations manage different abilities of
                      ND talents as assets.
                    </h3>
                    <p className={styles.leftSideText}>
                      Information and technology, manufacturing are sectors that
                      have been traditional employers of neurodiverse talent,
                      with SAP, Westpac, the Australian government and Microsoft
                      standing out from the crowd.
                      <br />
                      <br />
                      Companies such as SAP have a commitment to have
                      neurodiverse talent ratios on par with the greater
                      population. Some organisations such as Ultranauts and our
                      own IDF Foundations social enterprise take that ratio of
                      ND employees to over 80%.
                      <br />
                      <br /> When well managed the results are outstanding, here
                      are some of the KPI’s where ND’s outperforms NT’s in the
                      same roles:
                      <li>Higher employee engagement</li>
                      <li>Longer employee tenure</li>
                      <li>Greater productivity</li>
                      <li>Improved product and service quality</li>
                      <li>Improved complex problem solving</li>
                      Talk to one of IDF’s ND organisational development
                      specialists about how ND can transform your business.
                    </p>
                  </div>
                  <div className={styles.rightSide}>
                    <LazyImgComponent src={modal3} alt="person" />
                  </div>
                </div>
              </div>
            )}
            {(id === 4 || id === 5 || id === 6) && (
              <div className={styles.modalContainer}>
                <SliderResponsiveModal src={modal4Mobile} />

                <div className={styles.responsiveWrapper}>
                  <h2 className={styles.modalTitle}>
                    Work with us to transform into a ND organisation.
                  </h2>
                  <div className={styles.contentWrapper}>
                    <div className={styles.leftSideWrapper}>
                      <div className={styles.imgCont}>
                        <LazyImgComponent src={modal4} alt="person" />
                      </div>
                      {/* <div className={styles.textWrapper}>
                        <h3 className={styles.leftSideHeader}>
                          Our coaching and partnering services can fast track
                          your ND adoption.
                        </h3>
                        <p className={styles.leftSideContent}>
                          We work with business and government agencies large
                          and small. We can custom build a ND team for your
                          organisation. We work with some of Australia’a leading
                          organisations including Kelloggs and Lindt.
                        </p>
                      </div> */}
                    </div>
                    <div className={styles.rightSideWrapper}>
                      <SelectComponent
                        arr={interestSelect}
                        title="I am interested in"
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
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        }
      />
      ) }
     
    </div>
  );
};

export default NeurodiversityCard;
