// import "./Components.css";

// function AlertButton() {
//   const handleClick = () => {
//     const userText = prompt("Write something:");
//     if (userText) {
//       alert(userText); 
//     }
//   };

//   return (
//     <button className="alert-button" onClick={handleClick}>
//       Click me
//     </button>
//   );
// }

// export default AlertButton;

// FactList.jsx


function FactList({ facts }) {
  return (
    <div>
      <h2>Interesting Facts</h2>
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default FactList;

