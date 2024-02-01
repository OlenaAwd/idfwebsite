import { useRef } from 'react'
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome'
import Footer from '../../components/Footer';
import styles from "./NeuroInclusiveMindset.module.scss";
import { mindsetData } from '../../constants/neuroDiversityData';

const  NeuroInclusiveMindset= () => {
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
      <title>Neuro-Inclusive Mindset Checklist for Organizations</title>
      <meta name="description" content="Explore our checklist for developing a neuro-inclusive mindset within your organization. Embrace diversity, inclusivity, and the unique strengths of neurodiverse individuals. Foster an environment that supports neurodiversity and unlocks its potential." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
              <section className={styles.mainSection}>
                  <h1 className={styles.title}>Does your organisation have a Neuro-inclusive mindset?</h1>
                  <h2 className={styles.subTitle}>The mindset checklist</h2>
                  <p className={styles.description}>Embracing neurodiverse talent requires a specific organisational mindset that values diversity, inclusivity, and recognizes the unique strengths that neurodiverse individuals can bring to the workplace. Below is a checklist for managers to cultivate an environment that is best suited for embracing neurodiverse talent:</p>

                      {mindsetData.map(item => (
                          <div key={item.id} className={styles.wrapper}>
                                <div className={styles.headerContainer}>
                                    <span className={styles.description}>{item.id}.</span>&nbsp;
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                      ))}
                  <p className={`${styles.description} ${styles.lastDescription}`}>By adopting this checklist, managers can help create an environment that celebrates neurodiversity, fosters inclusivity, and maximizes the potential of all employees, including those with neurodiverse characteristics.</p>
               </section>
          </main>
          <Footer />
      </>
  )
}

export default NeuroInclusiveMindset