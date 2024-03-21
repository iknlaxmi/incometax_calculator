// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Basic_details from "./components/Basic_details";
import Income_tax_nav from "./components/Income_tax_nav";
import Income_details from "./components/Income_details";
import Deductions from "./components/Deductions";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Basic_details />} />
          <Route path="/income_details" element={<Income_details />} />
          <Route path="/deductions" element={<Deductions />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
