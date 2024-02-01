import React from 'react';

import SolutionCardModal from '../SolutionCardModal';
import ModalNeurodiversity from '../ModalNeurodiversity';
import styles from "./SolutionCardsComponent.module.scss";
import efortlessImg from "../../assets/efortlessListings.webp";
import LazyImgComponent from '../LazyImgComponent';

const SolutionCardsComponent = () => {

  return (
 <div className={styles.cardsContainer}>
           <div className={`${styles.cardContainer}`}  >
                <div className={styles.body}>
                    <p className={styles.cardTitle}>EFFORTLESS LISTINGS</p>
                    <h6 className={styles.cardHeader}>Listing Updates with a Single Touch</h6>
                    <p className={styles.cardDescription}>By connecting* just once to your CRM, our platform ensures that whenever you update a new listing, every solution in our network updates automatically — it's digital magic at work.</p>
              </div>
              <ModalNeurodiversity
                  stylesText={styles.stylesLearnFirstModal}
        btn="Learn More"
        children={
              <div className={styles.modalContainer}>
                <h2 className={styles.modalTitle}>Effortless Listing Updates Across All Platforms</h2>
                <div className={styles.contentWrapper}>
                  <div className={styles.leftSide}>
                    <p className={styles.leftSideText}>
                      In the fast-paced world of real estate, it's essential to ensure potential buyers and renters see your listings the moment they're available. With IDF's cutting-edge technology, you're one step ahead, always.
                        </p>
                        <b>Why It's a Game Changer</b><br />
                        <ul>
                            <li>
                                <p className={styles.listTitle}> 1. Seamless Integration with Your CRM</p>
                                <p className={styles.listText}>By establishing a one-time connection with your CRM, you set the stage for a streamlined update process.</p>
                            </li>
                             <li>
                                <p className={styles.listTitle}>2. Real-Time Updates</p>
                                <p className={styles.listText}>The moment you enter a new listing or make changes to an existing one, IDF ensures it's instantly reflected across every digital solution in our <a href="/expansive-network" className={styles.innerLink}>extensive network</a>. No more manual updates. No more missed opportunities.</p>
                            </li>
                               <li>
                                <p className={styles.listTitle}>3. The Power of Digital Magic</p>
                                <p className={styles.listText}>It's not just about automation; it's about redefining efficiency. Our platform works tirelessly in the background, ensuring that your listings are up-to-date and reach the widest audience possible.</p>
                            </li>
                               <li>
                                <p className={styles.listTitle}>4. Enhanced Visibility and Engagement</p>
                                <p className={styles.listText}>With automatic updates, your listings always remain fresh, relevant, and easily discoverable, increasing the chances of quicker turnovers and successful deals.</p>
                            </li>
                            <li>
                                <p className={styles.listTitle}>5. Time is Money</p>
                                <p className={styles.listText}>Save precious hours and focus on what you do best - selling properties and engaging with clients. Let IDF handle the digital heavy lifting.</p>
                            </li>
                             <li>
                                <p className={styles.listTitle}>6. Key Takeaway</p>
                                <p className={styles.listText}>In the competitive landscape of real estate, staying ahead is crucial. With IDF's automated listing update system, you're not just keeping pace; you're setting the industry standard. Connect with IDF today, embrace the future, and watch your listings shine brighter than ever before.</p>
                            </li>
                        </ul>
                        
                  </div>
                  <div className={styles.rightSide}>
                    <LazyImgComponent src={efortlessImg} alt="person" />
                  </div>
                </div>
              </div>
                
            }
              />
          </div>
           <div className={`${styles.cardContainer}`}  >
                <div className={styles.body}>
                    <p className={styles.cardTitle}>BE SEEN</p>
                    <h6 className={styles.cardHeader}>Automated Social Posting</h6>
                    <p className={styles.cardDescription}>Our platform doesn't just stop at updating listings. It also detects and auto-posts* your new properties across essential platforms - Google, Facebook, Instagram, Apple, and LinkedIn. A wider net means a larger catch of potential clients.</p>
              </div>
              <SolutionCardModal classes={styles.additionalModal} children={
            <div className={styles.container}>
                <div className={styles.imgContainerModal}>
                <p className={styles.cardTitleModal}>Make your menu searchable on Apple Maps and Google</p>
              </div>
                      <p className={styles.cardTextModal}>Ensure diners always have access to your latest culinary delights by keeping your menu current on Google and Apple Maps.</p>
                      <b>Why It Matters</b>
                      <p className={styles.cardTextModal}>In today's digital age, a majority of diners look up menus online before deciding where to eat. An outdated menu can lead to missed opportunities, while a current menu can draw in diners excited about your latest offerings.</p>
            </div>                
        }
      
            />
          </div>
           <div className={`${styles.cardContainer}`}  >
                <div className={styles.body}>
                    <p className={styles.cardTitle}>ENGAGE MORE</p>
                    <h6 className={styles.cardHeader}>Chatbots for Seamless Queries</h6>
                    <p className={styles.cardDescription}>Potential buyers often have immediate questions. Our integrated chatbots* on Google, Facebook, and Instagram ensure these queries get timely responses, elevating the customer's experience. Keep your listings in the spotlight.</p>
              </div>
             <SolutionCardModal classes={styles.additionalModal} children={
            <div className={styles.container}>
                <div className={styles.imgContainerModal}>
                <p className={styles.cardTitleModal}>Use Chat Bots to talk to your customers</p>
              </div>
                      <b> Interactive Chatbots</b>
                      <p className={styles.cardTextModal}>Engage with potential diners promptly and efficiently with chatbots on Google, Facebook, and Instagram.</p>
                      <b>Why It Matters</b>
                       <p className={styles.cardTextModal}>In an era of instant gratification, customers expect quick responses. Chatbots not only provide instant answers to common questions but also free up your staff's time, leading to enhanced customer satisfaction and loyalty.</p>
            </div>                
        }
      
            />
          </div>
  </div>
      
  )
}

export default SolutionCardsComponent