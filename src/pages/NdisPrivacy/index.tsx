import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import styles from './NdisPrivacy.module.scss';

const NDISPrivacy = () => {
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
      <title>NDIS Privacy Policy - Intellectual Disability Foundation of St George</title>
      <meta name="description" content="Learn about our privacy policy regarding the National Disability Insurance Scheme (NDIS). We respect and protect the privacy of all NDIS-connected individuals, including participants, providers, employees, and contractors. Discover our commitment to complying with federal privacy laws and regulations, including the Privacy Act 1988 (Cth) and the National Disability Insurance Scheme Act 2013 (Cth)." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.mainSection}>
          <div className={styles.wrapper}>
            <h1 className={styles.header}>NDIS Privacy</h1>
            <p className={styles.boldTextMain}>Background</p>
            <p className={styles.textDescription}>
              <span>(A)</span> The Intellectual Disability Foundation of St
              George’s policy is to respect and protect the privacy of all
              people connected with the National Disability Insurance Scheme
              (NDIS) inclusive of participants, providers, employees and
              contractors. In dealing with personal information, The
              Intellectual Disability Foundation of St George abides by the
              obligations imposed under federal law, inclusive of the Privacy
              Act 1988 (Cth) and the National Disability Insurance Scheme Act
              2013 (Cth).
            </p>
            <p className={styles.textDescription}>
              <span>(B)</span> The Privacy Act 1988 (Cth) authorises the
              collection of personal information where this is required to
              facilitate access to services provided under the NDIS and perform
              the other functions required for service provision. The National
              Disability Insurance Scheme Act 2013 (Cth) sets the provisions for
              confidentiality and secrecy which limit how The Intellectual
              Disability Foundation of St George collect and use personal
              information and when and to whom this information can be
              disclosed.
            </p>
            <p className={styles.boldText}>
              1. Information collected and stored
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George will
                  collect information which is considered reasonably necessary
                  to carry out our role as service providers. The kinds of
                  information we collect and store includes, but is not limited
                  to, personal information (as defined under the Privacy Act
                  1988 (Cth)) about the participants and other users of our
                  services, and about our employees, contractors and providers.
                </p>
              </p>
            </p>

            <p className={styles.textDescription}>
              <span>(b)</span> We may collect the following types of personal
              information:
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  identity information, such as your full name and date of
                  birth;
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  contact details, such as your email and phone number;
                </p>
              </p>
              <p className={styles.count}>
                (iii)
                <p className={styles.countInside}>
                  government identifiers, such as your participant number under
                  the National Disability Insurance Scheme (NDIS) if applicable;
                </p>
              </p>
              <p className={styles.count}>
                (iv)
                <p className={styles.countInside}>
                  the relevant NDIS Plan information when provided;
                </p>
              </p>
              <p className={styles.count}>
                (v)
                <p className={styles.countInside}>
                  any information or documents which you upload to the The
                  Intellectual Disability Foundation of St George platform;
                </p>
              </p>
              <p className={styles.count}>
                (vi)
                <p className={styles.countInside}>
                  information about your interactions with us on or via the The
                  Intellectual Disability Foundation of St George platform;
                </p>
              </p>
              <p className={styles.count}>
                (vii)
                <p className={styles.countInside}>
                  information you provide via free text inputs on or via the The
                  Intellectual Disability Foundation of St George platform;
                </p>
              </p>
              <p className={styles.count}>
                (viii)<p className={styles.countInside}>your occupation;</p>
              </p>
              <p className={styles.count}>
                (ix) <p className={styles.countInside}>your preferences;</p>
              </p>
              <p className={styles.count}>
                (x)
                <p className={styles.countInside}>
                  your relationship to other users of The Intellectual
                  Disability Foundation of St George;
                </p>
              </p>
              <p className={styles.count}>
                (xi)
                <p className={styles.countInside}>
                  information about you, which is held by third parties, where
                  you have provided your separate consent to such collection,
                  such as information that is or was held by the National
                  Disability Insurance Agency; and
                </p>
              </p>
              <p className={styles.count}>
                (xii)
                <p className={styles.countInside}>
                  other personal information that may be required in order to
                  facilitate your dealings with us.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George may also
                  collect ‘health information’ as defined under the Privacy Act
                  1998 (Cth), such as information about your health or
                  disability, doctors or other health professionals you have
                  seen or health services you have received.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>2. Sensitive information</p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  Sensitive information is defined under the Privacy Act 1988
                  (Cth) as “Information or an opinion about an individual’s:
                  racial or ethnic origin; political opinions; membership of a
                  political association; religious beliefs or affiliations;
                  philosophical beliefs; membership of a professional or trade
                  association; membership of a trade union; sexual orientation
                  or practices; criminal record; or health information”.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  Without your consent, we will not collect information
                  sensitive information. Sensitive information will only be
                  collected if it is specifically required for operational
                  purposes. This is subject to certain exceptions such as when
                  collection is required by law, or when the information is
                  necessary for the establishment, exercise or defense of a
                  legal claim.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              3. Purposes of information collection and storage
            </p>
            <p className={styles.textDescription}>
              <span>(a)</span> Where an individual has provided consent, The
              Intellectual Disability Foundation of St George will use and
              disclose the personal information we collect to:
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  provide and improve our services to our clients and their
                  family members;
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  process donations and communicate with our donors and
                  supporters, including sending them information (which may be
                  by phone, email or other electronic means);
                </p>
              </p>
              <p className={styles.count}>
                (iii)
                <p className={styles.countInside}>
                  communicating with our clients and their family members,
                  donors and supporters, and volunteers (including responding to
                  queries and complaints) and distributing our publications,
                  conducting events and raising awareness about our services;
                  and
                </p>
              </p>
              <p className={styles.count}>
                (iv)
                <p className={styles.countInside}>
                  our general business activities, including interacting with
                  contractors and service providers, billing and administration
                  including measuring and assessing the level of support we
                  receive and the effectiveness of our fundraising activities
                  and assessing applicants for positions with us.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>(b)</span> We will not share any of your personal
              information with third parties without your consent except:
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  if we are required by law or we believe in good faith that
                  such action is necessary in order to comply with law,
                  cooperate with law enforcement or other government agencies,
                  or comply with a legal process served on the company
                  (including other service providers or insurers) or court
                  order;
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  the disclosure of the information will prevent or lessen a
                  serious and imminent threat to somebody's life or health;
                </p>
              </p>
              <p className={styles.count}>
                (iii)
                <p className={styles.countInside}>
                  to our contractors, service providers and volunteers only to
                  the extent necessary for them to perform their duties to us.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  We are obliged to report to the Australian government and
                  other bodies on the services they fund us to provide. Reports
                  cover demographic and service use information only.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              4. Processes for collecting and storing information
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George has
                  systems and procedures in place to protect personal
                  information from misuse and loss, as well as from unauthorised
                  access, modification or disclosure. These steps include:
                </p>
              </p>
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  paper-based records which are held securely;
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  access to personal information is on a need-to-know basis, by
                  authorised personnel;
                </p>
              </p>
              <p className={styles.count}>
                (iii)
                <p className={styles.countInside}>
                  storage and data systems are regularly updated and audited;
                  and
                </p>
              </p>
              <p className={styles.count}>
                (iv)
                <p className={styles.countInside}>
                  Microkeeper Payroll system & Shiftcare.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  When no longer required, personal information is either
                  archived or destroyed in accordance with federal law.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              5. Accessing and correcting your personal information
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George aims to
                  ensure that all personal information held about a person is
                  accurate, up to date, complete and relevant before acting on
                  it. If a person learns that the personal information that The
                  Intellectual Disability Foundation of St George holds about
                  them is inaccurate, outdated, incomplete, irrelevant or
                  misleading that person can contact The Intellectual Disability
                  Foundation of St George through the methods detailed in
                  Section 7 so that the information can be updated accordingly.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  Where a person requests The Intellectual Disability Foundation
                  of St George to correct the personal information we hold about
                  them, we will action this request promptly. A person can
                  request that we notify this change to any other agencies or
                  organisations that we have previously disclosed the personal
                  information too.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  If we do not agree to correct our records as requested, we
                  will give written notice of the decision, setting out our
                  reasons for refusing this request and how the person can lodge
                  a complaint about our decision.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>6. Making a complaint</p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  You may make a complaint about our handling of your personal
                  information, including if you think we have breached the
                  Privacy Act, by contacting The Intellectual Disability
                  Foundation of St George in writing, by email, mail or fax to
                  the contact information set out at the end of this privacy
                  policy.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George will aim
                  to resolve your complaint within 7 seven (7) days from when
                  your request was made. If we are not able to resolve your
                  complaint, you may wish to contact the Office of the
                  Australian Information Commissioner at the details set out
                  below.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>7. Contact information</p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                <p
                  className={`${styles.countInside} ${styles.countInsideAdditional}`}
                >
                  If you would like to leave feedback or complain about the
                  service you have received from us or you feel that we have
                  breached your privacy obligations, please contact us through
                  any of the following methods.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                <p className={styles.countInside}>
                  Phone: (02) 8566 2800
                  <br />
                  Email: admin@idfstgeorge.org.au
                  <br />
                  Postal Address: 50 Beach Street Kogarah, Sydney, New South
                  Wales, 2217
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                <p className={styles.countInside}>
                  If you want to obtain additional information on your privacy
                  rights and how you can enforce them, you can visit the website
                  of the Office of the Australian Information Commissioner at:
                  http://www.privacy.gov.au or http://www.oaic.gov.au/
                </p>
              </p>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NDISPrivacy;
