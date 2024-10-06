import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Add from "./pages/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
