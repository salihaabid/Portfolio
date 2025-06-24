import { TypeAnimation } from 'react-type-animation';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home} id='home'>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h1>Saliha Abid</h1>
          <h2>
            I'm a{' '}
            <TypeAnimation
              sequence={[
                `Developer`,
                1500,
                `Freelancer`,
                1500,
                `Designer`,
                1500,
              ]}
              speed={30}
              eraseSpeed={30}
              className={styles.typing}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
