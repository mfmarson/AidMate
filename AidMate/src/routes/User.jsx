import { useEffect, useState } from "react";
import { supabase } from "../supabaseConfig";

const User = () => {
  const [instructions, setInstructions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Instructions")
        .select("Name, StepArray");

      if (error) {
        console.error(error);
      } else {
        setInstructions(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {instructions.map((instruction, index) => (
        <div key={index}>
          <h2>{instruction.Name}</h2>
          <ul>
            {instruction.StepArray.map((step, stepIndex) => (
              <li key={stepIndex}>{step}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default User;
