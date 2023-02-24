import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Wrap">
          <Weather defaultCity="Amsterdam" />
        </div>
        <footer>
          This project was coded by Alessandra Santos and is open-sourced on{" "}
          <a
            href="https://github.com/AlessandraSantos-dev/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
