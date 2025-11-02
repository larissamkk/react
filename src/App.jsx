// import "./App.css";
// import AlertButton from "./Components/Components";

// function App() {
//   return (
//     <div className="App">
//       <h1>Prompt Alert Button</h1>
//       <AlertButton />
//     </div>
//   );
// }

// export default App;

import FactList from "./Components/Components";

function App() {
  const myFacts = [
    "mayr hayastan",
    "ashxarhy curt e u xabusik e",
    "bananas are yellow"
  ];

  return (
    <div>
      <h1>Facts Component Example</h1>
      <FactList facts={myFacts} />
    </div>
  );
}

export default App;


