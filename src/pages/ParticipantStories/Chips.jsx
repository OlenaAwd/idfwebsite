import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Chip } from '@mui/material';
import { chipParticipantStyles } from '../../constants/styles/chip';
import styles from './ParticipantStories.module.scss';
import triangleImg from '../../assets/triangle.svg';

const Chips = () => {
  const navigate = useNavigate();
  const [isClicked1, setIsClicked1] = useState(false);
  // const [isClicked2, setIsClicked2] = useState(false);
  const sanitizer = DOMPurify.sanitize;
  const handleFirstClick = () => {
    setIsClicked1(isClicked1 => !isClicked1);
  };
  // const handleSecondClick = () => {
  //   setIsClicked2(isClicked2 => !isClicked2);
  // };

  const EmploymenthoverArr = [
    {
      hover: 'E-Sports >',
      hoverLink: '/e-sports',
      id: '',
    },
    {
      hover: 'Wellness Product Production >',
      hoverLink: '/',
      id: 'group',
    },
    {
      hover: 'Garden Centre >',
      hoverLink: '/',
      id: 'group',
    },
    {
      hover: 'Packing >',
      hoverLink: '/packing',
      id: 'yourChoice',
    },
    {
      hover: 'Social Media Marketing >',
      hoverLink: '/',
      id: 'group',
    },
    {
      hover: 'Digital Marketing >',
      hoverLink: '/',
      id: 'group',
    },
  ];

  const GaminghoverArr = [
    {
      hover: ' Dungeons and Dragons ',
      hoverLink: '/e-sports',
      id: '',
    },
    {
      hover: 'Board Games ',
      hoverLink: '/',
      id: 'group',
    },
    {
      hover: 'Video Games ',
      hoverLink: '/',
      id: 'group',
    },
  ];

  const ActivityhoverArr = [
    {
      hover: 'Day Trips',
      hoverLink: '/e-sports',
      id: '',
    },
    {
      hover: 'Movie nights',
      hoverLink: '/',
      id: 'group',
    },
    {
      hover: 'Sports nights',
      hoverLink: '/',
      id: 'group',
    },
    {
      hover: 'Ladies only',
      hoverLink: '/',
      id: '',
    },
  ];

  const LearninghoverArr = [
    {
      hover: 'Cooking',
      hoverLink: '/e-sports',
      id: '',
    },
    {
      hover: 'Life Skills',
      hoverLink: '/',
      id: 'group',
    },
  ];
  return (
    <div className={styles.container}>
      <h1>Participant services suggestions for you</h1>
      <div className={styles.chipsContainer}>
        {/* Employment */}
        <div
          className={`${
            isClicked1 === true ? styles.visibleThumb : styles.thumb
          } `}
        >
          <Chip
            label="Employment"
            sx={chipParticipantStyles}
            onClick={handleFirstClick}
          />
          <div
            className={`${
              isClicked1 === true
                ? styles.hoverContainer
                : styles.hoverContainerHide
            }`}
          >
            {EmploymenthoverArr.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  navigate(`${item.hoverLink}`);
                  setTimeout(() => {
                    const contactSection = document.getElementById(
                      `${item.id}`,
                    );
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: 'smooth',
                      });
                    }
                  }, 100);
                }}
              >
                {item.hover}
              </span>
            ))}
          </div>
          <div
            className={`${
              isClicked1 === true
                ? styles.imgContainer
                : styles.imgContainerHide
            }`}
          >
            <img src={triangleImg} alt="triangle" />
          </div>
        </div>
        {/* Gaming */}
        <div className={`${styles.visibleThumbOnly} `}>
          <Chip
            label="Gaming"
            sx={chipParticipantStyles}
            onClick={() => navigate('/activity-hub')}
          />
          <div>
            <div className={styles.hoverContainerOnly}>
              {GaminghoverArr.map((item, index) => (
                <span
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(item.hover),
                  }}
                />
              ))}
            </div>
            <div className={styles.imgContainer}>
              <img src={triangleImg} alt="triangle" />
            </div>
          </div>
        </div>
        {/* School Leavers */}
        <div className={`${styles.thumb} `}>
          <Chip
            label="School Leavers"
            sx={chipParticipantStyles}
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const contactSection = document.getElementById('your-support');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }, 100);
            }}
            // onClick={() => navigate('/activity-hub')}
          />
        </div>

        {/* Support Coordination */}
        <div className={`${styles.thumb} `}>
          <Chip
            label="Support Coordination"
            sx={chipParticipantStyles}
            onClick={() => navigate('/employment-hub')}
          />
        </div>
        {/* Activity Hub */}
        <div className={`${styles.visibleThumbOnly} `}>
          <Chip
            label="Activity Hub"
            sx={chipParticipantStyles}
            onClick={() => navigate('/activity-hub')}
          />
          <div>
            <div className={styles.hoverContainerOnly}>
              {ActivityhoverArr.map((item, index) => (
                <span
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(item.hover),
                  }}
                />
              ))}
            </div>
            <div className={styles.imgContainer}>
              <img src={triangleImg} alt="triangle" />
            </div>
          </div>
        </div>
        {/* Learning*/}
        <div className={`${styles.visibleThumbOnly} `}>
          <Chip
            label="Learning"
            sx={chipParticipantStyles}
            onClick={() => navigate('/activity-hub')}
          />
          <div>
            <div className={styles.hoverContainerOnly}>
              {LearninghoverArr.map((item, index) => (
                <span
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(item.hover),
                  }}
                />
              ))}
            </div>
            <div className={styles.imgContainer}>
              <img src={triangleImg} alt="triangle" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.chipsContainer}>
        {participantData.map(card => (
          <div
            className={`${styles.thumb} ${
              isClicked === true && styles.visibleThumb
            } `}
            key={card.id}
          >
            <Chip
              label={card.title}
              sx={chipParticipantStyles}
              onClick={() => {
                !card.link
                  ? setIsClicked(isClicked => !isClicked)
                  : navigate(`${card.link}`);
                window.scrollTo(0, 0);
              }}
            />

            <>
              <div
                className={`${
                  isClicked === true && !card.link
                    ? styles.hoverContainer
                    : styles.hoverContainerHide
                }`}
              >
                {card.hoverArr &&
                  card.hoverArr.map(element => (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(element.hover),
                      }}
                      onClick={() => {
                        navigate(`${element.hoverLink}`);
                        setTimeout(() => {
                          const contactSection = document.getElementById(
                            `${element.id}`,
                          );
                          if (contactSection) {
                            contactSection.scrollIntoView({
                              behavior: 'smooth',
                            });
                          }
                        }, 100);
                      }}
                    />
                  ))}
                {card.hover && (
                  <>
                    <div className={styles.hoverContainerOnly}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: sanitizer(card.hover),
                        }}
                      />
                    </div>
                    <div className={styles.imgContainer}>
                      <img src={triangleImg} alt="triangle" />
                    </div>
                  </>
                )}
              </div>
              <div
                className={`${
                  isClicked === true && !card.link
                    ? styles.imgContainer
                    : styles.imgContainerHide
                }`}
              >
                <img src={triangleImg} alt="triangle" />
              </div>
            </>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Chips;
