import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./routes/AuthContext";

import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Register from "./routes/Register";
import Search from "./routes/Search";
// import Cards from "./routes/Cards";
import Response from "./routes/Response";
import Contact from "./routes/Contact";
import User from "./routes/Dashboard";
import Bleeding from "./routes/Bleeding";
import CPR from "./routes/CPR";
import Burns from "./routes/Burns";
import Choking from "./routes/Choking";
import Landing from "./pages/Landing";
import Dropdown from "./components/Dropdown";
import Dashboard from "./routes/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/Dropdown",
        element: <Dropdown />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      // {
      //   path: "/Cards",
      //   element: <Cards />,
      // },
      {
        path: "/Search",
        element: <Search />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Response",
        element: <Response />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/User",
        element: <User />,
      },
      {
        path:'/Dashboard',
        element: <Dashboard/>,
      },
      {
        path: "/Bleeding",
        element: <Bleeding />,
      },
      {
        path: "/CPR",
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
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
