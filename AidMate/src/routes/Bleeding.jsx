import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import supabase from "../supabaseConfig";
import { useAuth } from "./AuthContext";

const Bleeding = () => {
  const { user } = useAuth();
  const [firstaidId, setFirstaidId] = useState(null);

  useEffect(() => {
    const fetchFirstaidId = async () => {
      let { data } = await supabase
        .from("firstaid")
        .select("id")
        .eq("name", "Bleeding");

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
          Hear Instructions
        </button>

        <Link to="/MapComponent">
          <button type="button">Directions to Hospital</button>
        </Link>
      </div>
      <h1>Bleeding</h1>
      <div>
        <ul className="stepsList">
          <li>
            Apply Pressure: Use a clean cloth or bandage to apply firm pressure
            to the wound.
          </li>
          <li>
            Elevate: If possible, raise the injured area above heart level.
          </li>
          <li>
            Maintain Pressure: Keep applying pressure until the bleeding stops
            or help arrives.
          </li>
          <li>
            Do Not Remove: Do not remove any embedded objects; instead, apply
            pressure around them.
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

export default Bleeding;
