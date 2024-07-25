import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import styles from "./modules/Home.module.css";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={styles.homeWrapper}>
      <img
        src="./AidMate-removebg-preview.png"
        alt="Logo"
        className={styles.homeLogo}
      />
      <div className={styles.notice}>
        <p>
          <strong>Important Notice:</strong> This app provides first aid
          instructions for informational purposes only. If you are uncertain or
          if the situation is severe, please seek professional medical help or
          go to the nearest hospital immediately.
        </p>
      </div>
      <div className={styles.buttonGroup}>
        <Link to="/Response">
          <button className={styles.firstAidNow}>First Aid NOW</button>
        </Link>
        <Link to="/Login">
          <button className={styles.login}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
