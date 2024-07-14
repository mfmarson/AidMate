import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landingPage">
    <main>
      <img src="./AidMateLogo.jpeg" alt="Logo" />
        <p>
          <strong>Important Notice:</strong> This app provides first aid
          instructions for informational purposes only. If you are uncertain or
          if the situation is severe, please seek professional medical help or
          go to the nearest hospital immediately.
        </p>
    </main>
    <Link to="/login">
      <button>Login</button>
    </Link>
    <Link to="/response">
      <button>First Aid Now</button>
    </Link>
  </div>
);

export default Landing;
