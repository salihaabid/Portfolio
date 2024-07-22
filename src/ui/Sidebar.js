// import { useState } from 'react';
// import styles from './Sidebar.module.scss';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { IoClose, IoHomeOutline, IoMenu } from 'react-icons/io5';
// import { FaRegFileAlt, FaRegUser } from 'react-icons/fa';
// import { BsEnvelope, BsHddStack, BsImages } from 'react-icons/bs';
// import Links from './Links';
// import Logo from './Logo';
// const sidebarData = [
//   { title: 'Home', icon: <IoHomeOutline />, link: 'home' },
//   { title: 'About', icon: <FaRegUser />, link: 'about' },
//   { title: 'Resume', icon: <FaRegFileAlt />, link: 'resume' },
//   { title: 'Portfolio', icon: <BsImages />, link: 'portfolio' },
//   { title: 'Services', icon: <BsHddStack />, link: 'services' },
//   { title: 'Contact', icon: <BsEnvelope />, link: 'contact' },
// ];
// function Sidebar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isActive, setIsActive] = useState(false);
//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };
//   const closeMenuOnMobile = () => {
//     if (window.innerWidth <= 1150) {
//       setShowMenu(false);
//     }
//   };
//   const navigate = useNavigate();
//   const handleNavClick = (sectionId, route) => {
//     navigate(`/${route}`);
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//   };
//   const combinedClickHandler = (sectionId, route) => {
//     handleNavClick(sectionId, route);
//     closeMenuOnMobile();
//   };
//   return (
//     <aside className={`${styles.aside} ${showMenu ? styles.showMenu : ''}`}>
//       <Logo />
//       <Links />
//       <nav>
//         <ul className={`${styles.navList} `}>
//           {sidebarData.map((data) => {
//             return (
//               <li key={data.title}>
//                 <Link
//                   to={data.link}
//                   smooth={true}
//                   duration={500}
//                   onClick={() => combinedClickHandler(data.link, data.link)}
//                   className={styles.navLink}
//                 >
//                   {data.icon} <span>{data.title}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//         <div className={styles.navToggle} onClick={toggleMenu}>
//           {showMenu ? <IoClose /> : <IoMenu />}
//         </div>
//       </nav>
//     </aside>
//   );
// }

// export default Sidebar;

import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoClose, IoHomeOutline, IoMenu } from 'react-icons/io5';
import { FaRegFileAlt, FaRegUser } from 'react-icons/fa';
import { BsEnvelope, BsHddStack, BsImages } from 'react-icons/bs';
import Links from './Links';
import Logo from './Logo';

const sidebarData = [
  { title: 'Home', icon: <IoHomeOutline />, link: 'home' },
  { title: 'About', icon: <FaRegUser />, link: 'about' },
  { title: 'Resume', icon: <FaRegFileAlt />, link: 'resume' },
  { title: 'Portfolio', icon: <BsImages />, link: 'portfolio' },
  { title: 'Services', icon: <BsHddStack />, link: 'services' },
  { title: 'Contact', icon: <BsEnvelope />, link: 'contact' },
];

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState('/home'); // Default active link

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  const navigate = useNavigate();
  const handleNavClick = (sectionId, route) => {
    navigate(`/${route}`);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const combinedClickHandler = (sectionId, route) => {
    handleNavClick(sectionId, route);
    setActiveLink(`/${route}`); // Set active link
    closeMenuOnMobile();
  };

  return (
    <aside className={`${styles.aside} ${showMenu ? styles.showMenu : ''}`}>
      <Logo />
      <Links />
      <nav>
        <ul className={`${styles.navList}`}>
          {sidebarData.map((data) => (
            <li key={data.title}>
              <NavLink
                to={`/${data.link}`}
                smooth='true'
                duration='500'
                onClick={() => combinedClickHandler(data.link, data.link)}
                className={`${styles.navLink} ${
                  activeLink === `/${data.link}` ? styles.active : ''
                }`}
              >
                {data.icon} <span>{data.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={styles.navToggle} onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
