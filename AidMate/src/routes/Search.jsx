import { Link } from "react-router-dom";
import styles from "./modules/Search.module.css";

const Search = () => {
  const phoneNumber = "4045206112";

  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttonGroup}>
          <button
            className={styles.call}
            onClick={() => (window.location.href = `tel:${phoneNumber}`)}
          >
            CALL 911
          </button>
          <Link to="/MapComponent">
            <button className={styles.direct} type="button">
              Directions to Hospital
            </button>
          </Link>
        </div>
        <h2>Select Needed Aid</h2>
        <>
          <div className={styles.aidGroup}>
            <Link to="/CPR" style={{ textDecoration: "none" }}>
              <button className={styles.faButton} type="button">
                CPR
              </button>
            </Link>
            <Link to="/Choking" style={{ textDecoration: "none" }}>
              <button className={styles.faButton} type="button">
                CHOKING
              </button>
            </Link>
            <Link to="/Burns" style={{ textDecoration: "none" }}>
              <button className={styles.faButton} type="button">
                BURNS
              </button>
            </Link>
            <Link to="/Bleeding" style={{ textDecoration: "none" }}>
              <button className={styles.faButton} type="button">
                BLEEDING
              </button>
            </Link>
            <button className={styles.faButton} name="dummy" type="button">
              Coming Soon
            </button>
            <button className={styles.faButton} name="dummy" type="button">
              Coming Soon
            </button>
          </div>
        </>
      </div>
    </>
  );
};

export default Search;
