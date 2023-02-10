import sortDown from '../../assets/images/main/navList/sort-1.svg';

import styles from './sort.module.css';

export const Sort = () => (
  <div className={styles.sortContainer}>
    <img src={sortDown} alt='sortDown' width='20' height='20' />
    <span>По рейтингу</span>
  </div>
);
