import React from "react";
import { Display } from "./Display";
import { useState } from "react";

export const Form = () => {
  const [name, setValue] = useState("");
  // const [list, setList] = useState([]);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // setList([...list, value]);
  };

  return (
    <div className="form">
      <Display name={name} />
      <form
        onSubmit={handleOnSubmit}
        className="card d-flex gap-5 col-6 my-4 mx-auto p-4 bg-info rounded-4"
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleOnChange}
        ></input>
        <button type="submit" className="bg-primary text-white">
          Add User
        </button>
      </form>
    </div>
  );
};
