import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState } from "react";

const Burns = () => {
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
      <div>
        <button className="favoritesButton" type="button">
          Add to Favorites
        </button>
      </div>
    </>
  );
};

export default Burns;
