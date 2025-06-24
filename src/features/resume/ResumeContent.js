import styles from './ResumeContent.module.scss';
import { resumeData1 } from '../../data/data';
import { resumeData2 } from '../../data/data';

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
