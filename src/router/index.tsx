import { createBrowserRouter, redirect } from 'react-router-dom';
import FrontPage from 'src/Pages/FrontPage';
import NewsPage from 'src/Pages/NewsPage';

const routes = createBrowserRouter([
  {
    path: '/newspage/',
    element: <NewsPage />,
  },
  {
    path: '/',
    element: <FrontPage />,
  },
  {
    path: '*',
    loader: () => redirect('/'),
  },
]);

export default routes;
