import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;