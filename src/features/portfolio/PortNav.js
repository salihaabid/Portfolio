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
            className={activeFilter === 'App' ? styles.active : ''}
            onClick={() => onFilterChange('App')}
          >
            App
          </li>
          <li
            className={activeFilter === 'Product' ? styles.active : ''}
            onClick={() => onFilterChange('Product')}
          >
            Product
          </li>
          <li
            className={activeFilter === 'Branding' ? styles.active : ''}
            onClick={() => onFilterChange('Branding')}
          >
            Branding
          </li>
          <li
            className={activeFilter === 'Books' ? styles.active : ''}
            onClick={() => onFilterChange('Books')}
          >
            Books
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PortNav;
