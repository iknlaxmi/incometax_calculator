// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Basic_details from "./components/Basic_details";
import Income_tax_nav from "./components/Income_tax_nav";
import Income_details from "./components/Income_details";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Basic_details />} />
          <Route path="/incometax_details" element={<Income_details />} />
          <Route path="/deductions" element={<Deductions />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
      <div className="mt-16 text-center font-bold">
        <h1>Income Tax Calculator - FY 2024 - 2025</h1>
        <Income_tax_nav />
      </div>
      <div>
        <Basic_details />
      </div>
    </>
  );
}

export default App;
