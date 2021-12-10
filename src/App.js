import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./data";
import PreLoadScreen from "./Components/PreLoadScreen";

function App() {
  return (
    <div className="App">
      <PreLoadScreen />
      <Data />
    </div>
  );
}

export default App;
