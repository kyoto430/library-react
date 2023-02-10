import { Outlet } from 'react-router-dom';

import { Menu } from '../menu';

import styles from './layout-main-page.module.css';

export const LayoutMainPage = () => (
  <div className={styles.layoutMainPageContainer}>
    <Menu />
    <Outlet />
  </div>
);
