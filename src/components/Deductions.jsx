import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Income_tax_nav from "./Income_tax_nav";

const Deductions = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [basicDeduction80C, setBasicDeduction80C] = useState(0);
  const [medicalInsurance80D, setMedicalInsurance80D] = useState(0);
  const [interestEducationalLoan80E, setInterestEducationalLoan80E] =
    useState(0);
  const [employeeContributionNPS80CCD, setEmployeeContributionNPS80CCD] =
    useState(0);
  const [interestFromDeposits80TTA, setInterestFromDeposits80TTA] = useState(0);
  const [donationsToCharity, setDonationsToCharity] = useState(0);
  const [interestOnHouseLoan80EEA, setInterestOnHouseLoan80EEA] = useState(0);

  const handleBasicDeduction80C = (e) => {
    setBasicDeduction80C(e.target.value);
  };

  const handleMedicalInsurance80D = (e) => {
    setMedicalInsurance80D(e.target.value);
  };
  const handleInterestEducationalLoan80E = (e) => {
    setInterestEducationalLoan80E(e.target.value);
  };
  const handleEmployeeContributionNPS80CCD = (e) => {
    setEmployeeContributionNPS80CCD(e.target.value);
  };
  const handleInterestFromDeposits80TTA = (e) => {
    setInterestFromDeposits80TTA(e.target.value);
  };
  const handleDonationsToCharity = (e) => {
    setDonationsToCharity(e.target.value);
  };
  const handleInterestOnHouseLoan80EEA = (e) => {
    setInterestOnHouseLoan80EEA(e.target.value);
  };

  const handleCalculate = () => {
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
            <h6 className="mt-4">Basic Deductions - 80C</h6>
            <input
              type="number"
              className="mt-2 border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={basicDeduction80C}
              onChange={handleBasicDeduction80C}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Medical Insurance - 80D</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={medicalInsurance80D}
              onChange={handleMedicalInsurance80D}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest On Educational Loan - 80E</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={interestEducationalLoan80E}
              onChange={handleInterestEducationalLoan80E}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">
              Employee&apos;s Contribution to NPS - 80CCD
            </h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={employeeContributionNPS80CCD}
              onChange={handleEmployeeContributionNPS80CCD}
            />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="ml-8">
            <h6 className="mt-4">Interest from Deposits - 80TTA</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={interestFromDeposits80TTA}
              onChange={handleInterestFromDeposits80TTA}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Donations to charity - 80G</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
              value={donationsToCharity}
              onChange={handleDonationsToCharity}
            />
          </div>
          <div className="ml-8">
            <h6 className="mt-4">Interest on Housing Loan - 80EEA</h6>
            <input
              type="number"
              className="mt-2  border-blue-500 border-solid border-2 rounded-lg w-80 h-10"
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
