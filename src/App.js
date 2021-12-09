import React from "react";
import "./src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Components/data";
import PreLoadScreen from "../Components/PreLoadScreen";

function App() {
  return (
    <div className="App">
      <PreLoadScreen />
      <Data />
    </div>
  );
}

export default App;
