import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Income_tax_nav from "./Income_tax_nav";

const Income_details = () => {
  const [incomeFromSalary, setIncomeFromSalary] = useState(
    localStorage.getItem("incomeFromSalary") || 0
  );
  const [incomeFromInterest, setIncomeFromInterest] = useState(
    localStorage.getItem("incomeFromInterest") || 0
  );
  const [rentalIncome, setRentalIncome] = useState(
    localStorage.getItem("rentalIncome") || 0
  );
  const [incomeFromDigitalAssets, setIncomeFRomDigitalAssets] = useState(
    localStorage.getItem("incomeFromDigitalAssets") || 0
  );
  const [otherIncome, setOtherIncome] = useState(
    localStorage.getItem("otherIncome") || 0
  );
  const [exemptAllowances, setExemptAllowances] = useState(
    localStorage.getItem("exemptAllowances") || 0
  );
  const [interestHLoanSelfOccupied, setInterestHLoanSelfOccupied] = useState(
    localStorage.getItem("interestHLoanSelfOccupied") || 0
  );
  const [interestHLoanLetOut, setInterestHLoanLetOut] = useState(
    localStorage.getItem("interestHLoanLetOut") || 0
  );
  const [isClicked, setIsClicked] = useState(false);

  const handleIncomeFromSalary = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    console.log("formatincome", formattedValue);
    setIncomeFromSalary(formattedValue);
    localStorage.setItem("incomeFromSalary", formattedValue);
  };
  const handleIncomeFromInterest = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setIncomeFromInterest(formattedValue);
    localStorage.setItem("incomeFromInterest", formattedValue);
  };

  const handleRentalIncome = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setRentalIncome(formattedValue);
    localStorage.setItem("rentalIncome", formattedValue);
  };

  const handleIncomeFromDigitalAssets = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");

    setIncomeFRomDigitalAssets(formattedValue);
    localStorage.setItem("incomeFromDigitalAssets", formattedValue);
  };

  const handleOtherIncome = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setOtherIncome(formattedValue);
    localStorage.setItem("otherIncome", formattedValue);
  };

  const handleExemptAllowances = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setExemptAllowances(formattedValue);
    localStorage.setItem("exemptAllowances", formattedValue);
  };

  const handleInterestHLoanSelfOccupied = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setInterestHLoanSelfOccupied(formattedValue);
    localStorage.setItem("interestHLoanSelfOccupied", formattedValue);
  };
  const handleInterestHLoanLetOut = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setInterestHLoanLetOut(formattedValue);
    localStorage.setItem("interestHLoanLetOut", formattedValue);
  };

  const handleNextStepBtn = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <div className="mt-16 text-center font-bold">
        <Income_tax_nav />
      </div>
      <div className="mt-16 flex">
        <div className="w-1/2 p-4">
          <div className="ml-8">
            <h6 className="mt-4">Income from Salary</h6>
            <input
              type="text"
              className="mt-2 border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={incomeFromSalary}
              onChange={handleIncomeFromSalary}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Income from Interest</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={incomeFromInterest}
              onChange={handleIncomeFromInterest}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Rental Income Received</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={rentalIncome}
              onChange={handleRentalIncome}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Income from Digital Assets</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={incomeFromDigitalAssets}
              onChange={handleIncomeFromDigitalAssets}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Other Income</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={otherIncome}
              onChange={handleOtherIncome}
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="ml-8">
            <h6 className="mt-4">Exempt Allowances</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={exemptAllowances}
              onChange={handleExemptAllowances}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest on Home Loan - Self occupied</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={interestHLoanSelfOccupied}
              onChange={handleInterestHLoanSelfOccupied}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest On Home Loan - Let Out</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={interestHLoanLetOut}
              onChange={handleInterestHLoanLetOut}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button className="bg-blue-500 text-black" onClick={handleNextStepBtn}>
          Go to Next Step
        </Button>
        {isClicked && <Navigate to="/deductions" replace={true} />}
      </div>
    </div>
  );
};

export default Income_details;
