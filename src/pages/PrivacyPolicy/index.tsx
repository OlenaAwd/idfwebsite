import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
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
      <title>Privacy Policy - Intellectual Disability Foundation of St. George Pty Ltd</title>
      <meta name="description" content="Learn about our commitment to managing personal information in accordance with Australian Privacy Principles and other applicable privacy laws. Discover how we handle personal information and what information we collect. Your privacy is important to us." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.mainSection}>
          <div className={styles.wrapper}>
            <h1 className={styles.header}>Privacy Policy</h1>
            <p className={styles.boldText}>
              1. The Intellectual Disability Foundation of St George Pty Ltd
              commitment to privacy
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  (ABN: 76 389 462 946), its subsidiaries and affiliates in
                  Australia (collectively referred to as "we" and "us") are
                  committed to managing personal information in accordance with
                  the Australian Privacy Principles under the Privacy Act 1988
                  (Cth) and in accordance with other applicable privacy laws.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  This document sets out our policies for managing your personal
                  information and is referred to as our Privacy Policy.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  In this Privacy Policy, “we” and “us” refers to The
                  Intellectual Disability Foundation of St George Pty Ltd and
                  “you” refers to any individual about whom we collect personal
                  information.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              2. About The Intellectual Disability Foundation of St George Pty
              Ltd
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd is
                  a not-for-profit, providing supported employment to people
                  with a disability in the St George and surrounding areas..
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  offers a complete range of services, including employment,
                  social programs, skills development, and more.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  Please contact us for a full list of the companies which
                  comprise The Intellectual Disability Foundation of St George
                  Pty Ltd and which are subject to this Privacy Policy.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              3. What information does The Intellectual Disability Foundation of
              St George Pty Ltd collect about you?
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>3.1 Clients and prospective clients</b>
              </span>
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  When you enquire about our services or when you become a
                  client of The Intellectual Disability Foundation of St George
                  Pty Ltd, a record is made which includes your personal
                  information.
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  The type of personal information that we collect will vary
                  depending on the circumstances of collection and the kind of
                  service that you request from us, but will typically include:
                  <p className={styles.countInsideThird}>
                    (A)
                    <p className={styles.countInsideLetters}>
                      your name, e-mail, postal address and other contact
                      details;
                    </p>
                  </p>
                  <p className={styles.countInsideThird}>
                    (B)
                    <p className={styles.countInsideLetters}>
                      information about your employer or an organisation who you
                      represent;
                    </p>
                  </p>
                  <p className={styles.countInsideThird}>
                    (C)
                    <p className={styles.countInsideLetters}>
                      your professional details; and
                    </p>
                  </p>
                  <p className={styles.countInsideThird}>
                    (D)
                    <p className={styles.countInsideLetters}>
                      any additional personal information you provide to us, or
                      authorise us to collect, as part of your interaction with
                      The Intellectual Disability Foundation of St George Pty
                      Ltd.
                    </p>
                  </p>
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>3.2 Prospective employees or applicants</b>
              </span>
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  We collect personal information when recruiting personnel,
                  such as your name, contact details, qualifications and work
                  history. Generally, we will collect this information directly
                  from you.
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  We may also collect personal information from third parties in
                  ways which you would expect (for example, from recruitment
                  agencies or referees you have nominated). Before offering you
                  a position, we may collect additional details such as your tax
                  file number and superannuation information and other
                  information necessary to conduct background checks to
                  determine your suitability for certain positions (for example,
                  positions which involve working with children).
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>3.3 Other individuals</b>
              </span>
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  may collect personal information about other individuals who
                  are not clients of The Intellectual Disability Foundation of
                  St George Pty Ltd. This includes customers and members of the
                  public who participate in events we are involved with,
                  individual service providers and contractors to The
                  Intellectual Disability Foundation of St George Pty Ltd, and
                  other individuals who interact with The Intellectual
                  Disability Foundation of St George Pty Ltd on a commercial
                  basis. The kinds of personal information we collect will
                  depend on the capacity in which you are dealing with The
                  Intellectual Disability Foundation of St George Pty Ltd.
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  If you are participating in an event we are managing or
                  delivering, we may take images or audio-visual recordings
                  which identify you.
                </p>
              </p>

              <p className={styles.count}>
                (iii)
                <p className={styles.countInside}>
                  In limited circumstances, The Intellectual Disability
                  Foundation of St George Pty Ltd may collect information which
                  is considered sensitive information. For example, if you are
                  injured at an event promoted or delivered by The Intellectual
                  Disability Foundation of St George Pty Ltd we may collect
                  health information about you in an emergency or otherwise with
                  your consent.
                </p>
              </p>
              <p className={styles.count}>
                (iv)
                <p className={styles.countInside}>
                  We may collect personal information about children (for
                  example, when children participate in events we are involved
                  with). Where children do not have sufficient maturity and
                  understanding to make decisions about their personal
                  information, we will require their parents or guardians to
                  make decisions on their behalf.
                </p>
              </p>
              <p className={styles.count}>
                (v)
                <p className={styles.countInside}>
                  You can always decline to give The Intellectual Disability
                  Foundation of St George Pty Ltd any personal information we
                  request, but that may mean we cannot provide you with some or
                  all of the services you have requested. If you have any
                  concerns about personal information we have requested, please
                  let us know.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>3.4 Visitors to our websites</b>
              </span>
              <p className={styles.count}>
                The way in which we handle the personal information of visitors
                to our websites is discussed below.
              </p>
            </p>
            <p className={styles.boldText}>
              4. How and why does The Intellectual Disability Foundation of St
              George Pty Ltd collect and use your personal information?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  collects personal information reasonably necessary to carry
                  out our business, to assess and manage our clients' needs, and
                  provide services including employment, social programs, skills
                  development, and more. We may also collect information to
                  fulfil administrative functions associated with these
                  services, for example billing, entering into contracts with
                  you or third parties and managing client relationships.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  The purposes for which The Intellectual Disability Foundation
                  of St George Pty Ltd usually collects and uses personal
                  information depends on the nature of your interaction with us,
                  but may include:
                </p>
              </p>
              <p className={styles.countDeep}>
                (i)
                <p className={styles.countInside}>
                  responding to requests for information and other general
                  inquiries;
                </p>
              </p>
              <p className={styles.countDeep}>
                (ii)
                <p className={styles.countInside}>
                  managing, planning, advertising and administering programs,
                  events, competitions and performances;
                </p>
              </p>
              <p className={styles.countDeep}>
                (iii)
                <p className={styles.countInside}>
                  developing and expanding our facilities and services;
                  informing you of our activities, events, facilities and
                  services;
                </p>
              </p>
              <p className={styles.countDeep}>
                (iv)
                <p className={styles.countInside}>
                  recruitment processes (including for volunteers, internships
                  and work experience); and
                </p>
              </p>
              <p className={styles.countDeep}>
                (v)
                <p className={styles.countInside}>
                  researching, and responding to enquires and complaints.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  generally collects personal information directly from you. We
                  may collect and update your personal information over the
                  phone, by email, over the internet or social media, or in
                  person. We may also collect personal information about you
                  from other sources, for example:
                </p>
              </p>
              <p className={styles.countDeep}>
                (i)
                <p className={styles.countInside}>
                  our affiliated and related companies; and
                </p>
              </p>
              <p className={styles.countDeep}>
                (ii)
                <p className={styles.countInside}>
                  third party suppliers and contractors who assist us to operate
                  our business.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (d){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  also collects and uses personal information for market
                  research purposes and to innovate our delivery of products and
                  services.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              5. How does The Intellectual Disability Foundation of St George
              Pty Ltd interact with you via the internet?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  You may visit our website (www.idfstgeorge.org.au) without
                  identifying yourself. If you identify yourself (for example,
                  by providing your contact details in an enquiry), any personal
                  information you provide to The Intellectual Disability
                  Foundation of St George Pty Ltd will be managed in accordance
                  with this Privacy Policy.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd's
                  website uses cookies. A “cookie” is a small file stored on
                  your computer's browser, which assists in managing customised
                  settings of the website and delivering content. We collect
                  certain information such as your device type, browser type, IP
                  address, pages you have accessed on our websites and on
                  third-party websites. You are not identifiable from such
                  information.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  You can use the settings in your browser to control how your
                  browser deals with cookies. However, in doing so, you may be
                  unable to access certain pages or content on our website.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (d){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd's
                  website may contain links to third-party websites. The
                  Intellectual Disability Foundation of St George Pty Ltd is not
                  responsible for the content or privacy practices of websites
                  that are linked to our website.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              6. Can you deal with The Intellectual Disability Foundation of St
              George Pty Ltd anonymously?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                The Intellectual Disability Foundation of St George Pty Ltd will
                provide individuals with the opportunity to remain anonymous or
                use a pseudonym in their dealings with us where it is lawful and
                practicable (for example, when making a general enquiry).
                Generally, it is not practicable for The Intellectual Disability
                Foundation of St George Pty Ltd to deal with individuals
                anonymously or pseudonymously on an ongoing basis. If we do not
                collect personal information about you, you may be unable to
                utilise our services or participate in our events, programs or
                activities we manage or deliver.
              </p>
            </p>
            <p className={styles.boldText}>
              7. How does The Intellectual Disability Foundation of St George
              Pty Ltd hold information?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  stores information in paper- based files or other electronic
                  record keeping methods in secure databases (including trusted
                  third party storage providers based in Australia or overseas).
                  Personal information may be collected in paper-based documents
                  and converted to electronic form for use or storage (with the
                  original paper-based documents either archived or securely
                  destroyed). We take reasonable steps to protect your personal
                  information from misuse, interference and loss and from
                  unauthorised access, modification or disclosure.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  maintains physical security over paper and electronic data
                  stores, such as through locks and security systems at our
                  premises. We also maintain computer and network security, for
                  example, we use firewalls (security measures for the internet)
                  and other security systems such as user identifiers and
                  passwords to control access to our computer systems.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  Our websites do not necessarily use encryption or other
                  technologies to ensure the secure transmission of information
                  via the internet. Users of our websites are encouraged to
                  exercise care in sending personal information via the
                  internet.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (d){' '}
                <p className={styles.countInside}>
                  We take steps to destroy or de-identify information that we no
                  longer require.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              8. Does The Intellectual Disability Foundation of St George Pty
              Ltd use or disclose your personal information for direct
              marketing?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  may use or disclose your personal information for the purpose
                  of informing you about our services, upcoming promotions and
                  events, or other opportunities that may interest you. If you
                  do not want to receive direct marketing communications, you
                  can opt-out at any time by contacting us using the contact
                  details below.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  If you opt-out of receiving marketing material from us, The
                  Intellectual Disability Foundation of St George Pty Ltd may
                  still contact you in relation to its ongoing relationship with
                  you.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              9. How does The Intellectual Disability Foundation of St George
              Pty Ltd use and disclose personal information?
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>9.1 For clients</b>
              </span>
              <p className={styles.count}>
                The purposes for which we may use and disclose your personal
                information will depend on the services we are providing you.
                For example, if you have engaged us to deliver a service, we may
                disclose information about you to service providers where this
                is relevant to our services.
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>9.2 For customers and participants</b>
              </span>
              <p className={styles.count}>
                If you are a customer or participant in an event, we may
                disclose your personal information to our clients and venues
                where this is reasonably necessary for, and relevant to, the
                delivery of the event. We may use images or audio-visual
                recordings which identify you for promotional purposes where you
                would reasonably expect this to occur.
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>9.3 Disclosure to contractors and other service providers</b>
              </span>
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  may disclose information to third parties we engage in order
                  to provide our services, including contractors and service
                  providers used for data processing, data analysis, customer
                  satisfaction surveys, information technology services and
                  support, website maintenance/development, printing, archiving,
                  mail-outs, and market research.
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  Personal information may also be shared between related and
                  affiliated companies of The Intellectual Disability Foundation
                  of St George Pty Ltd, located in Australia or overseas.
                </p>
              </p>
              <p className={styles.count}>
                (iii)
                <p className={styles.countInside}>
                  Third parties to whom we have disclosed your personal
                  information may contact you directly to let you know they have
                  collected your personal information and to give you
                  information about their privacy policies.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>9.4 Use and disclosure for administration and management</b>
              </span>
              <p className={styles.count}>
                The Intellectual Disability Foundation of St George Pty Ltd will
                also use and disclose personal information for a range of
                administrative, management and operational purposes.
                <br /> This includes:
              </p>
              <p className={styles.count}>
                (i)
                <p className={styles.countInside}>
                  administering billing and payments and debt recovery;
                </p>
              </p>
              <p className={styles.count}>
                (ii)
                <p className={styles.countInside}>
                  planning, managing, monitoring and evaluating our services;
                </p>
              </p>
              <p className={styles.count}>
                (iii)
                <p className={styles.countInside}>
                  quality improvement activities;
                </p>
              </p>
              <p className={styles.count}>
                (vi)
                <p className={styles.countInside}>
                  statistical analysis and reporting;
                </p>
              </p>
              <p className={styles.count}>
                (v)
                <p className={styles.countInside}>
                  training staff, contractors and other workers;
                </p>
              </p>
              <p className={styles.count}>
                (vi)
                <p className={styles.countInside}>
                  risk management and management of legal liabilities and claims
                  (for example, liaising with insurers and legal
                  representatives);
                </p>
              </p>
              <p className={styles.count}>
                (vii)
                <p className={styles.countInside}>
                  responding to enquiries and complaints regarding our services;
                </p>
              </p>
              <p className={styles.count}>
                (viii)
                <p className={styles.countInside}>
                  obtaining advice from consultants and other professional
                  advisers; and
                </p>
              </p>
              <p className={styles.count}>
                (ix)
                <p className={styles.countInside}>
                  responding to subpoenas and other legal orders and
                  obligations.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <span>
                <b>9.5 Other uses and disclosures</b>
              </span>
              <p className={styles.count}>
                We may use and disclose your personal information for other
                purposes explained at the time of collection or otherwise as set
                out in this Privacy Policy.
              </p>
            </p>
            <p className={styles.boldText}>
              10. How can you access or seek correction of your personal
              information?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  You are entitled to access your personal information held by
                  The Intellectual Disability Foundation of St George Pty Ltd on
                  request. To request access to your personal information please
                  contact our privacy officer using the contact details set out
                  below.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  You will not be charged for making a request to access your
                  personal information but you may be charged for the reasonable
                  time and expense incurred in compiling information in response
                  to your request.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>
                  We will take reasonable steps to ensure that the personal
                  information we collect, use or disclose is accurate, complete
                  and up-to-date. You can help us to do this by letting us know
                  if you notice errors or discrepancies in information we hold
                  about you and letting us know if your personal details change.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (d){' '}
                <p className={styles.countInside}>
                  However, if you consider any personal information we hold
                  about you is inaccurate, out-of- date, incomplete, irrelevant
                  or misleading you are entitled to request correction of the
                  information. After receiving a request from you, we will take
                  reasonable steps to correct your information.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (e){' '}
                <p className={styles.countInside}>
                  We may decline your request to access or correct your personal
                  information in certain circumstances in accordance with the
                  Australian Privacy Principles. If we do refuse your request,
                  we will provide you with a reason for our decision and, in the
                  case of a request for correction, we will include a statement
                  with your personal information about the requested correction.
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              11. What should you do if you have a complaint about the handling
              of your personal information?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  You may contact The Intellectual Disability Foundation of St
                  George Pty Ltd at any time if you have any questions or
                  concerns about this Privacy Policy or about the way in which
                  your personal information has been handled.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  You may make a complaint about privacy to the privacy officer
                  at the contact details set out below.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (с){' '}
                <p className={styles.countInside}>
                  The privacy officer will first consider your complaint to
                  determine whether there are simple or immediate steps which
                  can be taken to resolve the complaint. We will generally
                  respond to your complaint within a week.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (d){' '}
                <p className={styles.countInside}>
                  If your complaint requires more detailed consideration or
                  investigation, we will acknowledge receipt of your complaint
                  within a week and endeavour to complete our investigation into
                  your complaint promptly. We may ask you to provide further
                  information about your complaint and the outcome you are
                  seeking. We will then typically gather relevant facts, locate
                  and review relevant documents and speak with individuals
                  involved.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (e){' '}
                <p className={styles.countInside}>
                  In most cases, we will investigate and respond to a complaint
                  within 30 days of receipt of the complaint. If the matter is
                  more complex or our investigation may take longer, we will let
                  you know.
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (f){' '}
                <p className={styles.countInside}>
                  If you are not satisfied with our response to your complaint,
                  or you consider that The Intellectual Disability Foundation of
                  St George Pty Ltd may have breached the Australian Privacy
                  Principles or the Privacy Act, a complaint may be made to the
                  Office of the Australian Information Commissioner. The Office
                  of the Australian Information Commissioner can be contacted by
                  telephone on 1300 363 992 or by using the contact details on
                  the website (www.oaic.gov.au).
                </p>
              </p>
            </p>
            <p className={styles.boldText}>
              12. How changes are made to this Privacy Policy?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                The Intellectual Disability Foundation of St George Pty Ltd may
                amend this Privacy Policy from time to time, with or without
                notice to you. We recommend that you visit our website
                (www.idfstgeorge.org.au) regularly to keep up to date with any
                changes.
              </p>
            </p>
            <p className={styles.boldText}>
              13. How can you contact The Intellectual Disability Foundation of
              St George Pty Ltd?
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                The contact details for The Intellectual Disability Foundation
                of St George Pty Ltd are:
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (a){' '}
                <p className={styles.countInside}>
                  The Intellectual Disability Foundation of St George Pty Ltd
                  privacy officer: Spiro Pissas
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (b){' '}
                <p className={styles.countInside}>
                  50 Beach Street Kogarah, Sydney, New South Wales, 2217
                </p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                (c){' '}
                <p className={styles.countInside}>admin@idfstgeorge.org.au</p>
              </p>
            </p>
            <p className={styles.textDescription}>
              <p className={styles.paragraph}>
                This Privacy Policy was last updated on 10th July 2023
              </p>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
