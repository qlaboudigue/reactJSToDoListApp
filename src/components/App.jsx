import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function handleItem(event) {
    const item = event.target.value;
    setItem(item);
  }

  function addItem() {
    const newItems = [item, ...items];
    setItems(newItems);
    console.log(newItems);
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="item" onChange={handleItem} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
