import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <img src="./AidMateLogo.jpeg" alt="Logo" />
        <h1>AidMate</h1>
        <ul>
          <Link to="./">Home</Link>
          <Link to="./About">About</Link>
          <Link to="./Contact">Contact Us</Link>
          <Link to="./Logout">Logout</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;
