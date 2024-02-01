/* eslint-disable array-callback-return */
import React, { FC, MouseEvent, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '../../assets/searchIcon.svg';
import { styled } from '@mui/material/styles';
import ButtonComponent from '../ButtonComponent';
import {
  SocialEnterprisePagesChild,
  pagesForHome,
  subPagesChild,
  supportPagesChild,
} from '../../constants/pages';
import styles from './HeaderHome.module.scss';
import Logo from '../../assets/headerLogo.svg';
import menuIcon from '../../assets/menuIcon.svg';
import { TrialCustomSelect } from '../CustomSelect';
import { searchData } from '../../constants/searchDropdown';
import ThanksForDonationModal from '../ThanksForDonationModal';



const SearchIconWrapper = styled('div')(({ theme }) => ({
  top: 11,
  width: '20px',
  height: '20px',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '16px',

  '@media (max-width: 1240px)': {
    width: '30px',
    height: '30px',
    top: 5,
  },
}));

interface ISearch{
    onSearch: (query: string) => void;
}


const HeaderHome: FC<ISearch> = ({onSearch}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { category, id } = useParams();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [squize, setSquize] = useState(false);
 
  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleContact = () => {
    navigate('/contact-us');
    window.scrollTo(0, 0);
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const onFocus = () => {
    setSquize(true);
    console.log('onfocus :>> ');
  };

  const handleDonate = () => {
    const paypalLink =process.env.REACT_APP_PAYPAL_LINK;
    window.open(paypalLink, '_blank');
  };


  const [query, setQuery] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

 const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(query);
    }
   
 };
  let check =
    pathname === '/ndis-privacy' ||
    pathname === '/website-disclaimer' ||
    pathname === '/privacy-policy' ||
    pathname === '/refund-policy' ||
    pathname === '/tax-receipts' ||
    pathname === '/advocacy' ||
    pathname === "/neuro-inclusive-mindset" ||
    pathname === "/neurodiverse-workforce";

  let btnCheck =
    pathname === '/ndis-privacy' ||
    pathname === '/website-disclaimer' ||
    pathname === '/privacy-policy' ||
    pathname === '/refund-policy' ||
    pathname === '/tax-receipts';
  
  let additionalPagesCheck = pathname === "/neuro-inclusive-mindset";

  let pagesWithoutSiteBar = pathname === "/neuro-inclusive-mindset" || pathname === "/neurodiverse-workforce";
let searchItem;
  const filteredResults = searchData.filter((item) => {
    searchItem = query.toLowerCase();
    const fullSearchTitle = item.title.toLowerCase();
    return searchItem && fullSearchTitle.includes(searchItem);
  });
 

  return (
    <>
    <div
      className={`${styles.appBar} ${
        pathname === '/contact-us' && styles.appBarContacts
      } ${check === true && styles.appBarLinksPages} ${pagesWithoutSiteBar && styles.appBarLinksPagesWithoutSiteBar} ${
        (pathname === '/social-enterprise'|| pathname === '/real-estate-services' ||
          pathname === '/social-media' ||
          pathname === `/resources/${category}/${id}`) &&
        styles.blogPage
      } ${
        (pathname === '/hamper' || pathname==="/specially-made") && styles.appBarHamper
      }`}
    >
      <div className={styles.toolbar}>
        {/* MOBILE VIEW */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            '@media (max-width: 1240px)': {
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginTop:"27px",
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
              {pathname !== "/neuro-inclusive-mindset" && pagesForHome.map(item => (
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

              <div  style={{ marginLeft: '15px', marginTop: '5px' }}>
              <ThanksForDonationModal btn={
                  <ButtonComponent
                      onClick={handleDonate}
                      classes={styles.donate}
                      color="red"
                   >
                      Donate
                  </ButtonComponent>
                  } />
               


  
              </div>
            
            </Menu>
            <div className={styles.logoContainer}>
              <img src={Logo} alt="IDF Logo" onClick={handleLogoClick} />
            </div>
          </div>
          <div className={styles.rightSideContainer}>
            <ButtonComponent
              onClick={handleContact}
              classes={`${styles.contactUs} ${pathname === '/contact-us' && styles.contactUsPage} ${
                check === true && styles.contactUsLinksPages
              } ${pathname === "/neuro-inclusive-mindset" && styles.hideContactUs} ${pathname === '/advocacy' && styles.contactUsLinksPages}`}
              color="white"
            >
              Contact Us
            </ButtonComponent>
            <div
              className={`${query === '' ? styles.searchContainer : styles.searchContainerAdditional} ${
                pathname === '/contact-us' ? styles.searchContainerContacts : ''
              } ${check === true ? styles.searchContainerLinksPages : ''}`}
            >
              <SearchIconWrapper>
                <img src={SearchIcon} alt="searchIcon" width="20px" height="20px"/>
              </SearchIconWrapper>
                <input
                    type="text"
                placeholder="Search"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                onFocus={onFocus}
                //  onBlur={onBlur}
                className={`${styles.inputMobile} 
                ${
                  squize === true
                    ? styles.inputSearchFocused
                    : styles.inputSearch
                } 
                  ${
                    squize === true && pathname === '/contact-us'
                      ? styles.inputSearchFocusedContact
                      : ''
                  } 
              ${
                squize === false && pathname === '/contact-us'
                  ? styles.inputSearchContact
                  : ''
              }
              ${
                squize === true && check === true
                  ? styles.inputSearchFocusedLinksPages
                  : ''
              } 
              ${
                squize === false && check === true
                  ? styles.inputSearchLinksPages
                  : ''
              }

                `}
                />
                 <div className={styles.searchDropdown}>
   
                 {(filteredResults.length === 0 && searchItem !=="") ? (<p className={styles.dropdownItem}>No results found for {searchItem} </p>) : (filteredResults.map((result, index) => (<p
                    key={index}
                    onClick={() => navigate(`${result.link}`)}
                    className={styles.dropdownItem}
                 >
                    {result.title}
                  </p>
              )))}
              </div>
            </div>
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
          <div className={styles.textContainer}>
            <p className={styles.logoText}>
              Intellectual Disability Foundation
            </p>
            <p className={styles.logoSubText}>Supported Employment</p>
          </div>
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
          {additionalPagesCheck === false &&
            pagesForHome.map((item, index) => {
              if (squize === true && index === 0) {
                return (
                  <NavLink
                    key={item.page}
                    to={item.url}
                    className={styles.navbarItem}
                    onClick={handleCloseNavMenu}
                  >
                    {item.page}
                  </NavLink>
                );
              } else if (squize === false) {
                return (
                  <NavLink
                    key={item.page}
                    to={item.url}
                    className={styles.navbarItem}
                    onClick={handleCloseNavMenu}
                  >
                    {item.page}
                  </NavLink>
                );
              }
            })}
          {squize === false && (
            <>
              <div style={{ marginRight: "16px"}}>
              <ThanksForDonationModal btn={
                        
                  <ButtonComponent
                  onClick={handleDonate}
                   classes={styles.donate}
                  color="red"
                >
                  Donate
                </ButtonComponent>
                      }
                />
              </div>
              
              <ButtonComponent
                onClick={handleContact}
                classes={`${styles.contactUs}  ${
                 (pagesWithoutSiteBar) && styles.hideContactUs
                } ${pathname === '/contact-us' && styles.contactUsPage} ${
                  btnCheck === true && styles.contactUsLinksPages
                }`}
                color="white"
              >
                Contact Us
              </ButtonComponent>
            </>
          )}

          <div
            className={`${query === '' ? styles.searchContainer : styles.searchContainerAdditional}
            ${pathname === '/contact-us' && styles.searchContainerContacts} ${
              check === true && styles.searchContainerLinksPages
            }`}
          >
            <SearchIconWrapper>
              <img src={SearchIcon} alt="searchIcon" width="20px" height="20px"/>
            </SearchIconWrapper>
            <input
              placeholder="Search"
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              onFocus={onFocus}
              className={`${
                squize === true ? styles.inputSearchFocused : styles.inputSearch
              } 
              ${
                squize === true && pathname === '/contact-us'
                  ? styles.inputSearchFocusedContact
                  : ''
              } 
              ${
                squize === false && pathname === '/contact-us'
                  ? styles.inputSearchContact
                  : ''
              }
              ${
                squize === true && check === true
                  ? styles.inputSearchFocusedLinksPages
                  : ''
              } 
              ${
                squize === false && check === true
                  ? styles.inputSearchLinksPages
                  : ''
              }
              }`}
              />
              <div className={styles.searchDropdown}>
              {(filteredResults.length === 0 && searchItem !=="") ? (<p className={styles.dropdownItem}>No results found for {searchItem} </p>) : (filteredResults.map((result, index) => (
                <>
                {result.link ? <p
                    key={index}
                    onClick={() => navigate(`${result.link}`)}
                    className={styles.dropdownItem}
                 >
                    {result.title}
                  </p> : <a target='_blank' className={styles.dropdownItem} href={`${result.href}`} rel="noreferrer" type={result.type ? result.type : "text"}> {result.subTitle? result.subTitle : result.title}</a> }
             
                </>
             
              )))}
              </div>
          </div>
        </Box>
      </div>
        {pagesWithoutSiteBar ?
          <div className={styles.border} ></div> : <div className={`${check === true ? styles.searchListWrapperAdvocacy : styles.searchListWrapper} ${pathname==="/contact-us" && styles.searchListWrapperContact}`}>
          <ul
              className={`${squize ? styles.searchListMargin : styles.searchList}
            ${
            pathname === '/contact-us' && styles.searchListContacts
          } ${check === true && styles.searchListLinksPage}`}
        >
          <TrialCustomSelect title="Support Services" options={supportPagesChild} />
          <TrialCustomSelect title="Business" options={subPagesChild} />
          <TrialCustomSelect
            title="Social Enterprise"
            options={SocialEnterprisePagesChild}
          />
        </ul>
        </div>
      }
      
    </div>
  </>
    
  );
};

export default HeaderHome;
