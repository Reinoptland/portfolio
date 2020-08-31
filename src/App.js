import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={
            "https://camo.githubusercontent.com/c0cd7991caeb2b8b037fd2088dabc216b4d50f3f/68747470733a2f2f66656174757265666c6167732e696f2f77702d636f6e74656e742f75706c6f6164732f323031382f30332f666561747572656272616e6368696e67776974686f75742e6a7067"
          }
          className="App-logo"
          alt="logo"
        />
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
