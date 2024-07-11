import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth , AuthProvider } from "../AuthContext";


import Layout from "./pages/Layout";
import Error from "./pages/Error";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Logout from "./routes/Logout";
import Register from "./routes/Register";
import Search from "./routes/Search";
import Cards from "./routes/Cards";
import Response from "./routes/Response";
import About from "./routes/About";
import Contact from "./routes/Contact";
import User from "./routes/User";
import Bleeding from "./routes/Bleeding";
import CPR from "./routes/CPR";
import Burns from "./routes/Burns";
import Choking from "./routes/Choking";

const App = () => (
  <Router>
    <AuthProvider>
      
    </AuthProvider>
  </Router>
)

const router = createBrowserRouter([
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
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Response",
        element: <Response />,
      },
      {
        path: "/About",
        element: <About />,
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
  return <RouterProvider router={router} />;
}

export default App;
