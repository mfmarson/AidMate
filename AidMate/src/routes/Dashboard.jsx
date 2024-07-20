import { useState, useEffect } from "react";
import { supabase } from "../supabaseConfig";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

//data looks like this:
// [
//   {
//     id: 'blahbalh',
//     profile_id: 'prof_id',
//     firstaid_id: 'asdvds',
//     firstaid: {
//       id: 'asdfasdf',
//       name: 'bleeding',
//       steps: "steps"
//     }
//   }
// ]

const options = [
  { value: "/contact", label: "Contact Us" },
  { value: "/logout", label: "Logout" },
  { value: "/dashboard", label: "Dashboard" },
  { value: "/search", label: "Search First Aid" },
  { value: "/about", label: "About Us" },
];

const Dashboard = () => {
  const { user } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const userId = user.id;

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const fetchUserFavorites = async () => {
    try {
      let { data, error } = await supabase
        .from("favorites")
        .select(`*, firstaid (name,steps)`)
        .eq("profile_id", user.id);
      console.log("data", data);

      if (error) {
        throw error;
      }

      setFavorites(data.map((f) => f.firstaid));
    } catch (error) {
      console.error("Error fetching user favorites:", error);
      setFavorites([]);
    }
  };

  // const addFavorite = async (aidInstructionId) => {
  //   try {
  //     const { data, error } = await supabase
  //       .from("favorites")
  //       .insert([{ profile_id: userId, firstaid_id: aidInstructionId }])
  //       .single();

  //     if (error) {
  //       throw error;
  //     }

  //     // Update the state to include the new favorite
  //     setFavorites([...favorites, data]);
  //   } catch (error) {
  //     console.error("Error adding favorite:", error);
  //   }
  // };

  useEffect(() => {
    fetchUserFavorites();
  }, [userId]);

  console.log("favorites", favorites);

  return (
    <div>
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
      <div className="dashboard_ui">
        <h1>Account Information:</h1>
        <p>Data from user_info table will be fetched here</p>
        <h1>Favorites:</h1>
        {favorites.length > 0 ? (
          <ul>
            {favorites.map((favorite) => (
              <li key={favorite.name}>
                <h3>{favorite.name}</h3>
                <p>{favorite.steps}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorites found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
