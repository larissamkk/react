import './Button.css'
function Button({ onSelectCategory }) {
  return (
    <div className="buttons">
      <button onClick={() => onSelectCategory("all")}>All</button>
      <button onClick={() => onSelectCategory("fruit")}>Fruits</button>
      <button onClick={() => onSelectCategory("vegetable")}>Vegetables</button>
      <button onClick={() => onSelectCategory("sweets")}>Sweets</button>
    </div>
  );
}

export default Button;
