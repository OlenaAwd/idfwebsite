/* eslint-disable array-callback-return */
import React from 'react';
import SelectComponent from '../SelectComponent';
import ButtonComponent from '../ButtonComponent';
import { productSelect, serviceSelect } from '../../constants/pages';
import { DonateCardDataEnquireCards } from '../../constants/cardsData';
import DonateModal from '../DonateModal';
import { chipStylesEnquire } from '../../constants/styles/chip';
import styles from './SocialEnterpriseCards.module.scss';
import img1 from '../../assets/Picture.webp';
import img2 from '../../assets/Picture2.webp';

const SocialEnterpriseCards = () => {
  const handleDonate = () => {
    console.log('handleDonate');
  };
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={img1} alt="" />
        </div>
        <p className={styles.titleCard}>Shop our Social Enterprise</p>
        <p className={styles.descr}>
          <b>Join us in this transformative journey of passion and purpose. </b><br/>At IDF's Social Enterprises, every initiative, every product, every service is infused with heart and purpose. We aren't just about offering solutions; we're about creating experiences, championing inclusivity, and making a difference—one product, one service, one interaction at a time.
        </p>
        {DonateCardDataEnquireCards.map((item, index) => {
          if (index === 1) {
            return (
               <div key={index}>
              <DonateModal
                label="Enquire now"
                header="Shop Our Products"
                src={item.img}
                title={item.title}
                text={item.text}
                sx={chipStylesEnquire}
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
                </div>
             
            );
          }
        })}
      </div>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={img2} alt="t" />
        </div>
        <p className={styles.titleCard}>Shop our business services</p>
        <p className={styles.descr}>
          Our business and corporate services team work with small to large
          organisations in Australia. We have a dedicated team who work across
          Google services, social media, video production and manufacturing,
          talk to one of our business services team to find out more.
        </p>
        {DonateCardDataEnquireCards.map((item, index) => {
          if (index === 0) {
            return (
               <div key={index}>
              <DonateModal
                label="Enquire now"
                header="Become a Business Client"
                src={item.img}
                title={item.title}
                text={item.text}
                sx={chipStylesEnquire}
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
                </div>
            // <div key={index}>
            //   <DonateModal
            //     label="Enquire now"
            //     header="Shop Our Products"
            //     src={item.img}
            //     title={item.title}
            //     text={item.text}
            //     sx={chipStylesEnquire}
            //     children={
            //       <>
            //         {item.label === 'Shop Our Products' && (
            //           <SelectComponent
            //             arr={productSelect}
            //             title="Choose Product Range"
            //             children={
            //               <div className={styles.serviceContainer}>
            //                 <ButtonComponent
            //                   onClick={handleDonate}
            //                   color="white"
            //                   classes={styles.donateNowBtn}
            //                 >
            //                   Enquire now
            //                 </ButtonComponent>
            //                 <ButtonComponent
            //                   onClick={handleDonate}
            //                   color="white"
            //                   classes={styles.donateNowBtnWhite}
            //                 >
            //                   Call our Sales Team
            //                 </ButtonComponent>
            //               </div>
            //             }
            //           />
            //         )}
            //       </>
            //     }
            //     />
            //     </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SocialEnterpriseCards;
