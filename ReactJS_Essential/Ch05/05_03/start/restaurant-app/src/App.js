import "./App.css";
import { useState } from "react";

// https://react.dev/learn/reusing-logic-with-custom-hooks#

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value, 
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}


function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps} // ... means to spread all properties into this input.
        type="text"
        placeholder="color title..."
      />
      <input {...colorProps} type="color"/>
      <button>ADD</button>
    </form>
  );
}

export default App;
