import { useState, useEffect } from "react";
import { supabase } from "../supabaseConfig";
import { useAuth } from "./AuthContext";
import styles from "./modules/Dashboard.module.css";

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
    <div className={styles.dashboard_ui}>
      <h1>Account Information:</h1>
      <table className={styles.infoTable}>
        <tbody>
          <tr>
            <td>Name: Tadashi Hamada </td>
          </tr>
          <tr>
            <td>
              Email:
              {user.email}
            </td>
          </tr>
          <tr>
            <td>Phone Number: 678.867.5309</td>
          </tr>
          <tr>
            <td>Emergency Contact: Leah Emmet - Aunt</td>
          </tr>
          <tr>
            <td>Primary Care Physician: Dr.Amy Jones</td>
          </tr>
        </tbody>
      </table>
      <h1>Favorites:</h1>
      {favorites.length > 0 ? (
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
                <td>{favorite.name}</td>
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
      )}
    </div>
  );
};

export default Dashboard;
