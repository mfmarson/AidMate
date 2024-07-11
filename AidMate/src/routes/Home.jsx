import { Link } from "react-router-dom";
const Home = () => (
  <div>
    <Link to="./Login">
      <button>Login</button>
    </Link>
    <Link to="./Response">
      <button>First Aid Now</button>
    </Link>
   
    <p>
      <strong>Important Notice:</strong> This app provides first aid
      instructions for informational purposes only. If you are uncertain or if
      the situation is severe, please seek professional medical help or go to
      the nearest hospital immediately.
    </p>
  </div>
);

export default Home;
