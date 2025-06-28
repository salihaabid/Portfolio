import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import styles from './Links.module.scss';

const links = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/salihaabid',
  },
  // {
  //   icon: <FaFileAlt />,
  //   path: 'https://github.com/salihaabid',
  // },
  {
    icon: <FaEnvelope />,
    path: 'mailto:salihabid349@gmail.com',
  },
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/salihaabid/',
  },
];

function Links() {
  return (
    <ul className={styles.links}>
      {links.map((link, i) => {
        return (
          <li key={i} className={styles.link}>
            <a href={link.path} target='_blank' rel='noopener noreferrer'>
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
