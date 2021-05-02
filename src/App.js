import "./css/main.css";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  let [note, setNote] = useState("");
  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const handleClick = (e) => {
    setNotes((notes) => [...notes, note]);
    setNote("");
  };
  const handleDelete = (e) => {
    const filteredNotes = notes.filter(
      (note, i) => i != e.target.parentNode.value
    );
    setNotes(filteredNotes);
  };
  return (
    <div className="container">
      <h1>Pixel Note</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Create Note"
        value={note}
      />
      <button onClick={handleClick} className="submit">
        Submit
      </button>
      <ul className="notes">
        {notes.map((note, i) => {
          return (
            <li key={i} value={i}>
              <span>{note}</span>{" "}
              <button className="delete" onClick={handleDelete}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
