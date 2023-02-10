import React from 'react';
import { NavLink } from 'react-router-dom';

import emptyBook from '../../assets/images/main/book/empty-book.png';
import emptyStar from '../../assets/images/main/book/empty-star.png';
import star from '../../assets/images/main/book/star.png';

import styles from './book.module.css';

export const Book = ({ id, image, year, rating, title, author, status, bookedTill, tileStatus, category }) => {
  const renderRate = (number) => {
    const arr = [];

    for (let i = 0; i < 5; i++) {
      if (i < number) {
        arr.push(<img key={i} src={star} width='24' height='24' alt='emptyStar' />);
      } else {
        arr.push(<img key={i} src={emptyStar} width='24' height='24' alt='emptyStar' />);
      }
    }

    return arr;
  };

  const renderImage = (img) => {
    if (img === 'empty') {
      return (
        <div className={tileStatus ? styles.bookImageEmptyListContainer : styles.bookImageEmptyContainer}>
          <img src={emptyBook} alt={title} className={styles.bookImage} width='48' height='48' />
        </div>
      );
    }

    return (
      <div className={tileStatus ? styles.bookImageListContainer : styles.bookImageContainer}>
        <img src={image} alt={title} className={styles.bookImage} width='174' height='242' />
      </div>
    );
  };

  function renderButton(stat, dat) {
    let button = null;

    if (stat === 'available') {
      button = (
        <button className={tileStatus ? styles.bookAvailableListButton : styles.bookAvailableButton} type='button'>
          Забронировать
        </button>
      );
    } else if (stat === 'busy') {
      button = (
        <button className={tileStatus ? styles.bookBusyListButton : styles.bookBusyButton} type='button'>
          {`Занята до ${dat}`}
        </button>
      );
    } else if (stat === 'booked') {
      button = (
        <button className={tileStatus ? styles.bookBookedListButton : styles.bookBusyButton} type='button'>
          Забронирована
        </button>
      );
    }

    return button;
  }

  return (
    <div className={tileStatus ? styles.bookListContainer : styles.bookTileContainer}>
      {tileStatus ? (
        <div className={styles.bookListWrapper}>
          {image && renderImage(image)}
          <div className={styles.bookListContentWrapper}>
            <div className={styles.bookTitleListContainer}>
              <p className={styles.bookListTitle}>{title}</p>
              <span className={styles.bookListSubtitle}>{author}</span>
            </div>
            <div className={styles.bookRateContainer}>
              <div className={styles.bookListRate}>
                {rating && rating === 'empty' ? <span>ещё нет оценок</span> : renderRate(rating)}
              </div>
              {renderButton(status, bookedTill)}
            </div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          {image && renderImage(image)}
          <div className={styles.bookRate}>
            {rating && rating === 'empty' ? <span>ещё нет оценок</span> : renderRate(rating)}
          </div>
          <div className={styles.bookTitleContainer}>
            <p className={styles.bookTitle}>{title}</p>
            <span className={styles.bookSubtitle}>
              {author}, {year}
            </span>
          </div>
          <NavLink to={`/books/${category}/${id}`}>{renderButton(status, bookedTill)}</NavLink>
        </React.Fragment>
      )}
    </div>
  );
};
