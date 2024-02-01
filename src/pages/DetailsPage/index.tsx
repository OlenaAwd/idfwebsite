import { useRef, useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { useLocation, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';

import styles from './DetailsPage.module.scss';
import doodle from '../../assets/Doodle.svg';
import WaveUp2 from '../../assets/VectorUp2.svg';
import WaveDown2 from '../../assets/VectorDown2.svg';
import detailsDataImg from '../../assets/detailesMockedImg.webp';
import textImg from '../../assets/Texts.webp';
import { IBlogProps } from '../../types/blogTypes';
import BlogService from '../../services/BlogService';
import Loader from '../../components/Loader';
import LazyImgComponent from '../../components/LazyImgComponent';

const DetailsPage = () => {
    const { state } = useLocation();
    const params = useParams();
    const [title, settitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [blog, setBlog] = useState<IBlogProps>({
    id: '',
    title: '',
    text: '',
    description: '',
    title2: '',
    text2: '',
    title3: '',
    text3: '',
    title4: '',
    text4: '',
    title5: '',
    text5: '',
    title6: '',
    text6: '',
    conclusion: '',
  });
  
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

  useEffect(() => {
    setLoading(true);
    async function fetchblog() {
      const mcardData: IBlogProps = await BlogService.getBlog(params.id);
      setBlog(mcardData);
      setLoading(false);
    }
      fetchblog();

        settitle(state.title); 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) <Loader />;

  return (
    <>
      <Helmet>
        <title>Our Stories and News - IDF Foundation Updates</title>
        <meta
          name="description"
          content="Stay informed with the latest stories and news from IDF Foundation. Explore our updates, events, and important information about our organization."
        />
      </Helmet>
      <HeaderHome onSearch={handleSearch} />
      <main ref={contentRef}>
        <section className={styles.titleSection}>
          <div className={styles.detailsImgContainer}>
                <LazyImgComponent src={ blog.blog_img } alt="details" />
          </div>
          <div className={styles.textContainer}>
                      <h1 className={styles.detailsTitle}>{blog.blog_label}</h1>
            <h2 className={styles.detailsSubTitle}>
                          {title}
            </h2>
            <span>An IDF Insight</span>
          </div>
          <div className={styles.doodleImgContainer}>
            <LazyImgComponent src={doodle} alt="doodle" />
          </div>
          <div className={styles.waveContainer}>
            <LazyImgComponent src={WaveUp2} alt="wave" />
            <LazyImgComponent src={WaveDown2} alt="wave" />
          </div>
        </section>
        <section className={styles.descriptionSection}>
          {
            <div key={blog.id}>
              {blog.description && (
                <p className={styles.annotationText}>{blog.description}</p>
              )}
              <div className={styles.gridContainer}>
                <div className={styles.gridCard}>
                  <h3 className={styles.cardTitle}>{blog.title}</h3>
                  <p style={{whiteSpace: "pre-wrap"}}
                    className={styles.cardText}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(blog.text),
                    }}
                  />
                </div>

                <div className={styles.gridCard}>
                {blog.title2 && (<h3 className={styles.cardTitle}>{blog.title2}</h3>)}
                {blog.text2 && (<p
                    className={styles.cardText}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(blog.text2),
                    }}
                />)}
                </div>

                <div className={styles.gridCard}>
                  {blog.title3 && (<h3 className={styles.cardTitle}>{blog.title3}</h3>)}
                  {blog.text3 && (<p
                    className={styles.cardText}
                    dangerouslySetInnerHTML={{
                      __html: sanitizer(blog.text3),
                    }}
                    />)}
                    <div style={{ marginTop: '60px' }}>
                        {blog.title4 && (<h3 className={styles.cardTitle}>{blog.title4}</h3>)}
                        {blog.text4 && (<p
                              className={styles.cardText}
                              dangerouslySetInnerHTML={{
                                __html: sanitizer(blog.text4),
                              }}
                        />)}
                  </div>
                </div>
                    <div className={styles.blogimagecms}
                        style={blog.blog_img2 == null && typeof blog.blog_img2 === 'string'  ?
                            { backgroundImage: `url(${blog.blog_img2})` } :
                            { backgroundImage: `url(${detailsDataImg})` } 
                        } >


                </div>

                <div className={styles.gridCard}>
                  {blog.title5 && (
                    <h3 className={styles.cardTitle}>{blog.title5}</h3>
                  )}
                  {blog.text5 && (
                    <p
                      className={styles.cardText}
                      dangerouslySetInnerHTML={{
                        __html: sanitizer(blog.text5),
                      }}
                    />
                  )}
                </div>

                <div className={styles.gridCard}>
                    {blog.title6 && (
                        <h3 className={styles.cardTitle}>{blog.title6}</h3>
                    )}
                    {blog.text6 && (
                        <p
                            className={styles.cardText}
                            dangerouslySetInnerHTML={{
                                __html: sanitizer(blog.text6),
                            }}
                        />
                    )}
                </div>



              </div>
                    
             <div className={styles.textImgContainer}
                              style={blog.blog_img3 != null && typeof blog.blog_img3 === 'string' ?
                                  { backgroundImage: `url(${blog.blog_img3})` } :
                                  { backgroundImage: `url(${textImg})` } 

                              } >

              </div>
              <p className={styles.annotationText}>{blog.conclusion}</p>
            </div>
          }
       
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DetailsPage;
