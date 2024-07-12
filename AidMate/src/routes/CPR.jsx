const CPR = () => {
  return (
    <>
      <div className="emergencyButtons">
        <button type="button">CALL 911</button>
        <button type="button">My Location</button>
        <button type="button">Emergency Room Near Me</button>
      </div>
      <nav>CPR</nav>
      <div>
        <ul>
          <li>
            Check Response: Tap and shout to check if the person is responsive.
          </li>
          <li>Call for Help: Dial emergency services immediately.</li>
          <li>
            Begin Chest Compressions: Place hands in the center of the chest and
            push hard and fast (100-120 compressions per minute).
          </li>
          <li>
            Rescue Breaths (if trained): After 30 compressions, give 2 breaths,
            tilting the head back and lifting the chin.
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

export default CPR;
