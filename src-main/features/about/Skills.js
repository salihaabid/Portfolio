import MainHeading from '../../ui/MainHeading';
import styles from './Skills.module.scss';

import { skillsData } from '../../data/data';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Small delay to allow initial render

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.aboutStats} ref={ref}>
      <MainHeading
        heading='Skills'
        title='I have developed a diverse set of skills in web development, backend technologies, and data handling. Below are the key areas where I excel:'
      />

      <div className={styles.progBars}>
        {skillsData.map((skill, i) => {
          return (
            <div className={styles.progBar} key={i}>
              <div className={styles.progText}>
                <p className={styles.progTitle}>{skill.title}</p>
                <p>{skill.level}%</p>
              </div>
              <div className={styles.progCon}>
                <div className={styles.progress}>
                  <span
                    style={{
                      width: inView ? `${skill.level}%` : '0%',
                      transition: 'width 1.5s ease-in-out',
                    }}
                  ></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
