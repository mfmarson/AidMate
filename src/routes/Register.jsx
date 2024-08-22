import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import styles from "./modules/Register.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { error } = await signUp(email, password);

    if (error) {
      setErrorMessage("Registration Failed");
    } else {
      alert("You have been registered!");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSignUp} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <Link
        to="/login"
        className={styles.link}
        style={{ textDecoration: "none" }}
      >
        Already have an account? Login here!
      </Link>
    </div>
  );
};

export default SignUp;
