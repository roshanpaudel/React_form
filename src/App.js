import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [controlledValue, setControlledValue] = useState("");
  const uncontrolledInputRef = useRef("");

  const handleOnChange = (e) => {
    setControlledValue(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(
      `Controlled input: ${controlledValue}\nUncontrolled input: ${uncontrolledInputRef.current.value}`
    );
  };
  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className="card d-flex gap-5 col-6 my-4 mx-auto p-4 bg-info rounded-4"
      >
        <label>{controlledValue}</label>
        <input
          type="text"
          placeholder="enter name"
          ref={uncontrolledInputRef}
          value={controlledValue}
          onChange={handleOnChange}
        ></input>
        <button type="submit" className="bg-primary text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
