import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import styles from './TaxReceipts.module.scss';

const TaxReceipts = () => {
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
          // selection.addRange(range);
           selection.removeAllRanges();
        }
      }
    }
  };

  return (
    <>
     <Helmet>
      <title>Tax Receipts - IDF's Supported Employment</title>
      <meta name="description" content="Learn about tax receipts for the current financial year at IDF's supported employment. Receipts will be sent out mid-July. For information on lodging your tax return, visit the Australian Taxation Office website. Contact us for any questions about your tax receipt." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.mainSection}>
          <div className={styles.wrapper}>
            <h1 className={styles.header}>Tax Receipts</h1>
            <div className={styles.descriptionWrapper}>
              <p className={styles.textDescription}>
                Tax receipts for the current financial year will be sent out to
                all supporters mid-July.
              </p>
              <p className={styles.textDescription}>
                Thank you for support for IDF’s supported employment.
              </p>
              <p className={styles.textDescription}>
                For more information on how to lodge your tax return, please
                visit the{' '}
                <a
                  href="https://www.ato.gov.au/individuals/your-tax-return/?=redirected_URL"
                  target="_blank"
                  rel="noreferrer"
                >
                  Australian Taxation Office
                </a>{' '}
                website.
              </p>
              <p className={styles.textDescription}>
                For questions about your tax receipt,{' '}
                <a href="mailto:admin@idfstgeorge.org.au">contact us</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TaxReceipts;
