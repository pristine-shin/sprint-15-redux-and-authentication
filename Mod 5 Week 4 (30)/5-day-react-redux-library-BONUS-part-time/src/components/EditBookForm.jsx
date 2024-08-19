import { useParams } from 'react-router-dom';
import BookForm from './BookForm';

const EditBookForm = () => {
  const { bookId } = useParams();
  const book = {};  // populate from Redux store

  return (
    <BookForm book={book} formType="Update Book" />
  );
}

export default EditBookForm;
