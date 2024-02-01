import React, { useState, FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { Modal, Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IModalParticipantCardProps } from '../../types/modalType';
import { participantModalStyles } from '../../constants/styles/RequestDemoModal';
import styles from './ModalSchoolLeavers.module.scss';
import participantImg from "../../assets/participantCardModal/leavers/crafting.webp";
import participantImg2 from "../../assets/participantCardModal/leavers/holistic.webp";
import participantImg3 from "../../assets/participantCardModal/leavers/nature2.webp";
import participantImg4 from "../../assets/participantCardModal/leavers/joy1.webp";


const ModalSchoolLeavers: FC<IModalParticipantCardProps> = ({ title, btnTitle, children }) => {
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
             {title === "Crafting a Digital Livelihood: The Power of Audience Building" &&
             <>
               <div className={styles.wrapper}>
                <div className={styles.container}>
               <div>
                <h3 className={styles.modalTitle}>Pioneering Careers: Content Creators & Streamers on YouTube and Twitch</h3>
                <p className={styles.modalText}>In the digital age, content creation and streaming have emerged as powerful platforms for self-expression, storytelling, and community building.Platforms like YouTube and Twitch have democratised the media landscape, allowing anyone with a voice, a vision, or a talent to reach audiences worldwide. <br/> For individuals with intellectual disabilities and those within the neurodiverse community, this presents a unique and empowering opportunity. </p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Empowering Expression</h3>
                 <p className={styles.modalText}>
                 Content creation serves as an unparalleled medium for individuals to share their stories, perspectives, and talents. It's a space where one's unique experiences, including the challenges and triumphs of living with an intellectual disability or being neurodiverse, can be celebrated and understood.
                 </p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Inclusive Communities</h3>
                 <p className={styles.modalText}>The world of streaming, especially on platforms like Twitch, fosters a sense of community. Viewers and streamers alike can find spaces where they feel at home, can relate to one another, and can support each other. This inclusivity can be especially significant for those who often feel marginalised or misunderstood in offline spaces.
                 </p>
                     </div>
                      <div>
                 <h3 className={styles.modalTitle}>Tailored Training</h3>
                 <p className={styles.modalText}>To ensure success, we offer tailored training programs for aspiring content creators and streamers. These programs are designed with the understanding of unique learning needs, ensuring that everyone, regardless of their background, can acquire the skills needed to shine online.

                 </p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>A Supportive Ecosystem</h3>
                 <p className={styles.modalText}>Understanding the challenges that individuals with intellectual disabilities and those from the neurodiverse community might face, we have established a support system. This includes mentorship from experienced content creators, tech support, and an encouraging community to provide feedback and cheer each other on.
                 </p>
                 </div><br/>
                      <p className={styles.modalText}>The digital realm is vast, and there's a place for everyone. With the right environment, tools, and support, individuals with intellectual disabilities and those who are neurodiverse can not only participate but thrive, lead, and inspire in the world of content creation and streaming. Join us in carving out pioneering paths on YouTube and Twitch.
                 </p>
                 </div>
                 <div className={styles.imgContainerModal}>
            
                   <img src={participantImg} alt="participant" />
                 </div>
               </div>
             </>
            }
            {title === "Harnessing Holistic Health: Wellness Manufacturing" &&
             <>
               <div className={styles.wrapper}>
                <div className={styles.container}>
               <div>
                <h3 className={styles.modalTitle}>Harnessing Holistic Health: Wellness Manufacturing</h3>
                <p className={styles.modalText}>In the burgeoning world of health and well-being, wellness manufacturing stands as a beacon of innovation, bridging ancient traditions with modern science to deliver products that resonate with today’s health-conscious consumers.</p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Creating Wholesome Products</h3>
                 <p className={styles.modalText}>
                 At the intersection of nature and technology, wellness manufacturing crafts products that cater to holistic well-being. From essential oils to nutritional supplements, every product is a testament to a commitment to quality, purity, and efficacy.
                 </p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Tapping into a Growing Market</h3>
                 <p className={styles.modalText}>The global demand for wellness products is on an exponential rise. As more individuals prioritize health and wellness, there's a burgeoning market waiting for authentic and effective products. Stepping into wellness manufacturing places one at the forefront of this lucrative industry.</p>
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
                 <p className={styles.modalText}>For those inspired by the world of wellness, manufacturing opens doors to entrepreneurial opportunities. From starting one's own brand to collaborating with established names, the possibilities are vast and rewarding.
                 </p>
                 </div><br />
                      <p className={styles.modalText}> At IDF, our venture into wellness manufacturing isn't just about business; it's about championing a healthier, balanced life for all. Join us in our mission to craft products that nurture the body, mind, and soul, and be part of a movement that prioritises well-being in every facet.
                 </p>
                 </div>
                 <div className={styles.imgContainerModal}>
                   <img src={participantImg2} alt="participant" />
                 </div>
               </div>
             </>
            }
            {title === "Joy in Creation: Wellness Manufacturing" &&
             <>
               <div className={styles.wrapper}>
                <div className={styles.container}>
               <div>
                <h3 className={styles.modalTitle}>Harnessing Holistic Health: Wellness Manufacturing</h3>
                <p className={styles.modalText}>In the burgeoning world of health and well-being, wellness manufacturing stands as a beacon of innovation, bridging ancient traditions with modern science to deliver products that resonate with today’s health-conscious consumers.</p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Creating Wholesome Products</h3>
                 <p className={styles.modalText}>
                 At the intersection of nature and technology, wellness manufacturing crafts products that cater to holistic well-being. From essential oils to nutritional supplements, every product is a testament to a commitment to quality, purity, and efficacy.
                 </p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Tapping into a Growing Market</h3>
                 <p className={styles.modalText}>The global demand for wellness products is on an exponential rise. As more individuals prioritize health and wellness, there's a burgeoning market waiting for authentic and effective products. Stepping into wellness manufacturing places one at the forefront of this lucrative industry.</p>
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
                 <p className={styles.modalText}>For those inspired by the world of wellness, manufacturing opens doors to entrepreneurial opportunities. From starting one's own brand to collaborating with established names, the possibilities are vast and rewarding.
                 </p>
                 </div><br />
                      <p className={styles.modalText}> At IDF, our venture into wellness manufacturing isn't just about business; it's about championing a healthier, balanced life for all. Join us in our mission to craft products that nurture the body, mind, and soul, and be part of a movement that prioritises well-being in every facet.
                 </p>
                 </div>
                 <div className={styles.imgContainerModal}>
            
                   <img src={participantImg4} alt="participant" />
                 </div>
               </div>
             </>
            }
          
            {title === "Nurtured Nature: The Magic of Our Garden Centre" &&
             <>
               <div className={styles.wrapper}>
                <div className={styles.container}>
               <div>
                <h3 className={styles.modalTitle}>Growth Beyond Greens: Our Garden Centre Through the SLES Lens</h3>
                <p className={styles.modalText}>Our Garden Centre isn’t just a haven of flora and fauna; it’s also a thriving educational hub that integrates the principles of the School Leaver Employment Supports (SLES) program. Here, young adults transitioning from school to adulthood find fertile ground to plant the seeds of their aspirations.</p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Hands-On Learning Experience</h3>
                 <p className={styles.modalText}>The SLES program at our Garden Centre offers real-world, hands-on experience. Participants learn the intricacies of horticulture, from plant care to sustainable gardening practices, equipping them with valuable skills for future employment.
                 </p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Building Self-Confidence</h3>
                 <p className={styles.modalText}>Gardening, with its tangible results, fosters a sense of achievement. As plants thrive under their care, participants witness the direct results of their efforts, bolstering self-confidence and instilling a sense of pride.</p>
                     </div>
                <div>
                 <h3 className={styles.modalTitle}>Therapeutic Engagement </h3>
                 <p className={styles.modalText}>The therapeutic qualities of gardening are manifold. As participants engage with the soil and plants, they benefit from the calming and healing effects of nature, aiding in their holistic development and well-being.
                 </p>
               </div>
               <div>
                 <h3 className={styles.modalTitle}>Collaborative Community</h3>
                 <p className={styles.modalText}>The Garden Centre serves as a communal space where SLES participants can interact, collaborate, and learn from one another. This shared journey fosters camaraderie, team spirit, and mutual support, crucial elements for personal and professional growth.
                 </p>
                  </div>
                   <div>
                 <h3 className={styles.modalTitle}>Pathway to Employment </h3>
                 <p className={styles.modalText}>The skills acquired at our Garden Centre go beyond horticulture. Participants are also exposed to customer service, inventory management, and business operations, preparing them for diverse career opportunities in the future.
                 </p>
                 </div><br />
                      <p className={styles.modalText}>At IDF, our Garden Centre, through the SLES lens, is a testament to the transformative power of nature combined with structured guidance. Here, amidst the greens, participants lay down roots for a promising future, embodying the "Love My Work" ethos as they nurture plants and their own potential in tandem.
                 </p>
                 </div>
                 <div className={styles.imgContainerModal}>
                   <img src={participantImg3} alt="participant" />
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
export default ModalSchoolLeavers;
