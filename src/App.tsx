import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Simple from "./component/simple";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>{1 + 1}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Simple></Simple>
      </header>
    </div>
  );
};

export default App;
