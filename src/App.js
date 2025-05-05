import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { NameList } from "./NameList";

function App() {
  //   const [value, setValue] = useState("");
  //   const [list, setList] = useState([]);

  //   const handleOnChange = (e) => {
  //     setValue(e.target.value);
  //   };
  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     setList([...list, value]);};
  return (
    <div>
      <Form />
      <NameList />
    </div>
  );
}

export default App;
