import { useState } from 'react';

import { API } from '../../api';
import { BookList } from '../../components/book-list';
import { NavList } from '../../components/nav-list';

import styles from './main-page.module.css';

export const MainPage = () => {
  const [books, setBooks] = useState(API.books.fetchAll());

  const [active, setActive] = useState(false);

  const handleToggleTile = () => {
    setActive(!active);
  };

  return (
    <section className={styles.mainPage}>
      <NavList active={active} onToggleTile={handleToggleTile} />
      <BookList tileStatus={active} books={books} />
    </section>
  );
};
