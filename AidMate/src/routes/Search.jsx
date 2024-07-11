import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <button type="button">CALL 911</button>
      <button type="button">My Location</button>
      <button type="button">Emergency Room Near Me</button>
      <h1>CLICK ON THE FIRST AID YOU NEED</h1>

      <Link to="/CPR">
        <button type="button">CPR</button>
      </Link>
      <Link to="/Choking">
        <button type="button">CHOKING</button>
      </Link>
      <Link to="/Burns">
        <button type="button">BURN</button>
      </Link>
      <Link to="/Bleeding">
        <button type="button">BLEEDING</button>
      </Link>
    </>
  );
};

export default Search;
