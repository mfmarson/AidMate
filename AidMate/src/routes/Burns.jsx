/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { readText } from "../components/screenReader";
import { useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import supabase from "../supabaseConfig";
import styles from "./modules/Aid.module.css";

const Burns = () => {
  const { user } = useAuth();

  const [firstaidId, setFirstaidId] = useState(null);
  const [audioPlaying, setaudioPlaying] = useState(false);

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

      <h1>Burns</h1>
      <div className={styles.aidInstructions}>
        <ul className={styles.stepsList}>
          <li className={styles.stepsLi}>
            <strong>Cool the Burn:</strong> Run cool (not cold) water over the
            burn for at least 10 minutes.
          </li>
          <li className={styles.stepsLi}>
            <strong>Cover the Burn:</strong> Use a sterile, non-adhesive bandage
            or clean cloth.
          </li>
          <li className={styles.stepsLi}>
            <strong>Do Not Apply:</strong> Do not apply creams, ointments, or
            ice to the burn.
          </li>
          <li className={styles.stepsLi}>
            <strong>Seek Help:</strong> Call emergency services if the burn is
            severe or covers a large area.
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

export default Burns;
