import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import styles from './RefundPolicy.module.scss';

const RefundPolicy = () => {
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
      <title>Refund Policy - IDF Foundation</title>
      <meta name="description" content="Learn about our refund policy at IDF Foundation. We handle refund requests in a fair and transparent manner. Find information on the criteria, time limits, and the process for requesting a refund. Your support is important to us." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.mainSection}>
          <div className={styles.wrapper}>
            <h1 className={styles.header}>Refund Policy</h1>
            <p className={styles.textDescription}>
              At IDF Foundation, we value your support and understand that
              circumstances may arise where you need to request a refund for
              your contribution. We strive to handle refund requests in a fair
              and transparent manner. Please review the following information
              regarding our refund policy:
            </p>

            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                1.{' '}
                <p className={styles.countInside}>
                  Refund Consideration: Any refund request will be evaluated on
                  a case-by-case basis. We carefully review each situation
                  before making a determination. Refunds will be returned to the
                  original card or bank account used for the donation.
                </p>
              </p>
            </p>

            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                2.{' '}
                <p className={styles.countInside}>
                  Validity of Tax Receipts: If a donation is refunded, the
                  associated tax receipt becomes invalid and should be securely
                  destroyed. It is your responsibility to ensure accurate
                  receipts are submitted to the Australian Tax Office.
                </p>
              </p>
            </p>

            <p className={styles.textDescription}>
              <span>3.</span> Donation and Refund Criteria:
              <p className={styles.count}>
                (a)
                <p className={styles.countInside}>
                  Refunds will be issued in the following circumstances:
                </p>
              </p>
              <p className={styles.countLast}>
                (i)
                <p className={styles.countInsideLast}>
                  If an error was made by IDF Foundation or our agents.
                </p>
              </p>
              <p className={styles.countLast}>
                (ii)
                <p className={styles.countInsideLast}>
                  If a supporter has requested cancellation of a regular debit
                  at least 10 days before the debit date, but the debits have
                  continued.
                </p>
              </p>
              <p className={styles.countLast}>
                (iii)
                <p className={styles.countInsideLast}>
                  In exceptional circumstances, such as evidence of supporter
                  vulnerability.
                </p>
              </p>
              <p className={styles.count}>
                (b)
                <p className={styles.countInside}>
                  If your situation does not align with the above criteria, our
                  Chief Operating Officer may review and resolve the matter.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                4.{' '}
                <p className={styles.countInside}>
                  Time Limit for Refunds: Regrettably, we cannot process refunds
                  for donation errors reported after 90 days from the date of
                  the donation.
                </p>
              </p>
            </p>

            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                5.{' '}
                <p className={styles.countInside}>
                  Deduction of Charges: As a non-profit charity organization,
                  IDF Foundation reserves the right to deduct any bank or
                  transaction charges associated with processing a refund.
                </p>
              </p>
            </p>

            <ul className={styles.list}>
              <p className={styles.textDescription}>
                Applying for a Refund: If you wish to request a refund, please
                follow these steps:
              </p>
              <li className={styles.listItem}>
                Submit your request in writing, providing your full name,
                Supporter ID (if known), full mailing address, and phone number.
              </li>
              <li className={styles.listItem}>
                Include details of your donation, including the date, amount,
                and method of payment.
              </li>
              <li className={styles.listItem}>
                Explain the circumstances justifying your refund request.
              </li>
            </ul>
            <p className={styles.textDescription}>
              Upon receipt of your request, we will review it and provide a
              response within 2 business days. If approved, the refunded amount
              will be available in your bank account within 5 working days,
              depending on your financial institution.
            </p>
            <ul className={styles.list}>
              <p className={styles.textDescription}>
                To submit your refund request, please contact us via:
              </p>
              <li className={styles.listItem}>
                Mail: IDF Foundation 50 Beach St, Kogarah Sydney, Australia
              </li>
              <li className={`${styles.listItem}`}>
                Email:{' '}
                <a
                  href="mailto:admin@idfstgeorge.org.au"
                  className={styles.email}
                >
                  admin@idfstgeorge.org.au.
                </a>
              </li>
            </ul>
            <p className={styles.textDescriptionLast}>
              For any other enquiries, please feel free to reach out to our
              Supporter Relations Team at <a type="tel"
                   href="tel:0285662800"
                  className={styles.email}
                >
                  02 8566 2800
                </a>.
            </p>
            <p className={styles.textDescriptionLast}>
              This refund policy was last updated in August 2023.
            </p>
            <p className={styles.textDescriptionLast}>
              We appreciate your understanding and continued support of IDF
              Foundation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RefundPolicy;
