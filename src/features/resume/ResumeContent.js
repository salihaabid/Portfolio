import React from 'react';
import styles from './ResumeContent.module.scss';

const resumeData1 = [
  {
    section: 'Summary',
    name: 'Saliha Abid',
    description: `I have expertise in HTML, CSS, JavaScript, and the MERN stack. I'm passionate about web development and eager to expand my skills further. Currently, I'm enhancing my abilities in React to create dynamic user interfaces. I am excited to gain real-world experience through an internship, collaborate with experienced developers, and contribute to meaningful projects while continuing to grow as a web developer.`,
    points: ['Lahore, Pakistan', '+92 301 5849768', 'salihabid349@gmail.com'],
  },
  {
    section: 'Education',
    entries: [
      {
        title: 'Intermediate Student',
        date: '2023 - 2025',
        institution:
          'Aabru Welfare College (Academy-based learning), Lahore, Pakistan',
        description:
          'Currently pursuing my intermediate education at Aabru Welfare College, where I am engaged in academy-based learning. This program is equipping me with a solid academic foundation and the skills necessary for my future career in web development.',
      },
    ],
  },
];

const resumeData2 = [
  {
    section: 'Professional Experience',
    entries: [
      {
        title: 'Web Development Intern',
        date: '2024 - Present',
        company: 'Arfa IT Tower , Lahore, Pakistan',
        points: [
          'Collaborating with experienced developers on various projects.',
          'Enhancing skills in web development and gaining real-world experience.',
          'Contributing to the creation of dynamic and responsive web applications.',
        ],
      },
    ],
  },
  {
    section: 'My Skills',
    entries: [
      {
        title: 'The following are the skills I pursue and continue to develop:',
        points: [
          'HTML & CSS: Creating structured, responsive, and visually appealing web pages.',
          'JavaScript: Building dynamic web content.',
          'React (ongoing): Developing dynamic and interactive user interfaces.',
          'MERN Stack: Basic knowledge of MongoDB, Express.js, React, and Node.js.',
        ],
      },
    ],
  },
];
function ResumeContent() {
  return (
    <div className={styles.resume}>
      <SumEdu />
      <ProfExp />
    </div>
  );
}

function SumEdu() {
  return (
    <div className={styles.resumeData}>
      {resumeData1.map((item, i) => (
        <div key={i} className={styles.resumeItem}>
          <h2>{item.section}</h2>
          <div className={styles.resumeContent}>
            {item.name && <h4 className={styles.name}> {item.name}</h4>}
            {item.description && (
              <p className={styles.desc}>{item.description}</p>
            )}
            {item.points && (
              <ul className={styles.points}>
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
            {item.entries &&
              item.entries.map((entry, entryIndex) => (
                <div key={entryIndex} className={styles.entry}>
                  {entry.title && <h4>{entry.title}</h4>}
                  {entry.date && <p className={styles.date}>{entry.date}</p>}
                  {entry.institution && <p>{entry.institution}</p>}
                  {entry.description && <p>{entry.description}</p>}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfExp() {
  return (
    <div className={styles.resumeData}>
      {resumeData2.map((item, i) => (
        <div key={i} className={styles.resumeItem}>
          <h2>{item.section}</h2>
          <div className={styles.resumeContent}>
            {item.entries.map((entry, entryIndex) => (
              <div key={entryIndex} className={styles.entry}>
                {entry.title && <h4>{entry.title}</h4>}
                {entry.date && <p className={styles.date}>{entry.date}</p>}
                {entry.company && <p>{entry.company}</p>}
                {entry.points && (
                  <ul className={styles.points}>
                    {entry.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResumeContent;
