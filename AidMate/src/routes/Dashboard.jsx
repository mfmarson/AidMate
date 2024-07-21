import { useState, useEffect } from "react";
import { supabase } from "../supabaseConfig";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";

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
      <ul>
        <li>Name:</li>
        <li>Email:</li>
        <li>Phone Number:</li>
        <li>Emergency Contact:</li>
        <li>Primary Care Physician:</li>
      </ul>
      <h1>Favorites:</h1>
      {favorites.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Steps</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((favorite) => (
              <tr key={favorite.name}>
                <td>{favorite.name}</td>
                <td>{favorite.steps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No favorites found</p>
      )}
    </div>
  );
};

export default Dashboard;
