import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './AppLayout.module.scss';
import Home from '../features/home/Home';
import About from '../features/about/About';
import Resume from '../features/resume/Resume';
import Portfolio from '../features/portfolio/Portfolio';
import Services from '../features/services/Services';
import Contact from '../features/contact/Contact';
import Sidebars from './Sidebars';

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebars />
      {/* <Sidebar /> */}
      <main className={styles.main}>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
