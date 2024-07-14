const Choking = () => {
  return (
    <>
      <div className="emergencyButtons">
        <button type="button">CALL 911</button>
     
        <button type="button">Emergency Room Near Me</button>
      </div>
      <nav className="FirstAidName">Choking</nav>
      <div>
        <ul className="stepsList">
          <h1>ADULT</h1>
          <li>
            Encourage Coughing: If the person can cough, encourage them to keep
            coughing.
          </li>
          <li>
            Perform Back Blows: If coughing fails, give 5 firm back blows
            between the shoulder blades.
          </li>
          <li>
            Abdominal Thrusts: Stand behind the person, place your fist above
            their navel, and perform 5 quick upward thrusts.
          </li>
          <li>
            Repeat: Alternate between 5 back blows and 5 abdominal thrusts until
            the object is expelled or help arrives.
          </li>
        </ul>
        <ul>
          <h1>INFANT</h1>
          <li>
            Position: Lay the infant face down on your forearm, supporting the
            head and neck.
          </li>
          <li>
            Back Blows: Give 5 gentle but firm back blows with the heel of your
            hand between the infant shoulder blades.
          </li>
          <li>
            Chest Thrusts: If the object is not expelled, turn the infant face
            up, place two fingers in the center of the chest, and give 5 quick
            chest thrusts.
          </li>
          <li>
            Repeat: Alternate between 5 back blows and 5 chest thrusts until the
            object is expelled or emergency help arrives.
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

export default Choking;
