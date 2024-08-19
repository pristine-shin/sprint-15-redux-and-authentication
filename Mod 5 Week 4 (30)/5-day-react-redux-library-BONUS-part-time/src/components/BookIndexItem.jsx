import { Link } from 'react-router-dom';

const BookIndexItem = ({ book }) => {
  const deleteBook = (e) => {
    e.preventDefault();
  };

  return (
    <li>
      <Link to={`/books/${book.id}`}>Book #{book.id}</Link>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <button onClick={deleteBook}>Delete</button>
    </li>
  );
};

export default BookIndexItem;
