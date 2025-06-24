import MainHeading from '../../ui/MainHeading';
import ResumeContent from './ResumeContent';
import styles from './Resume.module.scss';

function Resume() {
  return (
    <div id='resume' className={styles.resume}>
      <MainHeading
        heading='Resume'
        title='As a passionate Full Stack Developer and a lifelong learner, I thrive on transforming complex problems into sleek, functional, and user-focused digital solutions. Here’s a snapshot of my professional journey and skills.'
      />
      <ResumeContent />
    </div>
  );
}

export default Resume;
