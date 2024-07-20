import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";

const CPR = () => {
  const { user } = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);
  const options = [
    { value: "/login", label: "Login" },
    { value: "/search", label: "Search First Aid" },
    { value: "/dashboard", label: "Dashboard" },
    { value: "/logout", label: "Logout" },
    { value: "/about", label: "About Us" },
    { value: "/contact", label: "Contact Us" },
  ];

  const addToFavorites = async () => {
    let { data, error } = await supabase
      .from("firstaid")
      .select(`id`)
      .eq("name", "CPR");

    const firstaidId = data[0].id;
    await supabase.from("favorites").insert({
      profile_id: user.id,
      firstaid_id: firstaidId,
    });
  };

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
        <button
          className="favoritesButton"
          type="button"
          onClick={addToFavorites}
        >
          Add to Favorites
        </button>
      </div>
    </>
  );
};

export default CPR;
