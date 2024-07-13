import {
  BsEmojiSmile,
  BsHeadset,
  BsJournalRichtext,
  BsPeople,
} from 'react-icons/bs';
import styles from './Counter.module.scss';
import CountUp from 'react-countup';
const counterData = [
  {
    icon: <BsEmojiSmile />,
    title: 'Happy Clients',
    text: 'consequuntur quae',
    end: 232,
  },
  {
    icon: <BsJournalRichtext />,
    title: 'Projects',
    text: 'adipisci atque cum quia aut',
    end: 521,
  },
  {
    icon: <BsHeadset />,
    title: 'Hours Of Support ',
    text: 'aut commodi quaerat',
    end: 1453,
  },
  {
    icon: <BsPeople />,
    title: 'Hard Workers',
    text: 'rerum asperiores dolor',
    end: 32,
  },
];
function Counter() {
  return (
    <div className={styles.counters}>
      {counterData.map((counter, i) => {
        return (
          <div className={styles.counter} key={i}>
            <div className={styles.icon}>{counter.icon}</div>
            <div className={styles.content}>
              <h2>
                <CountUp start={0} end={counter.end} duration={2} delay={0} />
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
