import React from "react";
import Home from "./screens/Home";
import "./bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
