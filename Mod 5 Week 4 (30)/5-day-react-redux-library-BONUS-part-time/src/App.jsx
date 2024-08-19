import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BooksIndex from './components/BooksIndex';
import CreateBookForm from './components/CreateBookForm';
import EditBookForm from './components/EditBookForm';
import BookShow from './components/BookShow';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksIndex />
  },
  {
    path: "books/new",
    element: <CreateBookForm />
  },
  {
    path: "books/:bookId",
    element: <BookShow />
  },
  {
    path: "books/:bookId/edit",
    element: <EditBookForm />
  }
]);

const App = () => (
  <>
    <h1>aA Lending Library</h1>
    <RouterProvider router={router} />
  </>
);

export default App;
