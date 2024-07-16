import { Link } from "react-router-dom";
const Home = () => (
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

export default Home;
