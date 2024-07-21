import styles from './Service.module.scss';

import { serviceData } from '../../data/data';

function Service() {
  return (
    <div className={styles.services}>
      {serviceData.map((service, i) => {
        return (
          <div className={styles.service} key={i}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <div className={styles.serviceTxt}>
              <h4>{service.heading}</h4>
              <p>{service.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Service;
