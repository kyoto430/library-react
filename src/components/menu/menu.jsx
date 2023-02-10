import { NavLink } from 'react-router-dom';

import styles from './menu.module.css';

export const Menu = () => (
  <section className={styles.menu}>
    <details open={true}>
      <summary>
        <NavLink to='/books' className={(navData) => (navData.isActive ? styles.booksAllLinkActive : '')}>
          <h2 className={styles.menuListTitle}>Витрина книг</h2>
        </NavLink>
      </summary>
      <ul className={styles.menuList}>
        <li>
          <NavLink to='/books/all' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Все книги</span>{' '}
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/business' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Бизнес-книги</span>
            <span className={styles.menuListNumber}>14</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/detective' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Детективы</span>
            <span className={styles.menuListNumber}>8</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/children' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Детские книги</span>
            <span className={styles.menuListNumber}>14</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/foreign' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Зарубежная литература</span>
            <span className={styles.menuListNumber}>2</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/history' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>История</span>
            <span className={styles.menuListNumber}>5</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/classic' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Классическая литература</span>
            <span className={styles.menuListNumber}>12</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/psyhology' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Книги по психологии</span>
            <span className={styles.menuListNumber}>11</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/computers' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Компьютерная литература</span>
            <span className={styles.menuListNumber}>54</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/culture' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Культура и искусство</span>
            <span className={styles.menuListNumber}>5</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/science' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Наука и образование</span>
            <span className={styles.menuListNumber}>2</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/publicistic' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Публицистическая литература</span>
            <span className={styles.menuListNumber}>0</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/references' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Справочники</span>
            <span className={styles.menuListNumber}>10</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/fantasy' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Фантастика</span>
            <span className={styles.menuListNumber}>12</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/books/humor' className={(navData) => (navData.isActive ? styles.menuLinkActive : '')}>
            <span>Юмористическая литература</span>
            <span className={styles.menuListNumber}>8</span>
          </NavLink>
        </li>
      </ul>
    </details>
    <NavLink to='/terms' className={(navData) => (navData.isActive ? styles.termsLinkActive : '')}>
      <h2 className={styles.menuListTitle}>Правила пользования</h2>
    </NavLink>
    <NavLink to='/contract' className={(navData) => (navData.isActive ? styles.termsLinkActive : '')}>
      <h2 className={styles.menuListTitle}>Договор оферты</h2>
    </NavLink>
  </section>
);
