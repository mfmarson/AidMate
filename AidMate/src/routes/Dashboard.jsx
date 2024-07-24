import { useState, useEffect } from "react";
import { supabase } from "../supabaseConfig";
import { useAuth } from "./AuthContext";
import styles from "./modules/Dashboard.module.css";

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
      <h1 className={styles.dashError}>Please login to access the dashboard</h1>
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
      <h1
        onClick={() => setShowAccountInfo(!showAccountInfo)}
        className={styles.dropdownHeader}
      >
        Account Information {showAccountInfo ? "▲" : "▼"}
      </h1>
      {showAccountInfo && (
        <table className={styles.infoTable}>
          <tbody>
            <tr>
              <td>
                <strong>Name:</strong> Tadashi Hamada
              </td>
            </tr>
            <tr>
              <td>
                <strong>Email:</strong> {user.email}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Phone Number:</strong> 678.867.5309
              </td>
            </tr>
            <tr>
              <td>
                <strong>Emergency Contact:</strong> Leah Emmet : 678.990.5998
              </td>
            </tr>
            <tr>
              <td>
                <strong>Primary Care Physician:</strong> Dr. Amy Jones
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
