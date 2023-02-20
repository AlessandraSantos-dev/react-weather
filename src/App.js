import React from "react";
import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/AlessandraSantos-dev/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Alessandra Santos
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
