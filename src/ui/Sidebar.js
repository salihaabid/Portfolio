import { useState } from 'react';
import Links from './Links';
import Logo from './Logo';
import MainNav from './MainNav';
import styles from './Sidebar.module.scss';
function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Logo />
      <Links />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
