import { Link } from "react-router-dom";
import styles from "./modules/Search.module.css";

const Choking = () => {
  return (
    <>
      <h1>Who Is Choking?</h1>
      <div className={styles.choke}>
        <Link
          to="/AdultChildChoking"
          style={{ textDecoration: "none" }}
          className={styles.choking}
        >
          <button className={styles.aidButton} type="button">
            Adult Or Child
          </button>
        </Link>

        <Link
          to="/InfantChoking"
          style={{ textDecoration: "none" }}
          className={styles.choking}
        >
          <button className={styles.aidButton} type="button">
            Infant
          </button>
        </Link>
      </div>
    </>
  );
};

export default Choking;