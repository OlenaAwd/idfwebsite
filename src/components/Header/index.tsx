import React, { FC, MouseEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

import ModalRequestDemo from '../ModalRequestDemo';
import ModalBuyNow from '../ModalBuyNow';
import { pages } from '../../constants/pages';
import { typographyDesktopStyles } from '../../constants/styles/typographyLogoBig';
import { boxSmallStyles } from '../../constants/styles/boxSmall';
import { menuStyles } from '../../constants/styles/menuStyles';
import { boxDesktopStyles } from '../../constants/styles/boxDesktop';
import styles from './Header.module.scss';
import Logo from '../../assets/headerLogo.svg';
import menuIcon from '../../assets/menuIcon.svg';

interface IHeaderProps {
  sx: object;
}

const Header: FC<IHeaderProps> = ({ sx }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    console.log('click');
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={sx}>
      <Container disableGutters>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={typographyDesktopStyles}
          >
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src={Logo}
                alt="IDF Logo"
                onClick={handleLogoClick}
              />
            </div>
            <p className={styles.logoText}>
              IDF, A leading Australian Google Partner
            </p>
          </Typography>
          <Box sx={boxSmallStyles}>
            <div className={styles.leftSideContainer}>
              <div
                className={styles.burgerMenuContainer}
                onClick={handleOpenNavMenu}
              >
                <img src={menuIcon} alt="menu" />
              </div>
              <div className={styles.logoContainer}>
                <img
                  className={styles.logo}
                  src={Logo}
                  alt="IDF Logo"
                  onClick={handleLogoClick}
                />
              </div>
            </div>
            <ModalBuyNow classes={styles.buyNow} />
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
              sx={menuStyles}
            >
              {pages.map(item => (
                <MenuItem
                  key={item.page}
                  sx={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                  }}
                >
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

              <Box
                sx={{
                  flexGrow: 0,
                  marginTop: '20px',
                  paddingLeft: '10px',
                }}
              >
                <ModalRequestDemo classes={styles.btnRequestDemoHeader} />
                {/* <ModalBuyNow classes={styles.buyNow} /> */}
              </Box>
            </Menu>
          </Box>
          <Box sx={boxDesktopStyles}>
            {pages.map(item => (
              <NavLink
                to={item.url}
                className={styles.navbarItem}
                key={item.page}
              >
                {item.page}
              </NavLink>
            ))}

            <Box
              sx={{
                flexGrow: 0,
                display: 'flex',
                marginLeft: '0px',
                paddingRight: '0px',
                '@media (max-width: 960px)': {
                  marginLeft: '95px',
                },
              }}
            >
              <ModalBuyNow classes={styles.buyNow} />
            </Box>
          </Box>
              <ModalRequestDemo classes={styles.btnRequestDemoHeader} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
