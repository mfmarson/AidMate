import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";
import styles from "./modules/Logout.module.css"; // Ensure this path is correct

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
    <div className={styles.container}>
      <h1 className={styles.title}>Thank you for choosing AidMate</h1>
      <Link to="/Login">
        <button onClick={handleSignOut} className={styles.button}>
          Logout
        </button>
      </Link>
    </div>
  );
};

export default SignOut;
