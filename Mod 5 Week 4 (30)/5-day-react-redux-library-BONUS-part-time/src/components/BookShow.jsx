import { Link, useParams } from 'react-router-dom';

const BookShow = () => {
  const { bookId } = useParams();
  const book = {}; // populate from Redux store

  const changeCheckOut = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      ID: {book.id}
      <br/>
      Title: {book.title}
      <br/>
      Author: {book.author}
      <br/>
      <button onClick={changeCheckOut}>
        {book.checkedOut === true && "Return"}
        {book.checkedOut === false && "Check Out"}
      </button>
      <br/>
      <Link to="/">Back to Books List</Link>
    </section>
  );
}

export default BookShow;
