import { Link } from "react-router-dom";
import styles from "./modules/Search.module.css";

const Choking = () => {
  return (
    <>
      <div>
        <h1>Who Is Choking?</h1>
        <Link to="/AdultChildChoking" className={styles.choking}>
          <button className={styles.aidButton} type="button">
            Adult Or Child
          </button>
        </Link>

        <Link to="/InfantChoking" className={styles.choking}>
          <button className={styles.aidButton} type="button">
            Infant
          </button>
        </Link>
      </div>
    </>
  );
};

export default Choking;
