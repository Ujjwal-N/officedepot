import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <NavbarComp name={name} setName={setName} />
    </div>
  );
}

export default App;
