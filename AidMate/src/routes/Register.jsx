import { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { error } = await signUp(email, password);
    if (error) {
      alert(error.message);
    } else {
      alert("You have registered successfully!");
      navigate("/Login");
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <input
        placeholder="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
