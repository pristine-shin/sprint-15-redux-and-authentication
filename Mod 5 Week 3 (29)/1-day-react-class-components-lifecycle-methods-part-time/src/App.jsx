import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import FunctionTitan from './components/functionComponents/FunctionTitan';
import FunctionKuiper from './components/functionComponents/FunctionKuiper';
import ClassTitan from './components/classComponents/ClassTitan';
import Kuiper from './components/classComponents/ClassKuiper';

function Layout() {
  return (
    <div className='main-container'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element:
          <div className='welcome'>
            <h1>Welcome! Choose Which Cat You Want to Play With</h1>
          </div>
      },
      {
        path: 'titan',
        element: <ClassTitan />
      },
      {
        path: 'kuiper',
        element: <Kuiper />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;
