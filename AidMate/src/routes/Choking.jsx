import { Link } from "react-router-dom";

const Choking = () => {
  return (
    <>
      <h1>Who Is Choking?</h1>
      <Link to="/AdultChildChoking">
        <button type="button">Adult Or Child</button>
      </Link>

      <Link to="/InfantChoking">
        <button type="button">Infant</button>
      </Link>
    </>
  );
};

export default Choking;
