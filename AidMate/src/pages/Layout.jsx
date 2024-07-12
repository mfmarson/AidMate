import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <img src="./AidMateLogo.jpeg" alt="Logo" />
        <h1>AidMate</h1>
        <ul className="homeLinks">
          <Link to="./">Home</Link>
          <Link to="./About">About</Link>
          <Link to="./Contact">Contact Us</Link>
          <Link to="./Logout">Logout</Link>
          <Link to="./User">Dashboard</Link>
        </ul>
      </nav>
      <div>
        <p>
          <strong>Important Notice:</strong> This app provides first aid
          instructions for informational purposes only. If you are uncertain or
          if the situation is severe, please seek professional medical help or
          go to the nearest hospital immediately.
        </p>
      </div>
      <Outlet />
    </>
  );
};
export default Layout;
