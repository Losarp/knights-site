import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Approuter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}