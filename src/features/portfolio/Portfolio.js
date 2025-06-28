import { useState } from 'react';
import MainHeading from '../../ui/MainHeading';
import PortItems from './PortItems';
import PortNav from './PortNav';
import styles from './Portfolio.module.scss';
import { portData } from '../../data/data';

function Portfolio() {
  const [filter, setFilter] = useState('All');
  const handleFilter = (category) => {
    setFilter(category);
  };
  const filteredImages =
    filter === 'All'
      ? portData
      : portData.filter((image) => image.category === filter);
  return (
    <div id='portfolio' className={styles.portfolio}>
      <MainHeading
        heading='Portfolio'
        title='Explore my projects showcasing skills in JavaScript and the MERN stack. Each project demonstrates my ability to create responsive and dynamic web applications.'
      />
      <PortNav activeFilter={filter} onFilterChange={handleFilter} />
      <PortItems images={filteredImages} />
    </div>
  );
}

export default Portfolio;
