import "./App.css";
import { useState, useEffect } from "react";

function useInput(initialValue) {
  const [value, setValue] =
    useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/johncban`)
    .then((response) => response.json())
    .then(setData);
  }, []);
  if (data)
    return (<pre>{JSON.stringify(data, null, 2)}</pre>);


  /***
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] =
    useState("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(
      `${titleProps.value}, ${colorProps.value}`
    );
    resetTitle();
    resetColor();
  };
  ***/
  return <h1>Data</h1>;
  
  /** (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
      />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  ); **/
}

export default App;
