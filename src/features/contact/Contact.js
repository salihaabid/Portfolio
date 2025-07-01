import { BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs';
import MainHeading from '../../ui/MainHeading';
import styles from './Contact.module.scss';
import emailjs from 'emailjs-com';

import { useState, useRef } from 'react';
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
          <p>Lahore Pakistan</p>
        </div>
      </div>
      <div className={styles.infoItem}>
        <div className={styles.icon}>
          <BsTelephone />
        </div>
        <div className={styles.text}>
          <h4>Call Us</h4>
          <p>+92 320 6468349</p>
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
      {/* 
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
      </div> */}
      <div className={styles.banner}>
        <h3>Got a project in mind?</h3>
        <p>
          Let’s connect and bring your ideas to life together, we’ll create
          something you’ll be proud to call yours.
        </p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pjs21i5', // replace with your EmailJS service ID
        'template_sgaap1v', // replace with your template ID
        form.current,
        'P2JqAzBH0NtvKO2a5' // replace with your public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className={styles.contactForm}>
      <form ref={form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={`${styles.formGroup} ${styles.center}`}>
          <button type='submit'>Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
