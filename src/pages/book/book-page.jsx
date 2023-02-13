import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import { API } from '../../api'
import commentAvatar from '../../assets/images/main/book/comment-avatar.png'
import emptyStar from '../../assets/images/main/book/empty-star.png'
import star from '../../assets/images/main/book/star.png'
import arrow from '../../assets/images/main/book/book-nav-1.png'
import slash from '../../assets/images/main/book/book-nav-2.png'

import styles from './book-page.module.css'

export const BookPage = () => {
  const params = useParams()
  const { bookId } = params
  const [book, setBook] = useState()

  useEffect(() => {
    API.books.getById(bookId).then((data) => setBook(data))
  })

  const renderRate = (number) => {
    const arr = []

    for (let i = 0; i < 5; i++) {
      if (i < number) {
        arr.push(
          <img key={i} src={star} width="24" height="24" alt="emptyStar" />
        )
      } else {
        arr.push(
          <img key={i} src={emptyStar} width="24" height="24" alt="emptyStar" />
        )
      }
    }

    return arr
  }

  if (book) {
    return (
      <section className={styles.bookPageContainer}>
        <nav aria-label="breadcrumb" className={styles.breadcrumbContainer}>
          <ol className={styles.breadcrumb}>
            <li>
              <NavLink to="/">Все книги</NavLink>
            </li>
            <img src={arrow} alt="arrow" />
            <li>
              <NavLink to={`/books/${book.category}`}>
                {book.categoryName}
              </NavLink>
            </li>
            <img src={slash} alt="slash" />
            <li aria-current="page">{book.title}</li>
          </ol>
        </nav>
        <div className={styles.aboutBookContainer}>
          <div className={styles.aboutBookWrapepr}>
            <div className={styles.aboutBookImageContainer}>
              <img src={book.image} alt={book.title} />
            </div>
            <div className={styles.aboutBookDescriptionContainer}>
              <div className={styles.aboutBookTitleContainer}>
                <h2>{book.title}</h2>
                <span>
                  {book.author}, {book.year}
                </span>
                <button type="button" className={styles.bookRateButton}>
                  Забронировать
                </button>
              </div>
              <div className={styles.aboutBookDescriptionContainer}>
                <h3 className={styles.aboutBookSectionTitle}>О книге</h3>
                <p className={styles.aboutBookDescription}>
                  Алгоритмы — это всего лишь пошаговые алгоритмы решения задач,
                  и большинство таких задач уже были кем-то решены,
                  протестированы и проверены. Можно, конечно, погрузится в
                  глубокую философию гениального Кнута, изучить многостраничные
                  фолианты с доказательствами и обоснованиями, но хотите ли вы
                  тратить на это свое время?
                  <br />
                  <br />
                  Откройте великолепно иллюстрированную книгу и вы сразу
                  поймете, что алгоритмы — это просто. А грокать алгоритмы — это
                  веселое и увлекательное занятие.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBookContainer}>
          <div className={styles.contentBookWrapper}>
            <div className={styles.contentBookRatingContainer}>
              <div className={styles.aboutBookSectionTitle}>
                <span>Рейтинг</span>
              </div>
              <div className={styles.bookRatingContainer}>
                {renderRate(book.rating)}
                <span className={styles.bookRating}>
                  {book.rating === 'empty' ? (
                    <span>ещё нет оценок</span>
                  ) : (
                    <span>{book.rating}</span>
                  )}
                </span>
              </div>
            </div>
            <div className={styles.contentBookInfoContainer}>
              <div className={styles.aboutBookSectionTitle}>
                <span>Подробная информация</span>
              </div>
              <div className={styles.aboutBookTableContainer}>
                <table className={styles.aboutBookTable}>
                  <tbody>
                    <tr>
                      <th>Издательство</th>
                      <td>Питер</td>
                    </tr>
                    <tr>
                      <th>Год издания</th>
                      <td>2019</td>
                    </tr>
                    <tr>
                      <th>Страниц</th>
                      <td>288</td>
                    </tr>
                    <tr>
                      <th>Переплёт</th>
                      <td>Мягкая обложка</td>
                    </tr>
                    <tr>
                      <th>Формат</th>
                      <td>70х100</td>
                    </tr>
                  </tbody>
                </table>
                <table className={styles.aboutBookTable}>
                  <tbody>
                    <tr>
                      <th>Жанр</th>
                      <td>Компьютерная литература</td>
                    </tr>
                    <tr>
                      <th>Вес</th>
                      <td>370 г</td>
                    </tr>
                    <tr>
                      <th>ISBN</th>
                      <td>978-5-4461-0923-4</td>
                    </tr>
                    <tr>
                      <th>Изготовитель</th>
                      <td>
                        ООО «Питер Мейл». РФ, 198206, г.Санкт-Петербург,
                        Петергофское ш,д. 73, лит. А29
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.contentBookCommentsContainer}>
              <div className={styles.aboutBookSectionTitle}>
                <span>Отзывы 2</span>
              </div>
              <div className={styles.contentBookCommentsWrapper}>
                <div className={styles.contentBookCommentContainer}>
                  <div className={styles.contentBookCommentInfoContainer}>
                    <img src={commentAvatar} alt="avatar" />
                    <span>Иван Иванов</span>
                    <span>5 января 2019</span>
                  </div>
                  <div className={styles.bookRatingCommentContainer}>
                    {book.rating && book.rating === 'empty' ? (
                      <span>ещё нет оценок</span>
                    ) : (
                      renderRate(book.rating)
                    )}
                  </div>
                </div>
                <div>
                  <div className={styles.contentBookCommentInfoContainer}>
                    <img src={commentAvatar} alt="avatar" />
                    <span>Николай Качков</span>
                    <span>20 июня 2018</span>
                  </div>
                  <div className={styles.bookRatingCommentContainer}>
                    {book.rating && book.rating === 'empty' ? (
                      <span>ещё нет оценок</span>
                    ) : (
                      renderRate(book.rating)
                    )}
                  </div>
                  <p className={styles.contentBookComment}>
                    Учитывая ключевые сценарии поведения, курс на
                    социально-ориентированный национальный проект не оставляет
                    шанса для анализа существующих паттернов поведения. Для
                    современного мира внедрение современных методик
                    предоставляет широкие возможности для позиций, занимаемых
                    участниками в отношении поставленных задач. Как уже
                    неоднократно упомянуто, сделанные на базе интернет-аналитики
                    выводы будут в равной степени предоставлены сами себе. Вот
                    вам яркий пример современных тенденций — глубокий уровень
                    погружения создаёт предпосылки для своевременного выполнения
                    сверхзадачи. И нет сомнений, что акционеры крупнейших
                    компаний, инициированные исключительно синтетически,
                    превращены в посмешище, хотя само их существование приносит
                    несомненную пользу обществу.
                  </p>
                </div>
                <div>
                  <div className={styles.contentBookCommentInfoContainer}>
                    <img src={commentAvatar} alt="avatar" />
                    <span>Екатерина Беляева</span>
                    <span>18 февраля 2018</span>
                  </div>
                  <div className={styles.bookRatingCommentContainer}>
                    {book.rating && book.rating === 'empty' ? (
                      <span>ещё нет оценок</span>
                    ) : (
                      renderRate(book.rating)
                    )}
                  </div>
                </div>
              </div>
              <button className={styles.bookRateButton} type="button">
                оценить книгу
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return <h1>Loading</h1>
}
