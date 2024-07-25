import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./src/routes/modules/Logout.module.css";

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
        <h2>Thank you for choosing AidMate</h2>
        <div>
          <Link to="/Login">
            <button className={styles.button} onClick={handleSignOut}>
              Logout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignOut;
