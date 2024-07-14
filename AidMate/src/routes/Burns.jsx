const Burns = () => {
  return (
    <>
      <div className="emergencyButtons">
        <button type="button">CALL 911</button>
      
        <button type="button">Emergency Room Near Me</button>
      </div>
      <nav className="FirstAidName">Burns</nav>
      <div>
        <ul className="stepsList">
          <li>
            Cool the Burn: Run cool (not cold) water over the burn for at least
            10 minutes.
          </li>
          <li>
            Cover the Burn: Use a sterile, non-adhesive bandage or clean cloth.
          </li>
          <li>
            Do Not Apply: Do not apply creams, ointments, or ice to the burn.
          </li>
          <li>
            Seek Help: Call emergency services if the burn is severe or covers a
            large area.
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

export default Burns;
