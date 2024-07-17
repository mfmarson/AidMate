import { useEffect, useState } from "react";
import { supabase } from "../supabaseConfig";


const fetchUserFavorites = async () => {
  try {
    let { data, error } = await supabase
      .from("favorites")
      .select(
        `*,
        aid_instructions(name,steps)
      `
      )
      .eq("user_id", 7);
    // hard coded change for demo

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching user favorites:", error);
    return [];
  }
};

const Dashboard = ({ user_id }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const favoritesData = await fetchUserFavorites(user_id);
      setFavorites(favoritesData);
    };

    loadFavorites();
  }, [user_id]);

  return (
    <>
      <h1>DASHBOARD</h1>
      <div>
        <h2>Favorites</h2>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <li key={favorite.instruction_id}>
              <h3>{favorite.aid_instructions.name}</h3>
              <p>{favorite.aid_instructions.steps}</p>
            </li>
          ))
        ) : (
          <p>No favorites found</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
