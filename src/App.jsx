import { items } from "./mockData";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button"; 

function App() {
  const [category, setCategory] = useState("all");

  const filteredItems =
  category === "all" ? items:items.filter((item) => item.category=== category);

  return (
    <div className="App">
      <h1>Food Gallery</h1>
      <Button onSelectCategory={setCategory} />

      <div className="gallery">
        {filteredItems.map((item, index) => (
          <div className="card">
            <img src={item.img} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

