import MainHeading from '../../ui/MainHeading';
import styles from './Skills.module.scss';
import { skillsData } from '../../data/data';

function Skills() {
  return (
    <div className={styles.aboutStats}>
      <MainHeading
        heading='Skills'
        title='I have developed a diverse set of skills in web development. Below are the key areas where I excel:'
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
                  <span style={{ width: `${skill.level}%` }}></span>
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
