/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";
import styles from "src/routes/modules/Aid.module.css";

const CPR = () => {
  const { user } = useAuth();
  const [firstaidId, setFirstaidId] = useState(null);
  const [audioPlaying, setaudioPlaying] = useState(false);

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

      <h1>CPR</h1>
      <div className={styles.aidInstructions}>
        <ul className={styles.stepsList}>
          <li className={styles.stepsLi}>
            <strong>Check Response:</strong> Tap and shout to check if the
            person is responsive.
          </li>
          <li className={styles.stepsLi}>
            <strong>Call for Help: </strong>Dial emergency services immediately.
          </li>
          <li className={styles.stepsLi}>
            <strong>Begin Chest Compressions:</strong> Place hands in the center
            of the chest and push hard and fast (100-120 compressions per
            minute).
          </li>
          <li className={styles.stepsLi}>
            <strong>Rescue Breaths (if trained):</strong> After 30 compressions,
            give 2 breaths, tilting the head back and lifting the chin.
          </li>
          <li className={styles.stepsLi}>
            Continue until this cycle Emergency Service arrives
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

export default CPR;
