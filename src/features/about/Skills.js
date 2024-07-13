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
                  {/* <span></span> */}
                  {/* <span style={width:`${skill.level}%`}></span> */}
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

/*
SALIHA ABID
Aspiring Web Developer

EDUCATION
Intermediate Student 2023 2025
Aabru Welfare College (Academy- based learning)
SKILLS
HTML
CSS & CSS frameworks
Basic JavaScript
React (ongoing)
Professional development
Communication skills
MERN (have basic knowledge but will learn during internship)
Organization and time
management skills
PROFESSIONAL SUMMARY
As a second-year student passionate about web development, I bring a strong foundation in HTML, CSS, and various CSS frameworks, allowing me to create visually appealing and responsive web pages. Currently, I am diving deeper into React, a powerful JavaScript library, to build dynamic and interactive user interfaces. I'm eager to transition from project-based learning to real- world application through an internship, immersing myself in a professional environment, collaborating with experienced developers, and contributing to meaningful projects.I am enthusiastic about the potential to contribute innovative ideas, learn from industry professionals, and grow as a web developer.
WORK EXPERIENCE
THIS WILL BE MY FIRST INTERNSHIP, AND I'M EXCITED TO DIVE IN AND GIVE IT MY ALL.
PROJECTS
I have practiced my skills through some basic projects available on my GitHub and am now eager to work on real- world projects for valuable experience.
WHY SHOULD YOU HIRE ME
Hiring a younger student like me with fast learning abilities not only benefits your organization but also contributes to nurturing and promoting young talent in our country. I bring fresh perspectives, enthusiasm, and a hunger to learn and contribute. My ability to quickly grasp new concepts and apply them effectively means that I can adapt to your team's workflow with ease.
*/
