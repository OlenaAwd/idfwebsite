import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import styles from './WebsiteDisclaimer.module.scss';

const WebsiteDisclaimer = () => {
  const contentRef = useRef<HTMLDivElement>(null);


  const handleSearch = (query: string) => {
    if (contentRef.current) {
      const content = contentRef.current;
      const isFound = window.find(query);

      if (isFound) {
        content.focus();

        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          const range = document.createRange();
          range.selectNodeContents(content);
           selection.removeAllRanges();
        }
      }
    }
  };

  return (
    <>
     <Helmet>
      <title>Website Disclaimer - Intellectual Disability Foundation of St. George Pty Ltd</title>
      <meta name="description" content="Read our website disclaimer to understand our approach to information accuracy, liability, and external links. The Intellectual Disability Foundation of St. George Pty Ltd strives for accuracy but cannot guarantee the content of external sites. Contact us with any concerns about our website content." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.mainSection}>
          <div className={styles.wrapper}>
            <h1 className={styles.header}>Website Disclaimer</h1>
            <p className={styles.textDescription}>
              All care is taken in the preparation of the information and
              published materials on this site. The Intellectual Disability
              Foundation of St George Pty Ltd does not make any representations
              or give any warranties about its accuracy, reliability,
              completeness or suitability for any particular purpose. To the
              extent permissible by law, The Intellectual Disability Foundation
              of St George Pty Ltd will not be liable for any expenses, losses,
              damages (including indirect or consequential damages) or costs
              which might be incurred as a result of the information being
              inaccurate or incomplete in any way and for any reason.
            </p>
            <p className={styles.textDescription}>
              This site may contain hypertext links, frames or other references
              to other parties and their websites. The Intellectual Disability
              Foundation of St George Pty Ltd cannot control the contents of
              those other sites, and make no warranty about the accuracy,
              timeliness or subject matter of the material located on those
              sites. The Intellectual Disability Foundation of St George Pty Ltd
              do not necessarily approve of, endorse, or sponsor any content or
              material on such sites. The Intellectual Disability Foundation of
              St George Pty Ltd make no warranties or representations that
              material on other websites to which this website is linked does
              not infringe the intellectual property rights of any person
              anywhere in the world.
            </p>
            <p className={styles.textDescription}>
              The Intellectual Disability Foundation of St George Pty Ltd are
              not, and must not be taken to be, authorising infringement of any
              intellectual property rights contained in material or other sites
              by linking or allowing links to, this website to such material on
              other sites.
            </p>
            <p className={styles.textDescription}>
              If you have any concerns regarding the content of the Website,
              please contact The Intellectual Disability Foundation of St George
              Pty Ltd.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WebsiteDisclaimer;
