import { Link } from "react-router-dom";
const Home = () => (
  <>
    <div>
      <p>
        Introducing AidMate, a first aid application for both web and mobile
        devices, designed to provide quick and efficient first aid instructions
        for people just like you. AidMate was inspired by Baymax, Disney's
        lovable, inflatable,"personal healthcare companion" robot, created to
        offer healthcare to those in need.
        <br></br>
        <br></br>
        Tadashi, Baymax's creator, understood that the core of effective help
        lies in simple, clear instructions. That’s exactly what AidMate offers –
        easy-to-follow guidance to assist others in need. While we may not have
        awesome robots (yet!), we’re proud to present AidMate as"Your First Aid
        Companion."
        <br></br>
        <br></br>
        Our team dreams big, and who knows, maybe one day we'll create a
        real-life Baymax. For now, we're excited to bring you this first step in
        making first aid accessible and straightforward for everyone.
      </p>
    </div>
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
