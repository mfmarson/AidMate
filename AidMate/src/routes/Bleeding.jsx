import { useState } from "react";
import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";

const Bleeding = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const options = [
    { value: "/login", label: "Login" },
    { value: "/search", label: "Search First Aid" },
    { value: "/dashboard", label: "Dashboard" },
    { value: "/logout", label: "Logout" },
    { value: "/about", label: "About Us" },
    { value: "/contact", label: "Contact Us" },
  ];

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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <nav className="generalNav">
        <img src="./AidMateLogo.jpeg" alt="Logo" height={150} />
        <button type="button" onClick={toggleDropdown}>
          Menu
        </button>
        {showDropdown && (
          <ul className="dropdown">
            {options.map((option, index) => (
              <li key={index}>
                <Link to={option.value}>{option.label}</Link>
              </li>
            ))}
          </ul>
        )}
        <div className="important">
          <p>
            <strong>Important Notice:</strong> This app provides first aid
            instructions for informational purposes only. If you are uncertain
            or if the situation is severe, please seek professional medical help
            or go to the nearest hospital immediately.
          </p>
        </div>
      </nav>
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
      <div>
        <button className="favoritesButton" type="button">
          Add to Favorites
        </button>
      </div>
    </>
  );
};

export default Bleeding;
