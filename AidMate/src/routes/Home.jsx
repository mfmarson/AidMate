import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <div>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/Response">
          <button>First Aid Now</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
