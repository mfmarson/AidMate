import { Link } from "react-router-dom";
import styles from "../modules/Response.module.css";

const Response = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>IS THE PERSON RESPONSIVE AND BREATHING?</h1>
        <div className={styles.buttonGroup}>
          <Link to="/Search">
            <button className={styles.yes}>YES</button>
          </Link>
          <Link to="/CPR">
            <button className={styles.no}>NO</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Response;
