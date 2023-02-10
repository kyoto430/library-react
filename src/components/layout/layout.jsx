import { Outlet } from 'react-router-dom';

import { Footer } from '../footer';
import { Header } from '../header';

import styles from './layout.module.css';

export const Layout = () => (
  <div className={styles.layoutWrapper}>
    <Header />
    <main className={styles.layoutMain}>
      <Outlet />
    </main>
    <Footer />
  </div>
);
