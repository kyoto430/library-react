import { Link } from 'react-router-dom';

import fb from '../../assets/images/footer/socials/fb.png';
import linkedin from '../../assets/images/footer/socials/in.png';
import instagram from '../../assets/images/footer/socials/instagram.png';
import vk from '../../assets/images/footer/socials/vk.png';

import styles from './footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <p>
        <span>© 2020-2023 Cleverland. Все права защищены.</span>
      </p>
    </div>
    <div className={styles.footerSocialContainer}>
      <Link href='#'>
        <img src={fb} alt='facebook' />
      </Link>
      <Link href='#'>
        <img src={instagram} alt='instagram' />
      </Link>
      <Link href='#'>
        <img src={vk} alt='vk' />
      </Link>
      <Link href='#'>
        <img src={linkedin} alt='linkedin' />
      </Link>
    </div>
  </footer>
);
