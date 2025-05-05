import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setList([...list, value]);
  };
  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className="card d-flex gap-5 col-6 my-4 mx-auto p-4 bg-info rounded-4"
      >
        <label>{value}</label>
        <input
          type="text"
          placeholder="enter name"
          value={value}
          onChange={handleOnChange}
        ></input>
        <button type="submit" className="bg-primary text-white">
          Submit
        </button>
        <ul>
          {list.map((item, i) => {
            return <li>{item}</li>;
          })}
        </ul>
      </form>
    </div>
  );
}

export default App;
