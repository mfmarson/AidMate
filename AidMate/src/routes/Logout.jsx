import { useAuth } from "./AuthContext";
import { useNavigate, Link } from "react-router-dom";


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
      <h1>Thank you for using AidMate</h1>
      <Link to="/Login">
        <button onClick={handleSignOut} className="button">
          Logout
        </button>
      </Link>
    </>
  );
};

export default SignOut;
