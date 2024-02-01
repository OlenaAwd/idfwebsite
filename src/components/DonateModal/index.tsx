import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Chip } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './DonateModal.module.scss';
import LazyImgComponent from '../LazyImgComponent';
import ModalSliderComponent from '../ModalSliderComponent';
import {setHub, setFirstName, setLastName, setEmail, setPhone} from '../../slices/form'; 
import charitySign2 from '../../assets/logoCharity.webp';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1160px',
  maxHeight: '760px',
  bgcolor: 'background.paper',
  border: '1px solid #cecece',
  boxShadow: 24,
  padding: '24px 40px',
  borderRadius: '20px',
   "@media (max-width: 1190px)": {
    width: 360,
     height: "fit-content",
     minHeight: 564,
    padding: "16px",
    paddingBottom:"25px"
    },
};

interface IModalProps {
  label: string;
  title: string;
  src: string;
  header: string;
  text: string;
  children: JSX.Element;
  sx?: object;
}

const DonateModal: FC<IModalProps> = ({
  label,
  title,
  header,
  src,
  text,
  children,
  sx,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(setHub({hub:null}));
    dispatch(setFirstName({ firstname: "" }));
    dispatch(setLastName({ lastname: "" }));
    dispatch(setEmail({ email: "" }));
    dispatch(setPhone({ phone:""}));
  }
    const sanitizer = DOMPurify.sanitize;
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === '/social-enterprise' ? (
        <p className={styles.enquireNow} onClick={handleOpen}>
          Enquire Now
        </p>
      ) : (
        <Chip
          clickable
          label={label}
          variant="outlined"
          sx={sx}
          onClick={handleOpen}
        />
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          {(pathname==="/" && label==="Shop our Products" )?  <h4 className={styles.title}>Our product sales create work opportunities for people with disabilities</h4> :  <h4 className={styles.title}>{header}</h4> }
          <div className={styles.container}>
            <div>
              <div className={styles.imgContainer}>
                <LazyImgComponent src={src} alt="img" />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.header}>{title}</h3>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(text),
                  }}
                />
                {header === 'Donate to IDF' ? (
                  <div className={styles.charitySignContainer}>
                    <LazyImgComponent src={charitySign2} alt="charity-sign" />
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className={styles.leftContainer}>{children}</div>
          </div>
            <div className={styles.mobStyles}>
            <ModalSliderComponent firstChildren={
               <div>
              <div className={styles.imgContainer}>
                <LazyImgComponent src={src} alt="img" />
              </div>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p
                  className={styles.text}
                  dangerouslySetInnerHTML={{
                    __html: sanitizer(text),
                  }}
                />
                {header === 'Donate' ? (
                  <div className={styles.charitySignContainer}>
                    <LazyImgComponent src={charitySign2} alt="charity-sign" />
                  </div>
                ) : (
                  ''
                )}
              </div>
                </div>
            }
              secondChildren={<div className={styles.leftContainer}>{children}</div>}
            />
            </div>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '40px',
              top: '31px',
              color: '#000',
               "@media (max-width: 1190px)": {
                 right: '5px',
                 top:10
                },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
};

export default DonateModal;
