import { useState, useEffect } from "react";
import { supabase } from "../supabaseConfig";
import { useAuth } from "./AuthContext";
import styles from "./modules/Dashboard.module.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showFavorites, setShowFavorites] = useState(true);

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
    return (
      <Link
        to="/login"
        style={{ textDecoration: "none" }}
        className={styles.dashError}
      >
        Please login to access the dashboard
      </Link>
    );
  }

  return (
    <div className={styles.dashboard_ui}>
      <h1>Favorites {showFavorites}</h1>
      {showFavorites &&
        (favorites.length > 0 ? (
          <table className={styles.favoritesTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Steps</th>
              </tr>
            </thead>
            <tbody>
              {favorites.map((favorite) => (
                <tr key={favorite.name}>
                  <td className={styles.name}>{favorite.name}</td>
                  <td>
                    <ol>
                      {favorite.steps
                        .split("\n")
                        .filter((step) => step.trim() !== "")
                        .map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                    </ol>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No favorites found</p>
        ))}
    </div>
  );
};

export default Dashboard;
