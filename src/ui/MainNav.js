import { NavLink, useNavigate } from 'react-router-dom';
import styles from './MainNav.module.scss';
import { IoHomeOutline } from 'react-icons/io5';
import { FaRegFileAlt, FaRegUser } from 'react-icons/fa';
import { BsEnvelope, BsHddStack, BsImages } from 'react-icons/bs';
import { useState } from 'react';
import { useMediaQueries } from '@react-hook/media-query';

const sidebarData = [
  { title: 'Home', icon: <IoHomeOutline />, link: 'home' },
  { title: 'About', icon: <FaRegUser />, link: 'about' },
  { title: 'Resume', icon: <FaRegFileAlt />, link: 'resume' },
  { title: 'Portfolio', icon: <BsImages />, link: 'portfolio' },
  { title: 'Services', icon: <BsHddStack />, link: 'services' },
  { title: 'Contact', icon: <BsEnvelope />, link: 'contact' },
];

function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQueries({ maxWidth: '1150px' });
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };
  const navigate = useNavigate();
  const handleNavClick = (sectionId, route) => {
    navigate(`/${route}`);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <ul className={styles.navList}>
        {sidebarData.map((data) => {
          return (
            <li key={data.title}>
              <NavLink
                to={data.link}
                smooth={true}
                duration={500}
                onClick={() => handleNavClick(data.link, data.link)}
                className={styles.navLink}
              >
                {data.icon} <span>{data.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNav;

// import { NavLink } from 'react-router-dom';
// import styles from './MainNav.module.scss';
// import { IoHomeOutline } from 'react-icons/io5';
// import { FaRegFileAlt, FaRegUser } from 'react-icons/fa';
// import { BsEnvelope, BsHddStack, BsImages } from 'react-icons/bs';

// const sidebarData = [
//   {
//     title: 'Home',
//     icon: <IoHomeOutline />,
//     link: '/home',
//     // link: '#home',
//   },
//   {
//     title: 'About',
//     icon: <FaRegUser />,
//     link: '/about',
//   },
//   { title: 'Resume', icon: <FaRegFileAlt />, link: '/resume' },
//   { title: 'Portfolio', icon: <BsImages />, link: '/portfolio' },
//   {
//     title: 'Services',
//     icon: <BsHddStack />,
//     link: '/services',
//   },

//   {
//     title: 'Contact',
//     icon: <BsEnvelope />,
//     link: '/contact',
//   },
// ];

// function MainNav() {
//   return (
//     <nav>
//       <ul className={styles.navList}>
//         {sidebarData.map((data) => {
//           return (
//             <li key={data.title}>
//               <NavLink to={data.link} className={styles.navLink}>
//                 {data.icon} <span>{data.title}</span>
//               </NavLink>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// }

// export default MainNav;
