import { Link, Outlet } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import styles from ".routes/modules/Layout.module.css";

const Layout = () => {
  const options = [
    { value: "./Search", label: "View First Aid" },
    { value: "./Login", label: "Login" },
    { value: "./Logout", label: "Logout" },
    { value: "./About", label: "About Us" },
    { value: "./Dashboard", label: "Dashboard" },
    { value: "./Contact", label: "Contact Us" },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        <img src="./AidMateLogo.jpeg" alt="Logo" className={styles.logo} />
        <Dropdown options={options} />
        <div>
          <Link to="/Response">
            <button>First Aid NOW</button>
          </Link>
        </div>
        <div className={styles.important}>
          <p>
            <strong>Important Notice:</strong> This app provides first aid
            instructions for informational purposes only. If you are uncertain
            or if the situation is severe, please seek professional medical help
            or go to the nearest hospital immediately.
          </p>
        </div>
      </nav>
      <Outlet />
      <footer className={styles.footer}>Created by: Megan Marson</footer>
    </>
  );
};

export default Layout;
