import { Link } from "react-router-dom";


const Bleeding = () => {
  return (
    <>
      <div className="emergencyButtons">
        <button type="button">CALL 911</button>

        <Link to="/MapComponent">
          <button type="button">Emergency Room Near Me</button>
        </Link>
      </div>
      <nav className="FirstAidName">Bleeding</nav>
      <div>
        <ul className="stepsList">
          <li>
            Apply Pressure: Use a clean cloth or bandage to apply firm pressure
            to the wound.
          </li>
          <li>
            Elevate: If possible, raise the injured area above heart level.
          </li>
          <li>
            Maintain Pressure: Keep applying pressure until the bleeding stops
            or help arrives.
          </li>
          <li>
            Do Not Remove: Do not remove any embedded objects; instead, apply
            pressure around them.
          </li>
        </ul>
      </div>
      <button className="hearButton" type="button">
        Hear Instructions
      </button>
      <div>
        <button className="favoritesButton" type="button">
          Add to Favorites
        </button>
      </div>
    </>
  );
};

export default Bleeding;
