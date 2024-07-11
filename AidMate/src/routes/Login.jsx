import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";

const supabaseUrl = "https://moewehevctajwcrlydif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZXdlaGV2Y3Rhandjcmx5ZGlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1NDYzMDUsImV4cCI6MjAzNjEyMjMwNX0.11AZ5vC3yiIAeegaJ3aSjMPyoOECSYe1_sB0INsPD6U";
const supabase = createClient(supabaseUrl, supabaseKey);

const MyForm = () => {
  const [inputs, setInputs] = useState({});
  // const [error, setError] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: inputs.username,
        password: inputs.password,
      });
      if (error) {
        throw error;
      }
      alert("You are logged in!");
    } catch (error) {
      console.error("Error logging in.", error.message);
      // setErrors("Error logging in." + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          placeholder="Username"
          type="text"
          name="username"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
      </label>
      <Link to="/User">Login</Link>

      <Link to="/Register">Register Here</Link>
    </form>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

export default MyForm;
