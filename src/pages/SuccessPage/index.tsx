import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from './DonatePage.module.scss';
import yellow from '../../assets/yellow.webp';
import { Helmet } from 'react-helmet-async';
import LazyImgComponent from '../../components/LazyImgComponent';

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
  '@media (max-width: 1190px)': {
    width: 360,
    height: 'fit-content',
    minHeight: 564,
    padding: '16px',
    paddingBottom: '25px',
  },
};

const DonatePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>
          Donate to IDF: Empower Lives through Supported Employment
          Opportunities
        </title>
        <meta
          name="description"
          content="Your donations transform lives! Contribute now to IDF's social enterprise and create supported employment opportunities for individuals living with disabilities. Your donation is tax deductible."
        />
      </Helmet>

      <div className={styles.modalBackdrop}>
        <Box sx={style}>
          <div className={styles.container}>
            <div className={styles.imgContainer}>
              <LazyImgComponent src={yellow} alt="yellow" />
            </div>
            <div className={styles.leftContainer}>
              <>
                <div className={styles.donateContainer}>
                  <h1 className={styles.title}>Thank you for your donation</h1>
                  <div>
                    Please try again <br />
                    Common reasons for problems processing your transaction
                    include <br />
                    We were unable to process due to insufficient funds
                    <br />
                    We were unable to process your transaction, please contact
                    your bank
                    <br />
                    We were unable to confirm your details, please try again
                    <br />
                  </div>
                </div>
              </>
            </div>
          </div>

          <IconButton
            onClick={() => navigate('/')}
            sx={{
              position: 'absolute',
              right: '40px',
              top: '31px',
              color: '#000',
              '@media (max-width: 1190px)': {
                right: '5px',
                top: 10,
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </div>
    </>
  );
};

export default DonatePage;
