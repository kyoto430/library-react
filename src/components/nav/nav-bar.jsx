import avatar from '../../assets/images/header/avatar.png';
import logo from '../../assets/images/header/logo-clevertec_40.png';

import styles from './nav-bar.module.css';

export const NavBar = () => (
  <nav className={styles.nav}>
    <div className={styles.navLogo}>
      <img src={logo} alt='logo' />
      <span>Cleverland</span>
    </div>
    <div className={styles.navPersonContainer}>
      <div>
        <h1>Библиотека</h1>
      </div>
      <div className={styles.navAvatar}>
        <span>Привет, Иван!</span>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  </nav>
);
