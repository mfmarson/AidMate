import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";

const Burns = () => {
  const { user } = useAuth();

  const [firstaidId, setFirstaidId] = useState(null);

  useEffect(() => {
    const fetchFirstaidId = async () => {
      let { data } = await supabase
        .from("firstaid")
        .select("id")
        .eq("name", "Burns");

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

      <h1>Burns</h1>
      <div>
        <ul className="stepsList">
          <li>
            Cool the Burn: Run cool (not cold) water over the burn for at least
            10 minutes.
          </li>
          <li>
            Cover the Burn: Use a sterile, non-adhesive bandage or clean cloth.
          </li>
          <li>
            Do Not Apply: Do not apply creams, ointments, or ice to the burn.
          </li>
          <li>
            Seek Help: Call emergency services if the burn is severe or covers a
            large area.
          </li>
        </ul>
      </div>
      <div>
        <button
          onClick={addToFavorites}
          className="favoritesButton"
          type="button"
        >
          Add to Favorites
        </button>
        <div>
          <button
            onClick={removeFromFavorites}
            className="favoritesButton"
            type="button"
          >
            Remove From Favorites
          </button>
        </div>
      </div>
    </>
  );
};

export default Burns;
