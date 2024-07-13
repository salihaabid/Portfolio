import { useState } from 'react';
import MainHeading from '../../ui/MainHeading';
import PortItems from './PortItems';
import PortNav from './PortNav';
import styles from './Portfolio.module.scss';
const images = [
  { id: 1, src: 'app-1.jpg', category: 'App', name: 'App 1' },
  { id: 4, src: 'product-1.jpg', category: 'Product', name: 'Product 1' },
  { id: 7, src: 'branding-1.jpg', category: 'Branding', name: 'Branding 1' },
  { id: 11, src: 'books-2.jpg', category: 'Books', name: 'Books 2' },
  { id: 5, src: 'product-2.jpg', category: 'Product', name: 'Product 2' },
  { id: 2, src: 'app-2.jpg', category: 'App', name: 'App 2' },
  { id: 6, src: 'product-3.jpg', category: 'Product', name: 'Product 3' },
  { id: 9, src: 'branding-3.jpg', category: 'Branding', name: 'Branding 3' },
  { id: 10, src: 'books-1.jpg', category: 'Books', name: 'Books 1' },
  { id: 3, src: 'app-3.jpg', category: 'App', name: 'App 3' },
  { id: 8, src: 'branding-2.jpg', category: 'Branding', name: 'Branding 2' },
  { id: 12, src: 'books-3.jpg', category: 'Books', name: 'Books 3' },
];
function Portfolio() {
  const [filter, setFilter] = useState('All');
  const handleFilter = (category) => {
    setFilter(category);
  };
  const filteredImages =
    filter === 'All'
      ? images
      : images.filter((image) => image.category === filter);
  return (
    <div id='portfolio' className={styles.portfolio}>
      <MainHeading
        heading='Portfolio'
        title='Explore my projects showcasing skills in HTML, CSS, JavaScript, and the MERN stack. Each project demonstrates my ability to create responsive and dynamic web applications.'
      />
      <PortNav activeFilter={filter} onFilterChange={handleFilter} />
      <PortItems images={filteredImages} />
    </div>
  );
}

export default Portfolio;
