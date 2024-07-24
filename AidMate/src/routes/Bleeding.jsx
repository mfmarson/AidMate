/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import supabase from "../supabaseConfig";
import { useAuth } from "./AuthContext";
import styles from "/Users/meganmarson/Repos/AidMate/AidMate/src/routes/modules/Aid.module.css";

const Bleeding = () => {
  const { user } = useAuth();
  const [firstaidId, setFirstaidId] = useState(null);
  const [audioPlaying, setaudioPlaying] = useState(false);

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
      setaudioPlaying(false);
    } else {
      const stepsList = document.querySelectorAll(`.${styles.stepsList} li`);
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

  const handleCall = () => {
   
    window.location.href = "tel:404-520-6112";
  };

  return (
    <>
      <div className={styles.aidInstructions}>
        <button className={styles.call911} onClick={handleCall} type="button">
          CALL 911
        </button>
        <button
          className={styles.button}
          onClick={handleButtonClick}
          type="button"
        >
          {audioPlaying ? "Stop" : "Audio Instructions"}
        </button>

        <Link to="/MapComponent">
          <button className={styles.button} type="button">
            Directions to Hospital
          </button>
        </Link>
      </div>
      <h1>Bleeding</h1>
      <div className={styles.aidInstructions}>
        <ul className={styles.stepsList}>
          <li className={styles.stepsLi}>
            <strong>Apply Pressure:</strong> Use a clean cloth or bandage to
            apply firm pressure to the wound.
          </li>
          <li className={styles.stepsLi}>
            <strong>Elevate: </strong>If possible, raise the injured area above
            heart level.
          </li>
          <li className={styles.stepsLi}>
            <strong>Maintain Pressure: </strong>Keep applying pressure until the
            bleeding stops or help arrives.
          </li>
          <li className={styles.stepsLi}>
            <strong>Do Not Remove:</strong> Do not remove any embedded objects;
            instead, apply pressure around them.
          </li>
        </ul>
      </div>
      <div className={styles.aidInstructions}>
        <button
          onClick={addToFavorites}
          className={styles.button}
          type="button"
        >
          Add to Favorites
        </button>

        <button
          onClick={removeFromFavorites}
          className={styles.button}
          type="button"
        >
          Remove From Favorites
        </button>
      </div>
    </>
  );
};

export default Bleeding;
