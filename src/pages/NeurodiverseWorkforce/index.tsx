import { useRef } from 'react'
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome'
import Footer from '../../components/Footer';
import { workforceData } from '../../constants/neuroDiversityData';
import styles from "./NeurodiverseWorkforce.module.scss";

const  NeurodiverseWorkforce= () => {
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
      <title>Bridging the Neurodiversity Gap in the Workforce: Lived Experiences and Inclusivity</title>
      <meta name="description" content="Explore the challenges and unique strengths of neurodiverse individuals in the workforce. Learn about the phenomenon of 'masking,' communication barriers, sensory sensitivity, and the power of embracing neurodiverse talent. Discover how creating inclusive work environments and neurotypical empathy can bridge the neurodiversity gap." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
              <section className={styles.mainSection}>
                  <h1 className={styles.title}>Bridging the Neurodiversity Gap: Lived Experiences of Neurodiverse Individuals in the Workforce</h1>
                  <p className={styles.description}>The modern workforce is a melting pot of individuals with diverse abilities, talents, and perspectives. Among these differences lies neurodiversity, a concept that acknowledges the natural variation in brain function and cognitive traits. Neurodiverse individuals, such as those with autism, ADHD, dyslexia, and other neurological conditions, contribute unique strengths to the workplace. However, they often face distinct challenges when interacting and relating to neurotypical colleagues. In this article, we explore the lived experiences of neurodiverse people in the workforce, shedding light on the hurdles they encounter and the potential for fostering inclusivity and understanding.</p>

                      {workforceData.map(item => (
                          <div key={item.id} className={styles.wrapper}>
                                <div className={styles.headerContainer}>
                                    <span className={styles.description}>{item.id}.</span>&nbsp;
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                      ))}
                  <p className={`${styles.description} ${styles.lastDescription}`}>Embracing neurodiversity in the workforce is not just a matter of meeting legal requirements or appearing socially responsible. It is about fostering a truly inclusive environment that recognizes and celebrates the diverse talents and contributions of every individual. By understanding and accommodating the lived experiences of neurodiverse people, we can create a workplace where everyone can thrive, contribute meaningfully, and unlock their full potential. Together, we can bridge the neurodiversity gap and move towards a more equitable and compassionate future in the world of work.</p>
               </section>
          </main>
          <Footer />
      </>
  )
}

export default NeurodiverseWorkforce