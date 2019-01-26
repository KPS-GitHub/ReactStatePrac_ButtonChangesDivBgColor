import React from "react";
import ReactDOM from "react-dom";
import BgEdit from "./BgEdit";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BgEdit />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
