import React, { useState, FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import OurPeopleSlider from '../OurPeopleSlider';
import {
  cardsCeoData,
  cardsManagementData
} from '../../constants/cardsData';
import { boxModalStyles } from '../../constants/styles/boxModal';
import { IModalProps } from '../../types/modalType';
import styles from './ModalAbout.module.scss';
import closeIcon from '../../assets/Close.svg';
import historyImg from '../../assets/ourHistory.webp';
import arrowDown from "../../assets/arrowDown.svg";
import SliderOurHistory from '../SliderOurHistory';
import { sliderOurHistoryData } from '../../constants/slider';

const ModalAbout: FC<IModalProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p className={`${children === "Our People" ? styles.textOurPeople: styles.text}`} onClick={children === "Our People" ? handleClose : handleOpen}>
        {children}
        <img src={arrowDown} alt="arrow" />
      </p>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={boxModalStyles}>
            {children === 'Our People' && (
              <div className={styles.wrapper}>
                <h1 className={styles.title}>Our people </h1>
                <div className={styles.container}>
                  <h2 className={styles.subTitle}>
                    Meet the IDF Foundation Board
                  </h2>
                  <p className={styles.description}>
                    Meet the experts behind IDF
                  </p>
                  <div className={styles.cardsContainer}>
                    {cardsCeoData.map(card => (
                      <div className={styles.card} key={card.id}>
                        <img src={card.img} alt="card" />
                        <p className={styles.cardTitle}>{card.name}</p>
                        <p className={styles.cardPosition}>{card.position}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h2 className={styles.sliderTitle}>
                      Meet the IDF Foundation Board
                    </h2>
                    <OurPeopleSlider items={cardsManagementData} />
                  </div>
                </div>
              </div>
            )}
            {children === 'Our History' && (
              <div>
                <h1 className={styles.titleHistory}>Our history</h1>
                <div className={styles.scrollContainer}>
                  <div className={styles.wrapperHistory}>
                    <div className={styles.containerHistory}>
                      <h2 className={styles.subTitleHistory}>
                        IDF’s community origins
                      </h2>
                      <p className={styles.descriptionHistory}>
                        In 1962 at a P&C meeting of the Loftus St Special
                        School, Arncliffe, parents were advised that under
                        policy then followed by the Department of Education,
                        pupils at special schools were not permitted to remain
                        at school after their 16th birthday.
                      </p>
                      <p className={styles.descriptionHistory}>
                        This prompted a group of dedicated parents and friends
                        to form the Loftus St Post School Centre which
                        subsequently later became St George Special Industries
                      </p>
                    </div>
                    <div className={styles.historyImgContainer}>
                      <img src={historyImg} alt="Members of the first team in action" />
                    </div>
                  </div>
                  <div className={styles.wrapperOverYears}>
                    <h2 className={styles.subTitleHistory}>
                      IDF over the years
                    </h2>
                     <SliderOurHistory cards={sliderOurHistoryData} />
                
                  </div>
                </div>
              </div>
            )}
            <img
              src={closeIcon}
              alt="close"
              className={styles.closeIcon}
              onClick={handleClose}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalAbout;
