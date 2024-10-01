import React, { useState } from "react";
import app from "../firebaseConfig";
import { getDatabase, ref, set, get, push } from "firebase/database";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Write() {
  let [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const saveData = async () => {
    const db = getDatabase(app);
    const userRef = ref(db, "users/" + userName);

    try {
      // Check if the user already exists
      const snapshot = await get(userRef);

      if (snapshot.exists()) {
        // User already exists, do nothing or show a message if desired
        console.log("User already exists. Score remains unchanged.");
      } else {
        // User does not exist, create them with a score of 0
        await set(userRef, {
          userName: userName,
          userScore: 0,
        });
        console.log("New user created with score 0.");
      }

      navigate("/game", { state: { name: userName } });
    } catch (error) {
      alert("Error: ", error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <button className="answerButton" onClick={saveData}>
        Log In
      </button>
    </div>
  );
}

export default Write;
