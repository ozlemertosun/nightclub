import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
