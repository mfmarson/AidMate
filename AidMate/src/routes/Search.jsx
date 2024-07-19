import { Link } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const phoneNumber = "4045206112";

  const [showDropdown, setShowDropdown] = useState(false);

  const options = [
    { value: "/login", label: "Login" },
    { value: "/search", label: "Search First Aid" },
    { value: "/dashboard", label: "Dashboard" },
    { value: "/logout", label: "Logout" },
    { value: "/about", label: "About Us" },
    { value: "/contact", label: "Contact Us" },
  ];

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
      </nav>
      <div className="important">
        <p>
          <strong>Important Notice:</strong> This app provides first aid
          instructions for informational purposes only. If you are uncertain or
          if the situation is severe, please seek professional medical help or
          go to the nearest hospital immediately.
        </p>
      </div>
      <button onClick={() => (window.location.href = `tel:${phoneNumber}`)}>
        CALL 911
      </button>
      <Link to="/MapComponent">
        <button type="button">Hospitals Near Me</button>
      </Link>
      <div>
        <h1>SELECT FIRST AID INSTRUCTIONS BELOW</h1>
        <Link to="/CPR">
          <button type="button">CPR</button>
        </Link>
        <Link to="/Choking">
          <button type="button">CHOKING</button>
        </Link>
        <Link to="/Burns">
          <button type="button">BURN</button>
        </Link>
        <Link to="/Bleeding">
          <button type="button">BLEEDING</button>
        </Link>
      </div>
    </>
  );
};

export default Search;
