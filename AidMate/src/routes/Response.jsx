import { Link } from "react-router-dom";

const Response = () => {
  return (
    <>
      <h1>IS THE PERSON RESPONSIVE AND BREATHING?</h1>
      <Link to="/Search">
        <button>YES</button>
      </Link>
      <Link to="/CPR">
        <button>NO</button>
      </Link>
    </>
  );
};
export default Response;
