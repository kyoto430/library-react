import barsGray from '../../assets/images/main/navList/bars-gray.svg';
import barsWhite from '../../assets/images/main/navList/bars-white.svg';
import gridGray from '../../assets/images/main/navList/grid-gray.svg';
import gridWhite from '../../assets/images/main/navList/grid-white.svg';

import styles from './tile.module.css';

export const Tile = ({ active, onToggleTile }) => (
  <div className={styles.tileContainer}>
    <button onClick={onToggleTile} type='button' className={`${active ? styles.tileNoActive : styles.tileActive}`}>
      {active ? (
        <img src={gridGray} alt='grid' width='20' height='20' />
      ) : (
        <img src={gridWhite} alt='grid' width='20' height='20' />
      )}
    </button>
    <button onClick={onToggleTile} type='button' className={`${active ? styles.tileActive : styles.tileNoActive}`}>
      {active ? (
        <img src={barsWhite} alt='bars' width='20' height='20' />
      ) : (
        <img src={barsGray} alt='bars' width='20' height='20' />
      )}
    </button>
  </div>
);
