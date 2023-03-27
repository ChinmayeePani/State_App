import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="App">
      <h2>React Form</h2>

      <form className="input" onSubmit={handleSubmit}>
        <div className="input_wrap">
          <label className="input_label">Name:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input_wrap">
          <label className="input_label">
            Age:
          </label>
          <input type="text"  value={age} onChange={(e) => setAge(e.target.value)}/>
        </div>
        <div className="input_wrap">
          <label className="input_label" >
            Email:
          </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <button className="btn" type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
