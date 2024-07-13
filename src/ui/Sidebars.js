import { useEffect, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import Logo from './Logo';
import Links from './Links';
import MainNav from './MainNav';
import styles from './Sidebars.module.scss';

function Sidebars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 1150;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {isMobile && (
        <div className={styles.hamburgerIcon} onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      )}

      <aside
        className={`${styles.aside}`}
        style={{ display: isMobile ? 'block' : 'hidden' }}
      >
        <Logo />
        <Links />
        <MainNav />
      </aside>
    </>
  );
}

export default Sidebars;

// import { useMediaQuery } from '@react-hook/media-query';
// import { useState } from 'react';
// import styles from './Sidebars.module.scss';
// import { IoClose, IoMenu } from 'react-icons/io5';
// import Logo from './Logo';
// import Links from './Links';
// import MainNav from './MainNav';

// function Sidebars() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isMobile = useMediaQuery({ maxWidth: '1150px' });

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//     }
//   };

//   return (
//     <>
//       {isMobile && (
//         <div className={styles.hamburgerIcon} onClick={toggleMenu}>
//           {isMenuOpen ? <IoClose /> : <IoMenu />}
//         </div>
//       )}

//       <aside
//         className={`${styles.aside} ${isMenuOpen ? styles.open : ''} ${
//           !isMobile ? styles.alwaysVisible : ''
//         }`}
//       >
//         <Logo />
//         <Links />
//         <MainNav />
//       </aside>
//     </>
//   );
// }

// export default Sidebars;

//////////////////////////////////////////////////////////////////////////////////////////////////
// import { useState } from 'react';
// import styles from './Sidebars.module.scss';
// import { useMediaQuery } from '@react-hook/media-query';
// import { IoClose, IoHomeOutline, IoMenu } from 'react-icons/io5';
// import { FaRegFileAlt, FaRegUser } from 'react-icons/fa';
// import { BsEnvelope, BsHddStack, BsImages } from 'react-icons/bs';
// import { NavLink, useNavigate } from 'react-router-dom';
// const sidebarData = [
//   { title: 'Home', icon: <IoHomeOutline />, link: 'home' },
//   { title: 'About', icon: <FaRegUser />, link: 'about' },
//   { title: 'Resume', icon: <FaRegFileAlt />, link: 'resume' },
//   { title: 'Portfolio', icon: <BsImages />, link: 'portfolio' },
//   { title: 'Services', icon: <BsHddStack />, link: 'services' },
//   { title: 'Contact', icon: <BsEnvelope />, link: 'contact' },
// ];
// function Sidebars() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const isMobile = useMediaQuery({ maxWidth: '1150px' });
//   const navigate = useNavigate();
//   const handleNavClick = (sectionId, route) => {
//     navigate(`/${route}`);
//     document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
//   };
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMobileMenu = () => {
//     if (isMobile) {
//       setIsMenuOpen(false);
//     }
//   };
//   const navLinks = () => {
//     return (
//       <nav>
//         <ul className={styles.navList}>
//           {sidebarData.map((data) => {
//             return (
//               <li key={data.title}>
//                 <NavLink
//                   to={data.link}
//                   smooth={true}
//                   duration={500}
//                   onClick={() => handleNavClick(data.link, data.link)}
//                   className={styles.navLink}
//                 >
//                   {data.icon} <span>{data.title}</span>
//                 </NavLink>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     );
//   };
//   return (
//     <aside className={styles.aside}>
//       <div className={styles.logo}>
//         <img src='/logo.jpg' alt='' />
//         <h1>Alex Smith</h1>
//       </div>

//       {isMobile && (
//         <div className={styles.navToggle} id='nav-toggle' onClick={toggleMenu}>
//           <IoMenu />
//         </div>
//       )}
//       {isMobile ? (
//         <div
//           className={`${isMenuOpen ? `${styles.showMenu} ` : ''}`}
//           id='nav-menu'
//         >
//           {navLinks()}
//           <div className={styles.navClose} id='nav-close' onClick={toggleMenu}>
//             <IoClose />
//           </div>
//         </div>
//       ) : (
//         navLinks()
//       )}
//     </aside>
//   );
// }

// export default Sidebars;
