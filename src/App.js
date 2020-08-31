import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>How should we us branches </li>
          <li>
            Master: Contains the current working version (bug free & tested){" "}
          </li>
          <li>
            Development branch: Where we combine our work (can be broken
            sometimes){" "}
          </li>
          <li>Feature branch: contains isolated new features</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
