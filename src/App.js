import React from "react";
import "./App.css";
import { Drumbox } from "./components";

const App = () => {
  return (
    <div className="App" id="drum-machine">
      <Drumbox />
      <a href="https://github.com/rvif" target="_blank" className="footer">
        created by rvif
      </a>
    </div>
  );
};

export default App;
