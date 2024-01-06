import "./App.css";
// import { useState } from "react";
import { useReducer } from "react";

function App() {

  /**
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] =
    useState("tired");
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);
  **/

  // const [checked, setChecked] = useState(false);

  const [checked, setChecked] = useReducer(checked => !checked, false)

  return (
    <div className="App">
      <input 
        type="checkbox" 
        value={checked} 
        onChange={setChecked}

      />
      <label>
        {checked ? "checked" : "non checked"}
      </label>
    </div>
  );
}

export default App;
