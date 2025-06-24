import styles from './MainHeading.module.scss';
function MainHeading({ heading, title }) {
  return (
    <div className={styles.mainHeading}>
      <h1>{heading}</h1>
      <p>{title}</p>
    </div>
  );
}

export default MainHeading;
