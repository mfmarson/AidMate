import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
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
      <p className="aboutme_ui">
        Introducing AidMate, a first aid application for both web and mobile
        devices, designed to provide quick and efficient first aid instructions
        for people just like you. AidMate was inspired by Baymax, Disney's
        lovable, inflatable,"personal healthcare companion" robot, created to
        offer healthcare to those in need.
        <br></br>
        <br></br>
        Tadashi, Baymax's creator, understood that the core of effective help
        lies in simple, clear instructions. That’s exactly what AidMate offers –
        easy-to-follow guidance to assist others in need. While we may not have
        awesome robots (yet!), we’re proud to present AidMate as"Your First Aid
        Companion."
        <br></br>
        <br></br>
        Our team dreams big, and who knows, maybe one day we'll create a
        real-life Baymax. For now, we're excited to bring you this first step in
        making first aid accessible and straightforward for everyone.
      </p>
    </>
  );
};

export default About;
