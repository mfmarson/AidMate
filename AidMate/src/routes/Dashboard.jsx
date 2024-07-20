import { useState, useEffect } from "react";
import { supabase } from "../supabaseConfig";
import { useAuth } from "./AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (user && user.id) {
      fetchUserFavorites();
    }
  }, [user]);

  const fetchUserFavorites = async () => {
    try {
      let { data, error } = await supabase
        .from("favorites")
        .select(`*, firstaid (name, steps)`)
        .eq("profile_id", user.id);

      if (error) {
        console.error("Error fetching user favorites:", error);
        setFavorites([]);
        return;
      }

      setFavorites(data.map((f) => f.firstaid));
    } catch (error) {
      console.error("Error fetching user favorites:", error);
      setFavorites([]);
    }
  };

  if (!user) {
    return <div>Please login to access the dashboard</div>;
  }

  return (
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
  );
};

export default Dashboard;
