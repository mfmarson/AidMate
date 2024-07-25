/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";
import styles from "src/routes/modules/Aid.module.css";

const InfantChoking = () => {
  const { user } = useAuth();
  const [firstaidId, setFirstaidId] = useState(null);
  const [audioPlaying, setaudioPlaying] = useState(false);

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
      <h1>Infant Choking</h1>
      <div className={styles.aidInstructions}>
        <ul className={styles.stepsList}>
          <li className={styles.stepsLi}>
            <strong>Position:</strong> Lay the infant face down on your forearm,
            supporting the head and neck.
          </li>
          <li className={styles.stepsLi}>
            <strong>Back Blows: </strong>Give 5 gentle but firm back blows with
            the heel of your hand between the infant shoulder blades.
          </li>
          <li className={styles.stepsLi}>
            <strong>Chest Thrusts:</strong> If the object is not expelled, turn
            the infant face up, place two fingers in the center of the chest,
            and give 5 quick chest thrusts.
          </li>
          <li className={styles.stepsLi}>
            <strong>Repeat:</strong> Alternate between 5 back blows and 5 chest
            thrusts until the object is expelled or emergency help arrives.
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

export default InfantChoking;
