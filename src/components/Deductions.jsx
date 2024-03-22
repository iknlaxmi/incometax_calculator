import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Income_tax_nav from "./Income_tax_nav";

const Deductions = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [basicDeduction80C, setBasicDeduction80C] = useState(
    localStorage.getItem("basicDeduction80C") || 0
  );
  const [medicalInsurance80D, setMedicalInsurance80D] = useState(
    localStorage.getItem("medicalInsurance80D") || 0
  );
  const [interestEducationalLoan80E, setInterestEducationalLoan80E] = useState(
    localStorage.getItem("interestEducationalLoan80E") || 0
  );
  const [employeeContributionNPS80CCD, setEmployeeContributionNPS80CCD] =
    useState(localStorage.getItem("employeeContributionNPS80CCD") || 0);
  const [interestFromDeposits80TTA, setInterestFromDeposits80TTA] = useState(
    localStorage.getItem("interestFromDeposits80TTA") || 0
  );
  const [donationsToCharity, setDonationsToCharity] = useState(
    localStorage.getItem("donationsToCharity") || 0
  );
  const [interestOnHouseLoan80EEA, setInterestOnHouseLoan80EEA] = useState(
    localStorage.getItem("interestOnHouseLoan80EEA") || 0
  );

  const handleBasicDeduction80C = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setBasicDeduction80C(formattedValue);
    localStorage.setItem("basicDeduction80C", formattedValue);
  };

  const handleMedicalInsurance80D = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setMedicalInsurance80D(formattedValue);
    localStorage.setItem("medicalInsurance80D", formattedValue);
  };
  const handleInterestEducationalLoan80E = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setInterestEducationalLoan80E(formattedValue);
    localStorage.setItem("interestEducationalLoan80E", formattedValue);
  };
  const handleEmployeeContributionNPS80CCD = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setEmployeeContributionNPS80CCD(formattedValue);
    localStorage.setItem("employeeContributionNPS80CCD", formattedValue);
  };
  const handleInterestFromDeposits80TTA = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setInterestFromDeposits80TTA(formattedValue);
    localStorage.setItem("interestFromDeposits80TTA", formattedValue);
  };
  const handleDonationsToCharity = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setDonationsToCharity(formattedValue);
    localStorage.setItem("donationsToCharity", formattedValue);
  };
  const handleInterestOnHouseLoan80EEA = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "");
    // Format the number with commas
    const formattedValue = Number(inputValue).toLocaleString("en-IN");
    setInterestOnHouseLoan80EEA(formattedValue);
    localStorage.setItem("interestOnHouseLoan80EEA", formattedValue);
  };

  const handleCalculate = () => {
    setIsClicked(true);
  };
  React.useEffect(() => {
    let ageVal = localStorage.getItem("age");
    let yearVal = localStorage.getItem("year");
    let incomeFromSalary = localStorage.getItem("incomeFromSalary");
    let incomeFromInterest = localStorage.getItem("incomeFromInterest");
    let rentalIncome = localStorage.getItem("rentalIncome");
    let incomeFromDigitalAssets = localStorage.getItem(
      "incomeFromDigitalAssets"
    );
    let otherIncome = localStorage.getItem("otherIncome");
    let exemptAllowances = localStorage.getItem("exemptAllowances");
    let interestHLoanSelfOccupied = localStorage.getItem(
      "interestHLoanSelfOccupied"
    );
    let interestHLoanLetOut = localStorage.getItem("interestHLoanLetOut");

    console.log(ageVal);
  });
  return (
    <div>
      <div className="mt-16 text-center font-bold">
        <Income_tax_nav />
      </div>
      <div className="mt-16 flex">
        <div className="w-1/2 p-4">
          <div className="ml-8">
            <h6 className="mt-4">Basic Deductions - 80C</h6>
            <input
              type="text"
              className="mt-2 border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={basicDeduction80C}
              onChange={handleBasicDeduction80C}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Medical Insurance - 80D</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={medicalInsurance80D}
              onChange={handleMedicalInsurance80D}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest On Educational Loan - 80E</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={interestEducationalLoan80E}
              onChange={handleInterestEducationalLoan80E}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">
              Employee&apos;s Contribution to NPS - 80CCD
            </h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={employeeContributionNPS80CCD}
              onChange={handleEmployeeContributionNPS80CCD}
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="ml-8">
            <h6 className="mt-4">Interest from Deposits - 80TTA</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={interestFromDeposits80TTA}
              onChange={handleInterestFromDeposits80TTA}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Donations to charity - 80G</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={donationsToCharity}
              onChange={handleDonationsToCharity}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest on Housing Loan - 80EEA</h6>
            <input
              type="text"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10 pl-4"
              value={interestOnHouseLoan80EEA}
              onChange={handleInterestOnHouseLoan80EEA}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button className="bg-blue-500 text-black" onClick={handleCalculate}>
          Calculate
        </Button>
        {isClicked && <Navigate to="/summary" replace={true} />}
      </div>
    </div>
  );
};

export default Deductions;
