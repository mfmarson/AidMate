import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../pages/Layout";
import Error from "../pages/Error";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "../pages/ProtectedRouteLayout";
import Search from "./Search";
import Cards from "./Cards";

const Routes = () => {
  const openRoutes = [
    {
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Logout",
          element: <Logout />,
        },
        {
          path: "/Cards",
          element: <Cards />,
        },
        {
          path: "/Search",
          element: <Search />,
        },
      ],
    },
  ];

  const ProtectedRouteLayout = [
    {
      element: <ProtectedRouteLayout />,
      children: [
        {
          path: "/Register",
          element: <Register />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...openRoutes,...Cards, ...ProtectedRouteLayout]);

  return <RouterProvider router={router} />;
};

export default Routes;
