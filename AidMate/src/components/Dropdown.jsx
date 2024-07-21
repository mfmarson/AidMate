import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import styles from "./modules/Dropdown.module.css"; // Ensure this path is correct

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    navigate(option.value);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Menu</button>
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
