import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
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
      <div className="contact_ui">
        <h1>How can we make AidMate better?</h1>
        <h2>Contact Us:</h2>
        <p>megan.marson22@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
