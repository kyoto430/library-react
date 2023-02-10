import styles from './search.module.css';

export const Search = () => (
  <div>
    <input
      className={styles.inputSearch}
      type='search'
      id='book-search'
      name='searchQuery'
      placeholder='Поиск книги или автора…'
    />
  </div>
);
