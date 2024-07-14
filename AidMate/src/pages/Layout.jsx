import { Outlet } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const Layout = () => {
  const options = [
    { value: "/home", label: "Home" },
    { value: "./Contact", label: "Contact Us" },
    { value: "./Logout", label: "Logout" },
    { value: "./User", label: "Dashboard" },
    { value: "./Search", label: "Search First Aid" },
  ];

  return (
    <>
      <header>
        <img src="./AidMateLogo.jpeg" alt="Logo" />
        <Dropdown options={options} />
      </header>
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
