import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../layout/Root';
import Home from '../pages/Home/Home';
import Contact from '../pages/contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import PrivetRoute from '../pages/privetRoute/PrivetRoute';
import Blog from '../pages/Blog/Blog';
import About from '../pages/About/About';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/services.json'),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/services/:id',
        element: (
          <PrivetRoute>
            <ServiceDetails />
          </PrivetRoute>
        ),
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
export default router;
