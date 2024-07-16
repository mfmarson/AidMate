import { useEffect, useState } from "react";
import { supabase } from "../supabaseConfig";

const fetchUserFavorites = async (userId) => {
  try {
    const { data, error } = await supabase.from("favorites").select(
      `id, user_id, instruction_id, aid_instructions (

          id,
          name,
          steps
        )`
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
    <>
      <h1>DASHBOARD</h1>
      <div>
        <h2>Favorites</h2>

        {favorites.map((filteredData) => (
          <li key={filteredData.aid_instructions.id}>
            <h3>{filteredData.aid_instructions.name}</h3>
            <p>{filteredData.aid_instructions.steps}</p>
          </li>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
