/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";

const AdultChildChoking = () => {
  const { user } = useAuth();
  const [firstaidId, setFirstaidId] = useState(null);
  const [audioPlaying, setaudioPlaying] = useState(false);

  useEffect(() => {
    const fetchFirstaidId = async () => {
      let { data } = await supabase
        .from("firstaid")
        .select("id")
        .eq("name", "AdultChildChoking");

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
      setaudioPlaying(false);
    } else {
      const stepsList = document.querySelectorAll(".stepsList li");
      let stepsText = "";
      stepsList.forEach((step) => {
        stepsText += `${step.textContent}. `;
      });

      readText(stepsText);
      setaudioPlaying(true);
    }
  };

  const readText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setaudioPlaying(false);
    utterance.oncancel = () => setaudioPlaying(false);
    window.speechSynthesis.speak(utterance);
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
          {audioPlaying ? "Stop" : "Audio Instructions"}
        </button>

        <Link to="/MapComponent">
          <button type="button">Directions to Hospital</button>
        </Link>
        <h1>Adult or Child Choking</h1>
        <ul className="stepsList">
          <li>
            Encourage Coughing: If the person can cough, encourage them to keep
            coughing.
          </li>
          <li>
            Perform Back Blows: If coughing fails, give 5 firm back blows
            between the shoulder blades.
          </li>
          <li>
            Abdominal Thrusts: Stand behind the person, place your fist above
            their navel, and perform 5 quick upward thrusts.
          </li>
          <li>
            Repeat: Alternate between 5 back blows and 5 abdominal thrusts until
            the object is expelled or help arrives.
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

export default AdultChildChoking;
