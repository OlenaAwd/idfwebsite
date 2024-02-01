import { FC } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { footerContactsData } from '../../constants/footerData';
import { pagesForFooter } from '../../constants/pages';
import styles from './Footer.module.scss';
import LogoSmall from "../../assets/FooterLogoSmallNew.svg";
import locationIcon from '../../assets/locationIcon.svg';

const Footer: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoLow}>
          <img src={LogoSmall} alt="logo" width="55px" height="58px"/>
        </div>
        <ul>
        {pathname === '/contact-us' && (
            <li className={styles.contactItem}>
              <img src={locationIcon} alt="" />
              <a
                href="http://maps.google.com/?q=50 Beach St, Kogarah NSW 2217, Australia"
                className={styles.itemText}
                target="_blank"
                rel="noreferrer"
              >
                50 Beach Street, Kogarah
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.linksContainer}>
          <h6 className={styles.linksTitle}>Links</h6>
          <ul className={styles.listLink}>
            {pagesForFooter.map(link => (
              <li className={styles.contactItem} key={link.page}>
                <NavLink to={link.url} className={styles.link}>
                  {link.page}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contactContainer}>
          <h6 className={styles.linksTitle}>Contact Us</h6>
          <ul className={styles.listLink}>
            {footerContactsData.map(item => (
              <li className={styles.contactItem} key={item.id}>
                <img src={item.src} alt="" />
                <a
                  target="_blank"
                  href={item.href}
                  className={styles.itemText}
                  rel="noreferrer"
                >
                  {item.text}
                </a>
              </li>
            ))}
             {pathname !== '/contact-us'  && ( 
              <li className={styles.contactItem}>
                <img src={locationIcon} alt="" />
                <a
                  target="_blank"
                  href="http://maps.google.com/?q=50 Beach St, Kogarah NSW 2217, Australia"
                  className={styles.itemText}
                  rel="noreferrer"
                >
                  50 Beach Street, Kogarah
                </a>
              </li>
             )} 
          </ul>
        </div>
        <div className={styles.servingContainer}>
          <h6 className={`${styles.linksTitle} ${styles.servingAll}`}>
            Serving all
            <br /> Australian regions
          </h6>
            <p className={styles.contactItem}>
              Serving participants in South-Western Sydney; working with brands
              and businesses all around Australia.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
