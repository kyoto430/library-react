import { useState } from 'react'
import sortDown from '../../assets/images/main/navList/sort-1.svg'
import sortUp from '../../assets/images/main/navList/sort-2.svg'

import styles from './sort.module.css'

export const Sort = () => {
  const [active, setActive] = useState(false)

  const handleToggleSort = () => {
    setActive(!active)
  }
  return (
    <div
      type="button"
      onClick={handleToggleSort}
      className={styles.sortContainer}
    >
      {active && active ? (
        <img src={sortUp} alt="sortup" width="20" height="20" />
      ) : (
        <img src={sortDown} alt="sortDown" width="20" height="20" />
      )}
      <span>По рейтингу</span>
    </div>
  )
}
