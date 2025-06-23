import styles from './Info.module.scss';
import { RxChevronRight } from 'react-icons/rx';
import { infoData } from '../../data/data';

function Info() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.imgBox}>
        <img src='/infoimg.jpg' alt='' width='320px' />
        {/* <img src='/saliha_log.png' width='320px' /> */}
      </div>
      <div className={styles.infoContainer}>
        <div>
          <h2>MERN Stack Dev | UI/UX & Web Automation.</h2>
          <p className={styles.infoText}>
            My expertise spans across both UI/UX design & development. I'm
            proficient in a range of technologies and tools.
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
          Express.js, React, Node.js). I also have experience working with
          Python, web scraping, and PostgreSQL. I am constantly learning and
          expanding my skill set to include the latest technologies and best
          practices.
        </p>
      </div>
    </div>
  );
}

export default Info;
