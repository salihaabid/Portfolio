import styles from './PortNav.module.scss';

function PortNav({ activeFilter, onFilterChange }) {
  return (
    <div className={styles.portNav}>
      <nav>
        <ul>
          <li
            className={activeFilter === 'All' ? styles.active : ''}
            onClick={() => onFilterChange('All')}
          >
            All
          </li>
          <li
            className={activeFilter === 'MERN' ? styles.active : ''}
            onClick={() => onFilterChange('MERN')}
          >
            MERN
          </li>
          {/* <li
            className={activeFilter === 'React' ? styles.active : ''}
            onClick={() => onFilterChange('React')}
          >
            React
          </li> */}
          {/* <li
            className={activeFilter === 'Vanilla' ? styles.active : ''}
            onClick={() => onFilterChange('Vanilla')}
          >
            Vanilla
          </li> */}
          {/* <li
            className={activeFilter === 'Books' ? styles.active : ''}
            onClick={() => onFilterChange('Books')}
          >
            Books
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default PortNav;
