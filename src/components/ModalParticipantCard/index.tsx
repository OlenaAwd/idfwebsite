import React, { useState, FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Modal, Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IModalParticipantCardProps } from '../../types/modalType';
import { participantModalStyles } from '../../constants/styles/RequestDemoModal';
import styles from './ModalParticipantCard.module.scss';
import participantImg from "../../assets/participantCardModal/Picture 1.webp";
import participantImg2 from "../../assets/participantCardModal/Picture2.webp";
import participantImg3 from "../../assets/participantCardModal/Picture3.webp";
import participantImg4 from "../../assets/participantCardModal/garden.webp";
import participantImg5 from "../../assets/participantCardModal/learn/carfting2.webp";
import participantImg6 from "../../assets/participantCardModal/learn/holistic2.webp";
import participantImg7 from "../../assets/participantCardModal/learn/joy2.webp";
import participantImg8 from "../../assets/participantCardModal/learn/nature.webp";

const ModalParticipantCard: FC<IModalParticipantCardProps> = ({ title, btnTitle, isAboutPage, descr, img }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
   
  };



  return (
    <div>
       <p
          className={styles.btn}
           onClick={handleOpen}
        >
          {btnTitle}
        </p>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={participantModalStyles}>
            {title === "Jobs people love" && (
               <>
                <h3 className={styles.modalHeader}>{title}</h3>
                <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div>
                <p className={styles.modalText}>At IDF, we believe in crafting employment experiences that resonate with individual strengths and aspirations. Our diverse range of opportunities ensures there's a perfect fit for everyone.  
                </p>
                    </div>
                    <div>
                <h3 className={styles.modalTitle}> Brand Partnerships</h3>
                <p className={styles.modalText}>Take pride in packing for renowned brands like Kellogg's and Lindt. Experience first hand the thrill of being behind the scenes of these global giants. 
                </p>
                    </div>
                <div>
                <h3 className={styles.modalTitle}>Green Thumbs Welcome</h3>
                <p className={styles.modalText}>Dive into our garden centre, where we cultivate and offer a wide variety of plants for sale. Nurturing growth, both for plants and your career. 
                </p>
                </div>
                <div>
                <h3 className={styles.modalTitle}>Wellness from Within</h3>
                <p className={styles.modalText}>Join our newly launched wellness brand. Crafted in-house, we believe in holistic well-being, and you could be a key part of this journey.
                </p>
                    </div>
                     <div>
                <h3 className={styles.modalTitle}>Digital Enthusiasts</h3>
                <p className={styles.modalText}>We're on the lookout for dynamic social media marketers. Help us amplify our story and make a significant online impact.
                </p>
                    </div>
                          <div>
                <h3 className={styles.modalTitle}>Admin Stars</h3>
                <p className={styles.modalText}> The backbone of any organisation, our administrative roles promise growth, challenge, and satisfaction. Join us at IDF, where every job is more than just a position—it's a path to personal and professional fulfilment. Grow with us; love what you do.
                </p>
                </div>
                  </div>
                  <div className={styles.imgContainer}>
                  <img src={participantImg} alt="participant" />
                </div>
                </div>
                </>
            )}
            {title === "Lifestyle activities" && (
              <>
                <h3 className={styles.modalHeader}>Engaging Lifestyle<br/> Activities</h3>
                <h4 className={styles.modalHeaderAdditional}>Skill-enhancing Courses </h4>
                <div className={styles.wrapper}>
                <div className={styles.container}>
    
                <p className={styles.modalText}>Unlock your potential with our curated courses. Whether you're looking to learn a new hobby or refine an existing skill, our courses are designed to equip you with the knowledge and tools necessary to excel. 
                </p>
                 <div>
                <h3 className={styles.modalTitle}>Wellness-focused Health and Fitness Sessions</h3>
                <p className={styles.modalText}>Your health is our priority. Engage in our tailored fitness programs, ranging from calming yoga sequences to energizing aerobic routines. Let our expert trainers guide you on a journey to physical well-being, ensuring you feel rejuvenated and empowered. 
                </p>
                </div>
                 <div>
                <h3 className={styles.modalTitle}>Practical Budgeting Workshops </h3>
                <p className={styles.modalText}>Navigate your finances with confidence. Our budgeting workshops offer insightful tips and hands-on exercises, teaching you to manage your money efficiently. From saving strategies to understanding expenses, gain mastery over your financial future.  
                </p>
                </div>
                <div>
                <h3 className={styles.modalTitle}>Immersive Gaming Experiences</h3>
                <p className={styles.modalText}>Step into the world of interactive gaming. Whether you're a seasoned gamer or just beginning, our diverse range of games promises hours of entertainment. Enjoy friendly competitions, collaborative team missions, and much more.  
                </p>
                </div>
                 <div>
                <h3 className={styles.modalTitle}>Hands-on Computing Tutorials</h3>
                <p className={styles.modalText}>Embrace the digital age with our computing tutorials. From basic operations to advanced software know-how, we ensure you're tech ready. Led by professionals, our sessions are both engaging and informative, preparing you for the digital world. 
                </p>
                </div>
                  <div>
                <h3 className={styles.modalTitle}>Entertaining Video Streaming Sessions</h3>
                <p className={styles.modalText}>Discover the art of streaming on platforms like YouTube and Twitch or delve into crafting compelling social videos. Forge a dynamic career in content streaming and cultivate a dedicated social media following. Embrace the digital wave and become a beacon for online audiences.
                </p>
                    </div>
                  </div>
                   <div className={styles.imgContainer}>
                  <img src={participantImg2} alt="participant" />
                </div>
                  </div>
                </>
            )
            }
            {title === "Career pathways" && (
              <>
                <h3 className={styles.modalHeader}>{title}</h3>
              <div className={styles.wrapper}>
                <div className={styles.container}>
           
                <p className={styles.modalText}>At IDF, we believe in creating transformative career journeys that not only empower individuals but also drive meaningful change in the world. Through our diverse range of social enterprises, we offer unparalleled opportunities in sectors poised for remarkable growth. Join us and shape a future that aligns with your passion and purpose.
                </p>
              <div>
                <h3 className={styles.modalTitle}>Wellness Product Manufacturing</h3>
                <p className={styles.modalText}>Dive deep into the world of holistic health with our wellness product manufacturing. Learn the intricacies of crafting high-quality, natural products that promote well-being. From sourcing raw materials to mastering the art of formulation, we provide a comprehensive foundation for a career in this booming sector. 
                </p>
                </div>
                   <div>
                <h3 className={styles.modalTitle}>Social Media Marketing</h3>
                <p className={styles.modalText}>Harness the power of the digital era. Our social media marketing pathway equips you with the skills to curate, communicate, and captivate. Learn to strategise, create engaging content, and understand the nuances of various platforms. Amplify brands, causes, or personal stories, and watch them resonate with a global audience.
                </p>
                </div>
                   <div>
                <h3 className={styles.modalTitle}>Hamper and Gifts Business</h3>
                <p className={styles.modalText}>Celebrate life’s special moments with our hamper and gifts enterprise. Understand the art of curating memorable gift sets, from sourcing unique products to creating beautiful presentations. This pathway offers a blend of creativity and business acumen, perfect for those who love to bring joy to others.
                </p>
                </div>
                  <div>
                <h3 className={styles.modalTitle}>Garden Centre</h3>
                <p className={styles.modalText}>For the green-thumbed enthusiasts, our garden centre pathway is a haven. Dive into the world of plants, from understanding their biology to mastering their care. This journey offers both hands-on experience and business insights, catering to those who dream of nurturing nature while building a sustainable enterprise.<br /><br/>
                  With IDF's Career Pathways, the road to professional success is not just about earning but also about learning, growing, and making a positive impact. Join us in our mission to create opportunities and futures full of potential.
                </p>
              </div>
                </div>
                <div className={styles.imgContainer}>
                  <img src={participantImg4} alt="participant" />
                </div>
              </div>
            </>
            )}
            {title === "Coming Soon: The SLES Program!" && (
                <>
                <h3 className={styles.modalHeader}>Coming Soon:<br/> The SLES Program!</h3>
              <div className={styles.wrapper}>
                <div className={styles.container}>
                <h3 className={styles.modalTitleSles}>Introducing: The School Leaver Employment<br/> Supports (SLES) Program</h3>
                <p className={styles.modalText}>Transitioning from school to adulthood is a significant milestone, and at IDF, we're dedicated to ensuring this journey is seamless, empowering, and filled with opportunities. We're thrilled to announce the upcoming launch of our School Leaver Employment Supports (SLES) Program, meticulously designed to span over two years. Participants will immerse themselves in a comprehensive experience across all our rapidly expanding social enterprises, from wellness product manufacturing to social media marketing and beyond.<br/><br/>
                  But that's not all! In our commitment to diverse skill development, we're excited to introduce new modules: the Barista Program, where participants will master the art of coffee making, and the Baking Program, a sweet journey into the world of pastries and bread.<br/><br/>
                  At IDF, we believe in nurturing potential and building futures. Stay tuned for the SLES program – where dreams take flight and aspirations become reality.
                </p>
                  </div>
                    <div className={styles.imgContainer}>
                  <img src={participantImg3} alt="participant" />
                </div>
                </div>
                </>
            )}
          
            {title === "Crafting a Digital Livelihood: The Power of Audience Building" &&
            <>
                <h3 className={styles.modalHeader}>{title}</h3>
              <div className={styles.wrapper}>
                <div className={styles.container}>
              <div>
                <h3 className={styles.modalTitle}>Crafting a Digital Livelihood: The Power of Audience Building</h3>
                <p className={styles.modalText}>The realm of digital content creation and streaming isn’t just about expressing oneself and connecting with like-minded communities; it's also a pathway to sustainable self-employment and financial independence.</p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Monetising Passion</h3>
                <p className={styles.modalText}>Platforms like YouTube and Twitch offer multiple avenues for creators to monetise their content. From ad revenue and sponsored content to merchandise sales and viewer donations, the potential for a steady income grows with an engaged audience.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Building a Personal Brand</h3>
                <p className={styles.modalText}>By consistently delivering quality content and interacting with viewers, individuals can establish a recognisable personal brand. This brand equity can then be leveraged for partnerships, sponsorships, and collaborations with businesses and other creators.
                </p>
                    </div>
                     <div>
                <h3 className={styles.modalTitle}>The Power of Niche Markets</h3>
                <p className={styles.modalText}>One of the most remarkable things about these platforms is that even niche content, which may appeal to specific segments of the audience, can amass a dedicated following. For those with intellectual disabilities and the neurodiverse community, this means their unique perspectives and stories can cater to an audience that truly values their content.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Diverse Revenue Streams</h3>
                <p className={styles.modalText}>Beyond standard platform monetization, a significant online presence can lead to opportunities like hosting events, workshops, or online courses. Moreover, affiliate marketing, where creators earn a commission by promoting products or services, offers another avenue for income.
                </p>
                </div>
                <div>
                <h3 className={styles.modalTitle}> Achieving Independence</h3>
                <p className={styles.modalText}>For many, especially those with intellectual disabilities and individuals within the neurodiverse spectrum, the flexibility and autonomy of self-employment are invaluable. Working from the comfort of one's home, setting personal schedules, and being one's own boss can be both empowering and accommodating of individual needs.
                </p>
                    </div><br/>
                     <p className={styles.modalText}>With dedication, the right strategies, and continued learning, building an audience on platforms like YouTube and Twitch can be more than just a hobby. It can be a viable career, offering both financial rewards and personal fulfilment. At IDF, we're committed to guiding and supporting every step of this exciting journey towards self-employment and a prosperous digital livelihood.
                </p>
                </div>
                <div className={styles.imgContainer}>
                  <img src={participantImg5} alt="participant" />
                </div>
              </div>
            </>
            }
          
          {title === "Harnessing Holistic Health: Wellness Manufacturing" &&
            <>
                <h3 className={styles.modalHeader}>{title}</h3>
              <div className={styles.wrapper}>
                <div className={styles.container}>
              <div>
                <p className={styles.modalText}>In the burgeoning world of health and well-being, wellness manufacturing stands as a beacon of innovation, bridging ancient traditions with modern science to deliver products that resonate with today’s health-conscious consumers.</p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Creating Wholesome Products</h3>
                <p className={styles.modalText}>At the intersection of nature and technology, wellness manufacturing crafts products that cater to holistic well-being. From essential oils to nutritional supplements, every product is a testament to a commitment to quality, purity, and efficacy.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Tapping into a Growing Market</h3>
                <p className={styles.modalText}>The global demand for wellness products is on an exponential rise. As more individuals prioritize health and wellness, there's a burgeoning market waiting for authentic and effective products. Stepping into wellness manufacturing places one at the forefront of this lucrative industry.
                </p>
                    </div>
                     <div>
                <h3 className={styles.modalTitle}>Innovative Research and Development</h3>
                <p className={styles.modalText}>Wellness manufacturing isn't just about production; it's about innovation. Constant research and development ensure that we stay ahead of the curve, blending traditional wisdom with modern research to develop products that truly make a difference.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Sustainability and Ethical Practices</h3>
                <p className={styles.modalText}>In an industry so closely tied to nature, sustainability becomes paramount. Ethical sourcing of ingredients, eco-friendly packaging, and responsible manufacturing practices reflect a commitment to the planet as much as to the consumer.
                </p>
                </div>
                <div>
                <h3 className={styles.modalTitle}>Empowering Entrepreneurial Ventures</h3>
                <p className={styles.modalText}>
                  For those inspired by the world of wellness, manufacturing opens doors to entrepreneurial opportunities. From starting one's own brand to collaborating with established names, the possibilities are vast and rewarding.
                </p>
                    </div><br/>
                     <p className={styles.modalText}>At IDF, our venture into wellness manufacturing isn't just about business; it's about championing a healthier, balanced life for all. Join us in our mission to craft products that nurture the body, mind, and soul, and be part of a movement that prioritises well-being in every facet.
                </p>
                </div>
                <div className={styles.imgContainer}>
                  <img src={participantImg6} alt="participant" />
                </div>
              </div>
            </>
            }
             {title === "Joy in Creation: Wellness Manufacturing" &&
            <>
                <h3 className={styles.modalHeader}>{title}</h3>
              <div className={styles.wrapper}>
                <div className={styles.container}>
              <div>
                <p className={styles.modalText}> Wellness manufacturing is not merely a process of combining ingredients to form a product; it's a heartfelt journey of infusing passion, purpose, and joy into each creation. This sentiment is evident in the glow of our creators, and here's how the "Love My Work" ethos beautifully intertwines with their endeavours. </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>A Tangible Impact</h3>
                <p className={styles.modalText}>Crafting wellness products provides our creators with the unique satisfaction of knowing that their work directly contributes to the well-being of others. Each product holds the potential to enhance someone's quality of life, and being part of that chain of positive impact is profoundly fulfilling.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>The Art of Craftsmanship </h3>
                <p className={styles.modalText}>From sourcing raw materials to the meticulous process of formulation, each step is an opportunity for creators to immerse themselves fully, honing their skills and refining their art. The pride of craftsmanship shines through in the quality and authenticity of the products they produce.
                </p>
                    </div>
                     <div>
                <h3 className={styles.modalTitle}>Connecting with Nature</h3>
                <p className={styles.modalText}>Wellness manufacturing often entails working closely with natural ingredients. This bond with nature brings an intrinsic joy, as creators appreciate the beauty, potency, and purity of the earth's offerings.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Community and Camaraderie</h3>
                <p className={styles.modalText}>Being part of a collective mission fosters a sense of community among our creators. The shared passion, combined with the "Love My Work" ethos, cultivates an environment of mutual support, collaboration, and camaraderie.
                </p>
                </div>
                <div>
                <h3 className={styles.modalTitle}>Visible Accomplishments</h3>
                <p className={styles.modalText}>Seeing a product move from concept to completion, and then into the hands of a satisfied consumer, is a tangible affirmation of one's efforts. This cycle of creation, feedback, and appreciation provides continuous motivation and joy.
                </p>
                </div><br/>
                     <p className={styles.modalText}>At IDF, the heartbeats of our creators are palpable in every wellness product. Their joy, passion, and dedication resonate with our "Love My Work" philosophy, painting a vivid picture of a workplace where purpose meets pleasure, and where every creation is a labour of love.
                </p>
                </div>
                <div className={styles.imgContainer}>
                  <img src={participantImg7} alt="participant" />
                </div>
              </div>
            </>
            }
            
            {title === "Nurtured Nature: The Magic of Our Garden Centre" &&
            <>
                <h3 className={styles.modalHeader}>{title}</h3>
              <div className={styles.wrapper}>
                <div className={styles.container}>
              <div>
                <p className={styles.modalText}>Tucked amidst the vibrancy of nature, our Garden Centre is a haven where green dreams flourish and nature’s wonders come alive. This serene space is not just about plants and flowers; it’s a testament to the nurturing spirit of IDF and the transformative power of nature.</p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>Living Libraries of Green </h3>
                <p className={styles.modalText}>Every plant, shrub, and flower in our Garden Centre tells a story. They represent the diversity of nature and serve as living libraries, educating visitors about the myriad species and their significance.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>A Therapeutic Touch</h3>
                <p className={styles.modalText}>The act of gardening and being surrounded by greenery has therapeutic benefits. For our dedicated caretakers and garden enthusiasts, the Garden Centre provides a space to connect, rejuvenate, and experience the calming effects of nature firsthand.
                </p>
                    </div>
                     <div>
                <h3 className={styles.modalTitle}>Sustainable Growth</h3>
                <p className={styles.modalText}>Our commitment to sustainability shines brightly in our Garden Centre. From organic gardening practices to water conservation, every decision is made with an eye on creating a positive environmental impact.
                </p>
              </div>
              <div>
                <h3 className={styles.modalTitle}>A Blossoming Business Opportunity </h3>
                <p className={styles.modalText}>The Garden Centre is also a thriving business venture. With a diverse range of plants and gardening accessories for sale, it serves as a one-stop destination for gardening enthusiasts and professionals alike.
                </p>
                </div><br/>
                     <p className={styles.modalText}>
            At IDF, our Garden Centre is more than just a space; it’s an experience. Every leaf, petal, and bud resonates with our "Love My Work" philosophy. Here, nature's bounty and human passion converge, creating an environment where every day is a celebration of life, growth, and green dreams realised.
                </p>
                </div>
                <div className={styles.imgContainer}>
                  <img src={participantImg8} alt="participant" />
                </div>
              </div>
            </>
            }

                      {isAboutPage === true &&
                          <>
                              <h3 className={styles.modalHeader}>{title}</h3>
                              <div className={styles.wrapper}>
                                  <div className={styles.container}>
                                      <div>
                                      <p className={styles.modalText}>{descr}</p>
                                      </div>                                                                          
                                  </div>
                                  <div className={styles.imgContainer}>
                                      <img src={img} alt="participant" />
                                  </div>
                              </div>
                          </>
                      }


            <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: '10px',
              top: '10px',
              color: '#000',
            }}
          >
            <CloseIcon />
          </IconButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
export default ModalParticipantCard;
