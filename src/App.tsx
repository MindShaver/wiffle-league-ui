import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WiffleImage from "./images/wiffleLeague.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={WiffleImage} className="App-logo" alt="logo" />
        <p>Check back for more things - like being able to log in!</p>
      </header>
    </div>
  );
}

export default App;
