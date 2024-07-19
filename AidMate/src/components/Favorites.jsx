import { supabase } from "./supabaseClient";

const AidInstruction = ({ user.id }) => {
  const addFavorite = async () => {
    const user = supabase.auth.user();
    if (user) {
      const { data, error } = await supabase
        .from("favorites")
        .insert([{ user_id: user.id, instruction_id: instruction.id }]);

      if (error) {
        console.error("Error adding favorite:", error);
      } else {
        console.log("Favorite added:", data);
      }
    }
  };

  return (
    <div className="favorites_ui">
      <h2>{instruction.name}</h2>
      <p>{instruction.steps}</p>
      <button onClick={addFavorite}>Favorite</button>
    </div>
  );
};

export default AidInstruction;
