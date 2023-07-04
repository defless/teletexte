import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './Home';

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "komencamarche",
      element: <div>About</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;