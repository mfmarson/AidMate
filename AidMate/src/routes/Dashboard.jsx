import { useEffect, useState } from "react";
import { supabase } from "../supabaseConfig";

const fetchUserFavorites = async (userId) => {
  try {
    const { data, error } = await supabase.from("favorites").select(
      `
        instruction_id,
        aid_instructions (
          id,
          name,
          steps
        )
        `
    );

    if (error) {
      throw error;
    }

    const filteredData = data.filter((favorite) => favorite.user_id === userId);

    return filteredData;
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    return [];
  }
};

const Dashboard = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoritesData = await fetchUserFavorites(userId);
      setFavorites(favoritesData);
    };

    loadFavorites();
  }, [userId]);

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Your Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.aid_instructions.id}>
            <h3>{favorite.aid_instructions.name}</h3>
            <p>{favorite.aid_instructions.steps}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
