import { createBrowserRouter } from 'react-router-dom';
import FrontPage from 'src/Pages/FrontPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <FrontPage />,
  },
]);

export default routes;
