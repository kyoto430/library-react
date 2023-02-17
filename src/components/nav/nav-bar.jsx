import avatar from '../../assets/images/header/avatar.png'
import logo from '../../assets/images/header/logo-clevertec_40.png'
import bars from '../../assets/images/header/bars.png'
import close from '../../assets/images/header/close.png'

import styles from './nav-bar.module.css'

export const NavBar = () => (
  <nav className={styles.nav}>
    <div className={styles.navMenu}>
      <div className={styles.navLogo}>
        <img src={logo} alt="logo" />
        <span>Cleverland</span>
      </div>
      <div className={styles.navPersonContainer}>
        <div>
          <h1>Библиотека</h1>
        </div>
        <div className={styles.navAvatar}>
          <span>Привет, Иван!</span>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
      <img
        width="32"
        height="32"
        className={styles.navClose}
        id="nav-close"
        src={close}
        alt="Иконка закрытия меню"
      />
    </div>
    <div className={styles.navToggle} id="nav-toggle">
      <img width="32" height="32" src={bars} alt="Иконка открытия меню" />
    </div>
  </nav>
)
