import { Link, Outlet } from "react-router-dom";
import Dropdown from "./Dropdown";
import styles from "./Layout.module.css";

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
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <img
            src="./src/assets/AidMate-removebg-preview.png"
            alt="Logo"
            className={styles.logo}
          />
          <Dropdown options={options} />
        </div>
        <Link to="/Response">
          <button className={styles.firstAidNow}>First Aid NOW</button>
        </Link>
      </div>
      <div className={styles.notice}>
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
