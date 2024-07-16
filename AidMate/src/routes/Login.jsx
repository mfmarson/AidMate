import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, session } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { error } = await signIn(email, password);
    if (error) {
      alert(error.message);
    } else {
      navigate("/");
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
        <Link to="/Dashboard">
          <button type="submit">Login</button>
        </Link>
      </form>

      <Link to="/Register">Register Here!</Link>
    </>
  );
};

export default SignIn;
