import { Search } from '../search';
import { Sort } from '../sort';
import { Tile } from '../tile';

import styles from './nav-list.module.css';

export const NavList = ({ ...rest }) => (
  <div className={styles.navListContainer}>
    <Search />
    <Sort />
    <Tile {...rest} />
  </div>
);
