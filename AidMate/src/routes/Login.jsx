import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

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
    <>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <div className="error">{errorMessage}</div>}

      <Link to="/Register">Register Here!</Link>
    </>
  );
};

export default SignIn;
