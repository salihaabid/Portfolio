import styles from './Counter.module.scss';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { counterData } from '../../data/data';

function Counter() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className={styles.counters} ref={ref}>
      {counterData.map((counter, i) => {
        return (
          <div className={styles.counter} key={i}>
            <div className={styles.icon}>{counter.icon}</div>
            <div className={styles.content}>
              <h2>
                {inView && (
                  <CountUp start={0} end={counter.end} duration={2} delay={0} />
                )}
              </h2>
              <h6>{counter.title}</h6>
              <p>{counter.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Counter;
