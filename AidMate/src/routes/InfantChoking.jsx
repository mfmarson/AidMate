import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";

const InfantChoking = () => {
  const { user } = useAuth();
  const [firstaidId, setFirstaidId] = useState(null);

  useEffect(() => {
    const fetchFirstaidId = async () => {
      let { data } = await supabase
        .from("firstaid")
        .select("id")
        .eq("name", "InfantChoking");

      if (data && data.length > 0) {
        setFirstaidId(data[0].id);
      }
    };

    fetchFirstaidId();
  }, []);

  const addToFavorites = async () => {
    if (!firstaidId) return;

    await supabase.from("favorites").insert({
      profile_id: user.id,
      firstaid_id: firstaidId,
    });
  };

  const removeFromFavorites = async () => {
    if (!firstaidId) return;

    let { error } = await supabase
      .from("favorites")
      .delete()
      .eq("profile_id", user.id)
      .eq("firstaid_id", firstaidId);

    if (error) {
      console.error(error);
    }
  };

  const handleButtonClick = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    } else {
      const stepsList = document.querySelectorAll(".stepsList li");
      let stepsText = "";
      stepsList.forEach((step) => {
        stepsText += `${step.textContent}. `;
      });

      readText(stepsText);
    }
  };

  return (
    <>
      <div className="emergencyButtons">
        <button type="button">CALL 911</button>
        <button
          onClick={handleButtonClick}
          className="hearButton"
          type="button"
        >
          Audio Instructions
        </button>

        <Link to="/MapComponent">
          <button type="button">Directions to Hospital</button>
        </Link>
      </div>
      <h1>Infant Choking</h1>
      <ul className="stepsList">
        <li>
          Position: Lay the infant face down on your forearm, supporting the
          head and neck.
        </li>
        <li>
          Back Blows: Give 5 gentle but firm back blows with the heel of your
          hand between the infant shoulder blades.
        </li>
        <li>
          Chest Thrusts: If the object is not expelled, turn the infant face up,
          place two fingers in the center of the chest, and give 5 quick chest
          thrusts.
        </li>
        <li>
          Repeat: Alternate between 5 back blows and 5 chest thrusts until the
          object is expelled or emergency help arrives.
        </li>
      </ul>

      <div>
        <button
          onClick={addToFavorites}
          className="favoritesButton"
          type="button"
        >
          Add to Favorites
        </button>
      </div>
      <div>
        <button
          onClick={removeFromFavorites}
          className="favoritesButton"
          type="button"
        >
          Remove From Favorites
        </button>
      </div>
    </>
  );
};

export default InfantChoking;
