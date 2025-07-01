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
    path: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
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
