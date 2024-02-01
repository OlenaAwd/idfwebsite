import React, { useRef } from 'react'
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome'
import Footer from '../../components/Footer';
import {hireData} from '../../constants/neuroDiversityData';
import styles from "./NeurodiversityHire.module.scss";

const NeurodiversityHire = () => {
    const sanitizer = DOMPurify.sanitize;
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
      <title>Hiring Process Bias Survey: Inclusivity for Neurodiverse Talent</title>
      <meta name="description" content="Participate in our survey on assessing and addressing bias in the hiring process for neurodiverse talent. Your insights will help create a more inclusive workplace that values diversity and neurodiversity." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
              <section className={styles.mainSection}>
                  <h1 className={styles.title}>Checking for bias in the hiring process of Neurodiverse talent</h1>
                  <p className={`${styles.description} ${styles.topDescription}`}>
                      Before completing this survey it is recommended you consider what roles and responsibilities in which neurodiversity would be an asset and why.
                  </p>

                      {hireData.map(item => (
                          <div key={item.id} className={styles.wrapper}>
                                <div className={styles.headerContainer}>
                                    <span className={styles.description}>{item.id}.</span>&nbsp;
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                              </div>
                             {item.description ? <p
                                className={styles.description}
                                dangerouslySetInnerHTML={{
                                    __html: sanitizer(item.description),
                                }}
                            /> : null}
                            </div>
                      ))}
                 
               </section>
          </main>
          <Footer />
      </>
  )
}

export default NeurodiversityHire