import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import styles from "./modules/Login.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { error } = await signIn(email, password);

    if (error) {
      setErrorMessage("Incorrect Credentials");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={handleSignIn} className={styles.form}>
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
          Login
        </button>
      </form>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <Link to="/Register" className={styles.link}>
        Register Here!
      </Link>
    </div>
  );
};

export default SignIn;
