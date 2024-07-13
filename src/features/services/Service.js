import styles from './Service.module.scss';

import {
  BsBarChart,
  BsBinoculars,
  BsBriefcase,
  BsBrightnessHigh,
  BsCalendar4Week,
  BsCardChecklist,
} from 'react-icons/bs';
const serviceData = [
  {
    heading: 'Front-End Development',
    text: 'Crafting modern and responsive websites using HTML, CSS, and JavaScript.',
    icon: <BsBriefcase />,
  },
  {
    heading: 'React Development',
    text: 'Building dynamic and interactive user interfaces with React.',
    icon: <BsCardChecklist />,
  },
  {
    heading: 'Full-Stack Development',
    text: 'Developing complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js).',
    icon: <BsBarChart />,
  },
  {
    heading: 'UI/UX Design',
    text: 'Designing user-friendly and visually appealing interfaces.',
    icon: <BsBinoculars />,
  },
  {
    heading: 'Project Collaboration',
    text: 'Working closely with clients and teams to deliver high-quality web solutions.',
    icon: <BsBrightnessHigh />,
  },
  {
    heading: 'Continuous Learning',
    text: 'Staying updated with the latest web development trends and technologies to provide innovative solutions.',
    icon: <BsCalendar4Week />,
  },
];
function Service() {
  return (
    <div className={styles.services}>
      {serviceData.map((service, i) => {
        return (
          <div className={styles.service} key={i}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <div className={styles.serviceTxt}>
              <h4>{service.heading}</h4>
              <p>{service.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Service;
