import { useState } from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
// import { supabase } from "../supabaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [fullname, setFullName] = useState("");
  const { signUp } = useAuth();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const {  error } = await signUp(email, password);

    if (error) {
      alert(error.message);
    } else {
      alert("You have been registered!");
    }
  };

    //   const { data, insertError } = await supabase
    //     .from("UserInfo")
    //     .insert([{ id: user.id, fullname: fullname, email: email }]);

    //   if (insertError) {
    //     console.error("Error inserting user into table:", error);
    //   } else {
    //     console.log("User inserted into table:", data);
    //   }
    // };

    return (
      <form onSubmit={handleSignUp}>
        {/* <input
          placeholder="Full Name"
          type="text"
          name="name"
          onChange={(event) => setFullName(event.target.value)}
        /> */}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link to="/Login">
          <button type="submit">Register Here</button>
        </Link>
      </form>
    );
  };


export default SignUp;
