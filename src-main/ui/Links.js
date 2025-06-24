import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSkype,
} from 'react-icons/fa';
import styles from './Links.module.scss';

const links = [
  {
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/salihabid349/',
  },
  {
    icon: <FaFacebook />,
    path: 'https://www.facebook.com/profile.php?id=100088239233567',
  },
  {
    icon: <FaGithub />,
    path: 'https://github.com/salihaabid',
  },
  {
    icon: <FaSkype />,
    path: 'skype:live:.cid.834000c4e7d75590?chat',
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
