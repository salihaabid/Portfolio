import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';
import MainHeading from '../../ui/MainHeading';
import styles from './Contact.module.scss';
function Contact() {
  return (
    <div id='contact' className={styles.contacts}>
      <MainHeading
        heading='Contact'
        title={`Whether you have inquiries, feedback, or just want to say hello, we'd love to hear from you. Contact us today!`}
      />
      <div className={styles.contact}>
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <BsGeoAlt />
        </div>
        <div className={styles.text}>
          <h4>Address</h4>
          <p>Nishtar Colony, Lahore Pakistan</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <BsTelephone />
        </div>
        <div className={styles.text}>
          <h4>Call Us</h4>
          <p>+92 301 5849768</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <BsEnvelope />
        </div>
        <div className={styles.text}>
          <h4>Email Us</h4>
          <p>salihabid349@gmail.com</p>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.926204021198!2d-74.01337998459297!3d40.71277527933002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31660d7fd3%3A0x3a17ab3cd3c5b22c!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1598054724189!5m2!1sen!2sus'
          width='100%'
          height='250'
          frameBorder='0'
          style={{ border: 0 }}
          allowFullScreen=''
          aria-hidden='false'
          tabIndex='0'
        ></iframe>
      </div>
    </div>
  );
};
const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <form>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' name='name' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' name='email' />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='subject'>Subject</label>
          <input type='text' id='subject' name='subject' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message'></textarea>
        </div>
        <div className={`${styles.formGroup} ${styles.center}`}>
          <button type='submit'>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
