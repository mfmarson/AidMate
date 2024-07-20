import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <div className=" bg-gray-400">
        <img src="./AidMateLogo.jpeg" alt="Logo" height={150} />
        <div className="important">
          <p>
            <strong>Important Notice:</strong> This app provides first aid
            instructions for informational purposes only. If you are uncertain
            or if the situation is severe, please seek professional medical help
            or go to the nearest hospital immediately.
          </p>
        </div>
        <div>
          <Link to="/Login">
            <button className="bg-blue-100">Login</button>
          </Link>
          <Link to="/Response">
            <button>First Aid Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
