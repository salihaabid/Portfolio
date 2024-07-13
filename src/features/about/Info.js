import styles from './Info.module.scss';
import { RxChevronRight } from 'react-icons/rx';
const infoData = [
  {
    title: 'Birthday',
    text: '19 Sep 2007',
  },
  {
    title: 'Age',
    text: '16',
  },
  {
    title: 'Website',
    text: 'www.example.com',
  },
  {
    title: 'Phone',
    text: '+92 301 5849768',
  },
  {
    title: 'City',
    text: 'Lahore, Pakistan',
  },

  {
    title: 'Degree',
    text: 'Inter',
  },
  {
    title: 'Email',
    text: 'salihabid349@gmail.com',
  },
  {
    title: 'Freelance',
    text: 'Available',
  },
];

function Info() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imgBox}>
        {/* <img src='/logo.jpg' alt='' /> */}
        <img src='/logo2.jpeg' alt='' />
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h2>UI/UX Designer & Web Developer.</h2>
          <p className={styles.infoText}>
            My expertise spans across both UI/UX design & development. I'm
            proficient in a range of technologies and tools, and I continuously
            strive to keep myself updated with the latest trends in the
            industry.
          </p>
        </div>
        <div className={styles.info}>
          {infoData.map((data, i) => {
            return (
              <div className={styles.data} key={i}>
                <RxChevronRight />
                <span className={styles.title}>{data.title}: </span>
                <span className={styles.text}>{data.text}</span>
              </div>
            );
          })}
        </div>

        <p className={styles.infoPara}>
          My skills include HTML, CSS, JavaScript, and the MERN stack (MongoDB,
          Express.js, React, Node.js). I am constantly learning and expanding my
          skill set to include the latest technologies and best practices. I
          believe in delivering high-quality work and strive to build web
          applications that are not only functional but also provide an
          excellent user experience.
        </p>
      </div>
    </div>
  );
}

export default Info;
