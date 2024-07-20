import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "./routes/AuthContext";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Register from "./routes/Register";
import Search from "./routes/Search";
import Response from "./routes/Response";
import Contact from "./routes/Contact";
import Bleeding from "./routes/Bleeding";
import CPR from "./routes/CPR";
import Burns from "./routes/Burns";
import Choking from "./routes/Choking";
import Dashboard from "./routes/Dashboard";
import About from "./routes/About";
import MapComponent from "./routes/MapComponent";
import Home from "./routes/Home";

const App = () => {
  const { user } = useAuth();
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "Login",
          element: user ? <Navigate to="/dashboard" /> : <Login />,
        },
        {
          path: "Error",
          element: <Error />,
        },
        {
          path: "Logout",
          element: <Logout />,
        },
        {
          path: "About",
          element: <About />,
        },
        {
          path: "Search",
          element: <Search />,
        },
        {
          path: "Register",
          element: <Register />,
        },
        {
          path: "Response",
          element: <Response />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "Dashboard",
          element: <Dashboard />,
        },
        {
          path: "Bleeding",
          element: <Bleeding />,
        },
        {
          path: "CPR",
          element: <CPR />,
        },
        {
          path: "Burns",
          element: <Burns />,
        },
        {
          path: "Choking",
          element: <Choking />,
        },
        {
          path: "MapComponent",
          element: <MapComponent />,
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
