const Bleeding = () => {
  return (
    <>
      <div className="emergencyButtons">
        <button type="button">CALL 911</button>
        <button type="button">My Location</button>
        <button type="button">Emergency Room Near Me</button>
      </div>
      <nav>Bleeding</nav>
      <div>
        <ul>
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
      <button type="button">Hear Instructions</button>
      <div>
        <button type="button">Add to Favorites</button>
        <a href="">Download</a>
      </div>
    </>
  );
};

export default Bleeding;
