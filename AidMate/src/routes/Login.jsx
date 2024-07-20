import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { error } = await signIn(email, password);
    if (error) {
      alert(error.message);
    }
  };

  
  return (
    <>
      <form className="formui" onSubmit={handleSignIn}>
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

      <Link to="/Register">Register Here!</Link>
    </>
  );
};

export default SignIn;
