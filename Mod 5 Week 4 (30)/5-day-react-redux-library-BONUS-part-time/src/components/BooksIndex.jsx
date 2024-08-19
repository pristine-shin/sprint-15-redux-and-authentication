import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';

const BooksIndex = () => {
  const books = [];  // populate from Redux store
  const resetBookData = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <ul>
        {
          books.map(book => (
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))
        }
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
}

export default BooksIndex;
