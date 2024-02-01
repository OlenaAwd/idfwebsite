import { FC, useState, ChangeEvent, useEffect, useRef, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import HeaderHome from '../../components/HeaderHome';
import ButtonComponent from '../../components/ButtonComponent';
import Footer from '../../components/Footer';
import useDebounce from '../../hooks/useDebounce';
import styles from './ContactUs.module.scss';
import WaveUp from '../../assets/VectorUp.svg';
import WaveDown from '../../assets/VectorDown.svg';
import Doodle from '../../assets/Doodle.svg';
import locationIcon from '../../assets/contactUsIcons/location.svg';
import mailIcon from '../../assets/contactUsIcons/email.svg';
import phoneIcon from '../../assets/contactUsIcons/phone.svg';
import clockIcon from '../../assets/contactUsIcons/clock.svg';

import { selectForm,
 setFirstName, setLastName, setEmail, setPhone, setMessage
} from '../../slices/form'; 
import MailService from '../../services/MailService';
import LazyImgComponent from '../../components/LazyImgComponent';


interface IFrameProps {}

const ContactUsPage: FC<IFrameProps> = () => {
  const dispatch = useDispatch();
  const { hub, firstname,lastname,email,phone,message} = useSelector(
    selectForm
  );
      if (!phone.startsWith('+610')) {
        let newValue = '+610' + phone.substring(4); // Add '0' after '+61'
        dispatch(setPhone({ phone:newValue}));
      }
  
  const [emailError, setEmailError] = useState('');
  const [emailValue, setEmailValue] = useState(email ? email : "");
  const [isEdit, setEdit] = useState(true);

  const [isEditPhone, setEditPhone] = useState(true);
  const [phoneValue, setPhoneValue] = useState(phone ? phone : "");
  const [phoneError, setPhoneError] = useState('');


  const handleSend = async (e:FormEvent) => {
    e.preventDefault();
    await MailService.sendMail({ hub, firstname, lastname, email, phone, message });
    dispatch(setFirstName({ firstname: '' }));
    dispatch(setLastName({ lastname: '' }));
    dispatch(setEmail({ email: '' }));
    dispatch(setPhone({ phone: '' } ));
    dispatch(setMessage({ message: '' } ));
    setPhoneValue(" ");
    setEmailValue(" ")

  };
  const handleChangeFirstName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    setFirstName(valueEdited);
    dispatch(setFirstName({ firstname: val.target.value } ));
  };

  const handleChangeLastName = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value;
    const valueEdited = value.replace(/[0-9]/g, '');
    setLastName(valueEdited);
    dispatch(setLastName({ lastname: val.target.value } ));

  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmailError('');
    setEmailValue(val);
    setEdit(false);

    if (!val) {
      setEmailError('Please, enter your email');
      return;
    }
      //  dispatch(setEmail({email: val}));
  };

  const debouncedEmail = useDebounce(emailValue, 500);

  useEffect(() => {
    if (debouncedEmail) {
       validateEmail();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedEmail]);

  const validateEmail = () => {
    setEdit(true);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = regex.test(emailValue);
    if (!checkEmail) {
      setEmailError('Please use a valid email address');
      return;
    }

    setEmailError('');
    setEmailValue(emailValue);
    dispatch(setEmail({ email: emailValue }));
  };

  const handleChangePhone = (val: ChangeEvent<HTMLInputElement>) => {
    const value = val.target.value || '';
    setPhoneError('');
    setPhoneValue(value);
    setEditPhone(false);
    if (!value) {
      setPhoneError('Please enter a valid phone number');
    }
    //  dispatch(setPhone({ phone:val.target.value}));
  };

  const debouncedPhone = useDebounce(phoneValue, 500);

  useEffect(() => {
    if (debouncedPhone) {
      validatePhone();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPhone]);

  const validatePhone = () => {
    setEditPhone(true);
  const regex = /^\d.*/;

  if (regex.test(phoneValue)) {
    setPhoneError('');

    dispatch(setPhone({ phone:phoneValue}));
  } 
  };

  const handleChangeMessage = (val: ChangeEvent<HTMLTextAreaElement>) => {

    dispatch(setMessage({ message:val.target.value}));
  };

  const isDisabled =
    !email ||
    !phone ||
    !isEdit ||
    !!emailError ||
    !isEditPhone ||
    !!phoneError ||
    !firstname ||
    !lastname;


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
      <title>Contact IDF St. George - Get in Touch with Us</title>
      <meta name="description" content="Reach out to IDF St. George through our Contact Us page. Find our contact details and get in touch for any inquiries or assistance you may need." />
      </Helmet>
      <HeaderHome onSearch={handleSearch}/>
      <main ref={contentRef}>
        <section className={styles.main}>
          <div className={styles.wrapper}>
            <div className={styles.mapContainer}>
              <h2 className={styles.contactUsMapTitle}>Contact Us</h2>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <LazyImgComponent src={locationIcon} alt="location icon" />
                  <a
                    target="_blank"
                    href="https://goo.gl/maps/N9zhrgKiEGtvq2ro6"
                    className={styles.itemText}
                    rel="noreferrer"
                  >
                    50 Beach Street, Kogarah
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <LazyImgComponent src={mailIcon} alt="mail icon" />
                  <a
                    type="submit"
                    href="mailto:admin@idfstgeorge.org.au"
                    className={styles.itemText}
                  >
                    admin@idfstgeorge.org.au
                  </a>
                </li>
                <li
                  className={`${styles.contactItem} ${styles.contactItemText}`}
                >
                  <LazyImgComponent src={phoneIcon} alt="phone icon" />
                  <p>Ph  <a type="tel" href="tel:0285662800" className={styles.phoneLink}>02 8566 2800</a></p>
                </li>
                <li
                  className={`${styles.contactItem} ${styles.contactItemText}`}
                >
                  <LazyImgComponent src={clockIcon} alt="clock icon" />
                  <p>
                    8.30am to 3.30pm
                    <br /> Monday - Friday
                  </p>
                </li>
              </ul>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.2700752701408!2d151.13933767605593!3d-33.95989717319195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b7560d43d867%3A0x3467f3734b3b9c31!2s50%20Beach%20St%2C%20Kogarah%20NSW%202217%2C%20Australia!5e0!3m2!1sen!2sua!4v1694582175704!5m2!1sen!2sua"
                width="600"
                height="450"
                loading="lazy"
                 className={styles.map}
                title="map"
              ></iframe>
            </div>
            <div className={styles.formContainer}>
              <form className={styles.container}>
                <div className={styles.nameWrapper}>
                  <div className={styles.itemContainer}>
                    <label htmlFor="firstName" className={styles.label}>
                      First name*
                    </label>
                    <input
                      id="firstName"
                      value={firstname}
                      onChange={handleChangeFirstName}
                      type="text"
                      className={`${styles.input}`}
                    />
                  </div> 
                   <div className={`${styles.itemContainer}`}>
                    <label htmlFor="lastName" className={styles.label}>
                      Last name*
                    </label>
                    <input
                      id="lastName"
                      value={lastname}
                      onChange={handleChangeLastName}
                      type="text"
                      className={`${styles.input}`}
                    />
                  </div>
                </div>
                <div className={styles.nameWrapper}>
                  <div className={styles.itemContainer}>
                    <label htmlFor="email" className={styles.label}>
                      Email*
                    </label>
                    <input
                      id="email"
                      value={emailValue}
                      onChange={handleChangeEmail}
                      type="email"
                      className={styles.input}
                    /> 
                    <span className={styles.helperText}>{emailError}</span>
                  </div>
                  <div className={styles.itemContainer}>
                    <label htmlFor="tel" className={styles.label}>
                      Phone number*
                    </label>
                    <input
                      id="tel"
                      value={phoneValue}
                      onChange={handleChangePhone}
                      type="tel"
                      className={styles.input}
                    />
                    <span className={styles.helperText}>{phoneError}</span>
                  </div>
                </div>
                <div className={styles.itemContainer}>
                  <label htmlFor="message" className={styles.label}>
                    Write your message here
                  </label>
                  <textarea
                    id="message" 
                    value={message || ""}
                    onChange={handleChangeMessage}
                    className={styles.inputTextArea}
                  />
                </div>
                <ButtonComponent
                  onClick={handleSend}
                  classes={styles.btnSend}
                  color="red"
                  disabled={isDisabled}
                >
                  Send
                </ButtonComponent>
              </form>
            </div>
          </div>
          <div className={styles.waveContainer}>
            <LazyImgComponent src={WaveUp} alt="wave" />
            <LazyImgComponent src={WaveDown} alt="wave" />
          </div>
          <div className={styles.doodleContainer}>
            <LazyImgComponent src={Doodle} alt="doodle" />
          </div>
        </section>
        {/* <section className={styles.videoSection}>
          <h2 className={styles.videoHeader}>Hear more about our services</h2>
          <div className={styles.videoCardsWrapper}>
            {videoCardsData.map(item => (
              <div key={item.id}>
                <VideoCards
                  id={item.id}
                  // url={item.url}
                  // light={item.light}
                  title={item.title}
                  src={item.light}
                />
              </div>
            ))}
          </div>
          <div className={styles.ellipseContainer}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.ellipseContainer2}>
            <LazyImgComponent src={Ellipse} alt="ellipse" />
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;
