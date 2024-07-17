import { Outlet, Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const Layout = () => {
  const options = [
    { value: "/", label: "Home" },
    { value: "./Contact", label: "Contact Us" },
    { value: "./Logout", label: "Logout" },
    { value: "./Dashboard", label: "Dashboard" },
    { value: "./Search", label: "Search First Aid" },
    { value: "./About", label: "About Us" },
  ];

  return (
    <>
      <header className="layoutNav">
        <img src="./AidMateLogo.jpeg" alt="Logo" />
        <Dropdown options={options} />
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Response">
          <button>First Aid Now</button>
        </Link>
      </header>

      <div className="important">
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
