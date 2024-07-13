import { LuZoomIn } from 'react-icons/lu';
import styles from './PortItems.module.scss';
import { ImLink } from 'react-icons/im';

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
                <LuZoomIn />
                <ImLink />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PortItems;
