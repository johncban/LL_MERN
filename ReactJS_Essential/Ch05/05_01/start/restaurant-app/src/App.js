import "./App.css";
import { useRef } from "react";

// https://react.dev/reference/react/useRef

function App() {

  // const [checked, setChecked] = useReducer(
  //   (checked) => !checked,
  //   false
  // );


  const txtTitle = useRef();
  const hexColor = useRef();
  
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value="";
    hexColor.current.value="";
  };
  
  return (
    /*
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
    */
   <form onSubmit={submit}>
      <input 
        type="text" 
        ref={txtTitle} 
        placeholder="color title..."
      />
      <input ref={hexColor} type="color" />
      <button>ADD</button>
   </form>
  );
}

export default App;
