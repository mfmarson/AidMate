import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";

const CPR = () => {
  const { user } = useAuth();
  const [firstaidId, setFirstaidId] = useState(null);

  useEffect(() => {
    const fetchFirstaidId = async () => {
      let { data } = await supabase
        .from("firstaid")
        .select("id")
        .eq("name", "CPR");

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
      <h1>CPR</h1>
      <div>
        <ul className="stepsList">
          <li>
            Check Response: Tap and shout to check if the person is responsive.
          </li>
          <li>Call for Help: Dial emergency services immediately.</li>
          <li>
            Begin Chest Compressions: Place hands in the center of the chest and
            push hard and fast (100-120 compressions per minute).
          </li>
          <li>
            Rescue Breaths (if trained): After 30 compressions, give 2 breaths,
            tilting the head back and lifting the chin.
          </li>
          <li>Continue until this cycle Emergency Service arrives</li>
        </ul>
      </div>

      <div>
        <button
          className="favoritesButton"
          type="button"
          onClick={addToFavorites}
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

export default CPR;
