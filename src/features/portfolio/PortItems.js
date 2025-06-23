import styles from './PortItems.module.scss';
import { ImLink } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';

function PortItems({ images }) {
  return (
    <div className={styles.portItems}>
      {images.map((img) => {
        return (
          <div className={styles.portItem} key={img.id}>
            <div className={styles.image}>
              <img src={img.src} alt='' key={img.id} />
            </div>
            <div className={styles.hoverItems}>
              <h4>{img.name}</h4>
              <div className={styles.icons}>
                {img.githubLink && (
                  <a href={img.githubLink} target='_blank' rel='noreferrer'>
                    <FaGithub />
                  </a>
                )}
                {img.liveLink && (
                  <a href={img.liveLink} target='_blank' rel='noreferrer'>
                    <ImLink />
                  </a>
                )}
              </div>
              <p>{img.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PortItems;
