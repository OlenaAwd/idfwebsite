import React, { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './CustomSelect.module.scss';
import { gamingHubChildren } from '../../constants/pages';
interface LinkOption {
  page: string;
  url: string;
}

interface SelectProps {
  title: string;
  options: LinkOption[];
  items?: string[]
}

export const TrialCustomSelect: FC<SelectProps> = ({ title, options, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const { pathname } = useLocation();

  let check =
    pathname === '/ndis-privacy' ||
    pathname === '/website-disclaimer' ||
    pathname === '/privacy-policy' ||
    pathname === '/refund-policy' ||
    pathname === '/tax-receipts';

  return (
    <li
      className={`${styles.selectWrapper} ${
        isOpen === true ? styles.open : styles.close
      }`}
    >
      <div
        className={`${styles.selectContainer}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className={`${styles.selectTitle}`}>{title}</div>
        <div
          className={`${
            isOpen && title === 'Business' ? styles.underline : ''
          } ${
            isOpen && title === 'Support Services' ? styles.underlineSupport : ''
          } ${
            isOpen && title === 'Social Enterprise'
              ? styles.underlineSocial
              : ''
          }`}
        ></div>
        <div
          className={`${styles.icon} ${
            isOpen === true ? styles.iconRotate : ''
          }`}
        ></div>
        {isOpen && (
          <div
            className={`${styles.selectOptions} ${pathname === '/restaurant-services'
                ? styles.selectRestaurantOptions
                : ''} ${pathname === '/contact-us' ? styles.selectRestaurantOptions : ''} ${check === true ? styles.selectLinksPagesOptions : ''}`}
          >
            {options.map(option => (
              <>
              {option.page === "Gaming Hub >" ? 
              <div onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} className={styles.menuItem}>
              <NavLink  
                to={option.url}
                key={option.url}
                className={`${styles.selectLinkAdditional}`}
                
              >
                {option.page} 
             
              </NavLink>
              {isMenuOpen &&(
                <ul className={styles.dropdownMenu}>
                  {gamingHubChildren.map((item, index) => (
                    <NavLink to={item.url} key={index}   className={styles.selectLink}>{item.page}</NavLink>
                  ))}
                </ul>
              )}
              </div> :
              <NavLink
              key={option.url}
              to={option.url}
              className={styles.selectLink}
            >
              {option.page}
            </NavLink>
              }
              </>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};
