/* eslint-disable array-callback-return */
import { FC, MouseEvent, useState,  } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  SocialEnterprisePagesChild,
  pages,

  subPagesChild,
  supportPagesChild,
} from '../../constants/pages';

import styles from './RestaurantHome.module.scss';
import Logo from '../../assets/headerLogo.svg';
import menuIcon from '../../assets/menuIcon.svg';
import { TrialCustomSelect } from '../CustomSelect';
import ModalRequestDemo from '../ModalRequestDemo';
import ModalBuyNow from '../ModalBuyNow';

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   top: 11,
//   width: '20px',
//   height: '20px',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginLeft: '16px',

//   '@media (max-width: 1240px)': {
//     width: '30px',
//     height: '30px',
//     top: 5,
//   },
// }));

const RestaurantHome: FC = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);


  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  // const handleRequest = () => {
  //   console.log('handleRequest');
  // };
  // const handleBuy = () => {
  //   console.log('handleBuy');
  // };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // const onFocus = () => setSquize(true);
  // const onBlur = () => setSquize(false);

  // const [activeButton, setActiveButton] = useState<string>('');
  // const [activeButtonPeriod, setActiveButtonPeriod] = useState<string>('');
  // const [donateValue, setDonateValue] = useState('');
  // const handleToggle = (buttonName: string) => {
  //   setActiveButton(activeButton === buttonName ? '' : buttonName);
  // };
  // const handleTogglePeriod = (buttonName: string) => {
  //   setActiveButtonPeriod(activeButton === buttonName ? '' : buttonName);
  // };
  // const handleChangeDonate = (val: ChangeEvent<HTMLInputElement>) => {
  //   const value = val.target.value;
  //   const valueEdited = value.replace(/\D+/g, '');
  //   setDonateValue(valueEdited);
  // };
  // const handleDonate = () => {
  //   console.log('handleDonate');
  // };

  return (
    <div className={styles.appBar}>
      <div className={styles.toolbar}>
        {/* MOBILE VIEW */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            '@media (max-width: 1240px)': {
              display: 'flex',
              flexDirection: 'row',
              width: '1100px',
              justifyContent: 'space-between',
            },
            '@media (max-width: 860px)': {
              width: '560px',
            },
          }}
        >
          <div className={styles.leftSideContainer}>
            <div
              className={styles.burgerMenuContainer}
              onClick={handleOpenNavMenu}
            >
              <img src={menuIcon} alt="menu" />
            </div>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block' }, 
                '@media (max-width: 1240px)': {
                  display: 'flex',
                },
              }}
            >
              {pages.map(item => (
                <MenuItem key={item.page}>
                  <NavLink
                    to={item.url}
                    className={styles.navbarItem}
                    key={item.page}
                    onClick={handleCloseNavMenu}
                  >
                    {item.page}
                  </NavLink>
                </MenuItem>
              ))}

              <div style={{ marginLeft: '15px', marginRight:'5px', marginTop: '5px' }}>
                <ModalBuyNow classes={styles.buyNow} />
              </div>
            </Menu>
            <div className={styles.logoContainer}>
              <img src={Logo} alt="IDF Logo" onClick={handleLogoClick} />
            </div>
          </div>
          <div className={styles.rightSideContainer}>
           <ModalRequestDemo classes={styles.btnRequestDemoHeader} />
          </div>
        </Box>
        {/* DESKTOP VIEW */}
        <div
          className={styles.typographyDesktopHomeStyles}
          onClick={handleLogoClick}
        >
          <div className={styles.logoContainer}>
            <img src={Logo} alt="IDF Logo" />
          </div>
         
            <p className={styles.logoText}>
              IDF, A leading Australian Google Partner
            </p>
        </div>

        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            maxWidth: '844px',
            justifyContent: 'end',
            alignItems: 'center',
            height: '36px',
            '@media (max-width: 1240px)': {
              display: 'none',
            },
          }}
        >
          {pages.map((item) => (
                <NavLink
                  key={item.page}
                  to={item.url}
                  className={styles.navbarItem}
                  onClick={handleCloseNavMenu}
                >
                  {item.page}
                </NavLink>
          ))}
          <ModalBuyNow classes={styles.buyNow} />
          <ModalRequestDemo classes={styles.btnRequestDemoHeader} />
        </Box>
      </div>
      <div className={styles.searchListWrapper}>
         <ul className={styles.searchList}>
        <TrialCustomSelect title="Get Support" options={supportPagesChild} />
        <TrialCustomSelect title="Businesses" options={subPagesChild} />
        <TrialCustomSelect
          title="Social Enterprise"
          options={SocialEnterprisePagesChild}
        />
      </ul>
</div>
     
    </div>
  );
};

export default RestaurantHome;
