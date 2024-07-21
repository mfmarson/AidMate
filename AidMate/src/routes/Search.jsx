import { Link } from "react-router-dom";

const Search = () => {
  const phoneNumber = "4045206112";

  return (
    <>
      <button onClick={() => (window.location.href = `tel:${phoneNumber}`)}>
        CALL 911
      </button>
      <Link to="/MapComponent">
        <button type="button">Directions to Hospital</button>
      </Link>
      <div>
        <h1>SELECT FIRST AID INSTRUCTIONS BELOW</h1>
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
      </div>
    </>
  );
};

export default Search;
