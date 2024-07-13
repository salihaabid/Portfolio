import MainHeading from '../../ui/MainHeading';
import Service from './Service';
import styles from './Services.module.scss';

function Services() {
  return (
    <div id='services' className={styles.services}>
      <MainHeading
        heading='Services'
        title='I offer a range of web development services, ensuring responsive, dynamic, and visually appealing web solutions.'
      />
      <Service />
    </div>
  );
}

export default Services;
