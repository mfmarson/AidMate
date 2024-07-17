import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";

const handleButtonClick = () => {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  } else {
    const stepsList = document.querySelectorAll(".stepsList li");
    let stepsText = "";
    stepsList.forEach((step) => {
      stepsText += `${step.textContent}. `;
    });

    readText(stepsText);
  }
};

const CPR = () => {
  return (
    <>
      <div className="emergencyButtons">
        <button type="button">CALL 911</button>
        <button
          onClick={handleButtonClick}
          className="hearButton"
          type="button"
        >
          Hear Instructions
        </button>

        <Link to="/MapComponent">
          <button type="button">Emergency Room Near Me</button>
        </Link>
      </div>
      <nav className="FirstAidName">CPR</nav>
      <div>
        <ul className="stepsList">
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
          <li>Continue until this cycle Emergency Service arrives</li>
        </ul>
      </div>

      <div>
        <button className="favoritesButton" type="button">
          Add to Favorites
        </button>
      </div>
    </>
  );
};

export default CPR;
