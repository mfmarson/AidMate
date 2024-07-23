import { Link } from "react-router-dom";
import styles from "/Users/meganmarson/Repos/AidMate/AidMate/src/routes/modules/Search.module.css";

const Search = () => {
  const phoneNumber = "4045206112";

  return (
    <>
      <div className={styles.container}>
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
        <h2>Select Needed Aid</h2>
        <div>
          <table className={styles.buttonTable}>
            <tr>
              <td>
                <Link to="/CPR">
                  <button className={styles.aidButton} type="button">
                    CPR
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/Choking">
                  <button className={styles.aidButton} type="button">
                    CHOKING
                  </button>
                </Link>
              </td>
              <td>
                <Link to="/Burns">
                  <button className={styles.aidButton} type="button">
                    BURNS
                  </button>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/Bleeding">
                  <button className={styles.aidButton} type="button">
                    BLEEDING
                  </button>
                </Link>
              </td>
              <td>
                <button className={styles.aidButton} name="dummy" type="button">
                  STROKE
                </button>
              </td>
              <td>
                <button className={styles.aidButton} name="dummy" type="button">
                  POISON CONTROL
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Search;
