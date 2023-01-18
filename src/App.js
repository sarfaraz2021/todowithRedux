import "./styles.css";
import React from "react";

import Todo from "./Todo";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row pt-5">
          <div className="col-2">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  );
}
