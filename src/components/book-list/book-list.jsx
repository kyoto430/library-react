import { Book } from '../book/book';

import styles from './book-list.module.css';

export const BookList = ({ tileStatus, books }) => (
  <div className={tileStatus ? styles.bookListContainer : styles.bookTileContainer}>
    {books && books.map((book) => <Book key={book.id} tileStatus={tileStatus} {...book} />)}
  </div>
);
