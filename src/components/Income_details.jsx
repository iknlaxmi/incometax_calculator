import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Income_tax_nav from "./Income_tax_nav";

const Income_details = () => {
  const [incomeFromSalary, setIncomeFromSalary] = useState(0);
  const [incomeFromInterest, setIncomeFromInterest] = useState(0);
  const [rentalIncome, setRentalIncome] = useState(0);
  const [incomeFromDigitalAssets, setIncomeFRomDigitalAssets] = useState(0);
  const [otherIncome, setOtherIncome] = useState(0);
  const [exemptAllowances, setExemptAllowances] = useState(0);
  const [interestHLoanSelfOccupied, setInterestHLoanSelfOccupied] = useState(0);
  const [interestHLoanLetOut, setInterestHLoanLetOut] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleIncomeFromSalary = (e) => {
    setIncomeFromSalary(e.target.value);
    // console.log(incomeFromSalary);
  };
  const handleIncomeFromInterest = (e) => {
    setIncomeFromInterest(e.target.value);
  };

  const handleRentalIncome = (e) => {
    setRentalIncome(e.target.value);
  };

  const handleIncomeFromDigitalAssets = (e) => {
    setIncomeFRomDigitalAssets(e.target.value);
  };

  const handleOtherIncome = (e) => {
    setOtherIncome(e.target.value);
  };

  const handleExemptAllowances = (e) => {
    setExemptAllowances(e.target.value);
  };

  const handleInterestHLoanSelfOccupied = (e) => {
    setInterestHLoanSelfOccupied(e.target.value);
  };
  const handleInterestHLoanLetOut = (e) => {
    setInterestHLoanLetOut(e.target.value);
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
              type="number"
              className="mt-2 border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={incomeFromSalary}
              onChange={handleIncomeFromSalary}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Income from Interest</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={incomeFromInterest}
              onChange={handleIncomeFromInterest}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Rental Income Received</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={rentalIncome}
              onChange={handleRentalIncome}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Income from Digital Assets</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={incomeFromDigitalAssets}
              onChange={handleIncomeFromDigitalAssets}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Other Income</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={otherIncome}
              onChange={handleOtherIncome}
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="ml-8">
            <h6 className="mt-4">Exempt Allowances</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={exemptAllowances}
              onChange={handleExemptAllowances}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest on Home Loan - Self occupied</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={interestHLoanSelfOccupied}
              onChange={handleInterestHLoanSelfOccupied}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest On Home Loan - Let Out</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
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
