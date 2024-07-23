import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "/Users/meganmarson/Repos/AidMate/AidMate/src/routes/modules/Logout.module.css";

const SignOut = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      alert(error.message);
    } else {
      navigate("/Login");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Thank you for choosing AidMate</h1>
        <div>
          <Link to="/Login">
            <button className={styles.buttonGroup} onClick={handleSignOut}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignOut;
