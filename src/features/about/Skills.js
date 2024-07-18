import MainHeading from '../../ui/MainHeading';
import styles from './Skills.module.scss';

const skillsData = [
  {
    title: 'html',
    level: 100,
  },
  {
    title: 'css',
    level: 90,
  },
  {
    title: 'javascript',
    level: 70,
  },
  {
    title: 'react',
    level: 85,
  },
  {
    title: 'node js',
    level: 50,
  },
  {
    title: 'express',
    level: 40,
  },
];

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
