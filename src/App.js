import "./App.css";


function App() {
  return (
    <div>
      <form className="card d-flex gap-5 col-8 my-4 mx-auto p-4 bg-info rounded-4">
        <label>input value</label>
        <input type="text" placeholder="enter name"></input>
        <button onChange={handleOnChange} className="bg-primary text-white">Submit</button>
      </form>
    </div>
  );
}

export default App;
