import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src='/public/saliha_logo.png' alt='' />
      <h1>Saliha Abid</h1>
    </div>
  );
}

export default Logo;
