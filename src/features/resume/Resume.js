import MainHeading from '../../ui/MainHeading';
import ResumeContent from './ResumeContent';
import styles from './Resume.module.scss';

function Resume() {
  return (
    <div id='resume' className={styles.resume}>
      <MainHeading
        heading='Resume'
        title='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'
      />
      <ResumeContent />
    </div>
  );
}

export default Resume;
