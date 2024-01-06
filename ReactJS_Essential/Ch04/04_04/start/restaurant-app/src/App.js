import "./App.css";
import { useState } from "react";

/**
const [firstCity, second] = [
  "Tokyo",
  "Tahoe City",
  "Bend"
];

console.log(firstCity);
console.log(second);
**/

function App() {
  const [emotion, setEmotion] = useState("Happy");
  // console.log(what);
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button onClick={() => setEmotion("excited")}>
        Excited
      </button>
    </div>
  );
}

export default App;

