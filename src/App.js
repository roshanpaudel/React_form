import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { NameList } from "./NameList";

function App() {
  //   const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  //   const handleOnChange = (e) => {
  //     setValue(e.target.value);
  //   };
  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //
  const addUser = (name) => {
    setList([...list, name]);
  };
  console.log(list);
  return (
    <div>
      <Form addUser={addUser}>
        <NameList list={list} />
      </Form>
    </div>
  );
}
export default App;
