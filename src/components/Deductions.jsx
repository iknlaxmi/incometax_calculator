import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Income_tax_nav from "./Income_tax_nav";
import { Tax_calculate_newregime } from "./Tax_calculate_newregime";
import { Tax_calculate_oldregime } from "./Tax_calculate_oldregime";
import { useRecoilState, atom } from "recoil";
let data_tableList = [];

let standard_deduction = 50000;
// let TABLE_ROWS = [
//   {
//     item: "Total Income",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
//   {
//     item: "Excempt Allowences(E&D)",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
//   {
//     item: "Standard Deductions(E&D)",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
//   {
//     item: "Chapter IV A Deductions(E&D)",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
//   {
//     item: "Taxable Income",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
//   {
//     item: "Income Tax",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
//   {
//     item: "Cess",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
//   {
//     item: "Total Income Tax Payable",
//     old_regime_val: 123,
//     new_regime_val: 123,
//   },
// ];
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const incometax_tableState = atom({
  key: "incometax",
  default: [
    {
      item: "Total Income",
      old_regime_val: 0,
      new_regime_val: 0,
    },
    {
      item: "Excempt Allowences(E&D)",
      old_regime_val: 0,
      new_regime_val: 0,
    },
    {
      item: "Standard Deductions(E&D)",
      old_regime_val: 0,
      new_regime_val: 0,
    },
    {
      item: "Chapter IV A Deductions(E&D)",
      old_regime_val: 0,
      new_regime_val: 0,
    },
    {
      item: "Taxable Income",
      old_regime_val: 0,
      new_regime_val: 0,
    },
    {
      item: "Income Tax",
      old_regime_val: 0,
      new_regime_val: 0,
    },
    {
      item: "Cess",
      old_regime_val: 0,
      new_regime_val: 0,
    },
    {
      item: "Total Income Tax Payable",
      old_regime_val: 0,
      new_regime_val: 0,
    },
  ],
  effects_UNSTABLE: [persistAtom],
});
const Deductions = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [incometaxTableList, setincometaxTableList] =
    useRecoilState(incometax_tableState);
  console.log("imppppp", incometaxTableList);
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

    //basicDeduction80CFormatted

    let basicDeduction80CFormatted = localStorage.getItem("basicDeduction80C");

    if (basicDeduction80CFormatted === null) {
      basicDeduction80CFormatted = 0;
    } else {
      basicDeduction80CFormatted = parseFloat(
        localStorage.getItem("basicDeduction80C").replace(/,/g, "")
      );
    }
    //medicalInsurance80DFormatted
    let medicalInsurance80DFormatted = localStorage.getItem(
      "medicalInsurance80D"
    );

    if (medicalInsurance80DFormatted === null) {
      medicalInsurance80DFormatted = 0;
    } else {
      medicalInsurance80DFormatted = parseFloat(
        localStorage.getItem("medicalInsurance80D").replace(/,/g, "")
      );
    }
    //interestEducationalLoan80EFormatted
    let interestEducationalLoan80EFormatted = localStorage.getItem(
      "interestEducationalLoan80E"
    );

    if (interestEducationalLoan80EFormatted === null) {
      interestEducationalLoan80EFormatted = 0;
    } else {
      interestEducationalLoan80EFormatted = parseFloat(
        localStorage.getItem("interestEducationalLoan80E").replace(/,/g, "")
      );
    }
    //employeeContributionNPS80CCDFormatted
    let employeeContributionNPS80CCDFormatted = localStorage.getItem(
      "employeeContributionNPS80CCD"
    );

    if (employeeContributionNPS80CCDFormatted === null) {
      employeeContributionNPS80CCDFormatted = 0;
    } else {
      employeeContributionNPS80CCDFormatted = parseFloat(
        localStorage.getItem("employeeContributionNPS80CCD").replace(/,/g, "")
      );
    }
    //interestFromDeposits80TTAFormatted
    let interestFromDeposits80TTAFormatted = localStorage.getItem(
      "interestFromDeposits80TTA"
    );

    if (interestFromDeposits80TTAFormatted === null) {
      interestFromDeposits80TTAFormatted = 0;
    } else {
      interestFromDeposits80TTAFormatted = parseFloat(
        localStorage.getItem("interestFromDeposits80TTA").replace(/,/g, "")
      );
    }
    //donationsToCharityFormatted
    let donationsToCharityFormatted =
      localStorage.getItem("donationsToCharity");

    if (donationsToCharityFormatted === null) {
      donationsToCharityFormatted = 0;
    } else {
      donationsToCharityFormatted = parseFloat(
        localStorage.getItem("donationsToCharity").replace(/,/g, "")
      );
    }
    //interestOnHouseLoan80EEAFormatted
    let interestOnHouseLoan80EEAFormatted = localStorage.getItem(
      "interestOnHouseLoan80EEA"
    );

    if (interestOnHouseLoan80EEAFormatted === null) {
      interestOnHouseLoan80EEAFormatted = 0;
    } else {
      interestOnHouseLoan80EEAFormatted = parseFloat(
        localStorage.getItem("interestOnHouseLoan80EEA").replace(/,/g, "")
      );
    }

    //income from salary
    let incomeFromSalary = localStorage.getItem("incomeFromSalary");
    console.log("actual", incomeFromSalary);
    if (incomeFromSalary === null) {
      incomeFromSalary = 0;
    } else {
      incomeFromSalary = parseFloat(
        localStorage.getItem("incomeFromSalary").replace(/,/g, "")
      );
    }
    //incomeFromInterest
    let incomeFromInterest = localStorage.getItem("incomeFromInterest");

    if (incomeFromInterest === null) {
      incomeFromInterest = 0;
    } else {
      incomeFromInterest = parseFloat(
        localStorage.getItem("incomeFromInterest").replace(/,/g, "")
      );
    }
    //rentalIncome
    let rentalIncome = localStorage.getItem("rentalIncome");

    if (rentalIncome === null) {
      rentalIncome = 0;
    } else {
      rentalIncome = parseFloat(
        localStorage.getItem("rentalIncome").replace(/,/g, "")
      );
    }
    //incomeFromDigitalAssets
    let incomeFromDigitalAssets = localStorage.getItem(
      "incomeFromDigitalAssets"
    );

    if (incomeFromDigitalAssets === null) {
      incomeFromDigitalAssets = 0;
    } else {
      incomeFromDigitalAssets = parseFloat(
        localStorage.getItem("incomeFromDigitalAssets").replace(/,/g, "")
      );
    }
    //otherIncome
    let otherIncome = localStorage.getItem("otherIncome");

    if (otherIncome === null) {
      otherIncome = 0;
    } else {
      otherIncome = parseFloat(
        localStorage.getItem("otherIncome").replace(/,/g, "")
      );
    }
    //exemptAllowances
    let exemptAllowances = localStorage.getItem("exemptAllowances");

    if (exemptAllowances === null) {
      exemptAllowances = 0;
    } else {
      exemptAllowances = parseFloat(
        localStorage.getItem("exemptAllowances").replace(/,/g, "")
      );
    }
    //interestHLoanSelfOccupied
    let interestHLoanSelfOccupied = localStorage.getItem(
      "interestHLoanSelfOccupied"
    );

    if (interestHLoanSelfOccupied === null) {
      interestHLoanSelfOccupied = 0;
    } else {
      interestHLoanSelfOccupied = parseFloat(
        localStorage.getItem("interestHLoanSelfOccupied").replace(/,/g, "")
      );
    }
    //interestHLoanLetOut
    let interestHLoanLetOut = localStorage.getItem("interestHLoanLetOut");

    if (interestHLoanLetOut === null) {
      interestHLoanLetOut = 0;
    } else {
      interestHLoanLetOut = parseFloat(
        localStorage.getItem("interestHLoanLetOut").replace(/,/g, "")
      );
    }

    //Tax calculations for new regime
    let modified_component_basedon_rentIncome_interestHomeloanLetOut = 0;

    if (interestHLoanLetOut === 0) {
      modified_component_basedon_rentIncome_interestHomeloanLetOut =
        0.3 * rentalIncome;
    } else if (rentalIncome < interestHLoanLetOut) {
      modified_component_basedon_rentIncome_interestHomeloanLetOut =
        rentalIncome;
    } else {
      modified_component_basedon_rentIncome_interestHomeloanLetOut =
        rentalIncome;
    }
    let total_income_newregime =
      incomeFromSalary +
      incomeFromInterest +
      rentalIncome +
      incomeFromDigitalAssets +
      otherIncome;
    let taxable_income_newregime =
      total_income_newregime -
      standard_deduction -
      modified_component_basedon_rentIncome_interestHomeloanLetOut;
    let incometax_newregime = Tax_calculate_newregime(
      ageVal,
      taxable_income_newregime
    );
    let cess_newregime = incometax_newregime * 0.04;
    let total_incometax_newregime = incometax_newregime + cess_newregime;

    //Tax calculations for old regime
    let total_income_oldregime =
      incomeFromSalary +
      incomeFromInterest +
      rentalIncome +
      incomeFromDigitalAssets +
      otherIncome;

    //Calculate 80C and 80CCD
    let modified_basicDeduction80C = 0;
    if (basicDeduction80CFormatted > 150000) {
      modified_basicDeduction80C = 150000;
    } else {
      modified_basicDeduction80C = basicDeduction80CFormatted;
    }
    let modified_employeeContributionNPS80CCD = 0;
    if (employeeContributionNPS80CCDFormatted > 200000) {
      modified_employeeContributionNPS80CCD = 200000;
    } else {
      modified_employeeContributionNPS80CCD =
        employeeContributionNPS80CCDFormatted;
    }
    let modified_80Cand80CCD_Total = 0;
    let modified_total =
      modified_basicDeduction80C + modified_employeeContributionNPS80CCD;
    if (modified_total > 200000) {
      modified_80Cand80CCD_Total = 200000;
    } else {
      modified_80Cand80CCD_Total = modified_total;
    }

    //Modify medical insurance
    let modified_medicalInsurance80DFormatted = 0;
    if (ageVal === "below60") {
      if (medicalInsurance80DFormatted > 75000) {
        modified_medicalInsurance80DFormatted = 75000;
      } else {
        modified_medicalInsurance80DFormatted = medicalInsurance80DFormatted;
      }
    } else {
      if (medicalInsurance80DFormatted > 100000) {
        modified_medicalInsurance80DFormatted = 100000;
      } else {
        modified_medicalInsurance80DFormatted = medicalInsurance80DFormatted;
      }
    }
    //Modified interest from deposites from 80TTA
    let modified_interestFromDeposits80TTA = 0;

    // if (interestFromDeposits80TTAFormatted > incomeFromInterest) {
    //   modified_interestFromDeposits80TTA = incomeFromInterest;
    // } else {
    //   modified_interestFromDeposits80TTA = interestFromDeposits80TTAFormatted;
    // }
    // if (modified_interestFromDeposits80TTA > 10000) {
    //   modified_interestFromDeposits80TTA = 10000;
    // }
    if (ageVal === "below60") {
      if (incomeFromInterest >= 10000) {
        modified_interestFromDeposits80TTA = 10000;
      } else {
        modified_interestFromDeposits80TTA = incomeFromInterest;
      }
    } else {
      if (incomeFromInterest >= 50000) {
        modified_interestFromDeposits80TTA = 50000;
      } else {
        modified_interestFromDeposits80TTA = incomeFromInterest;
      }
    }

    //Housing loan - 80EEA(first time buyers)
    let modified_interestOnHouseLoan80EEA = 0;
    if (interestOnHouseLoan80EEAFormatted > 150000) {
      modified_interestOnHouseLoan80EEA = 150000;
    } else {
      modified_interestOnHouseLoan80EEA = interestOnHouseLoan80EEAFormatted;
    }
    let chapterIVADeductions =
      modified_80Cand80CCD_Total +
      modified_medicalInsurance80DFormatted +
      interestEducationalLoan80EFormatted +
      modified_interestFromDeposits80TTA +
      donationsToCharityFormatted +
      modified_interestOnHouseLoan80EEA;
    console.log(
      "data is",
      modified_80Cand80CCD_Total,
      modified_medicalInsurance80DFormatted,
      interestEducationalLoan80EFormatted,
      modified_interestFromDeposits80TTA,
      donationsToCharityFormatted,
      modified_interestOnHouseLoan80EEA
    );
    //home loan for self occupied and let out
    let modified_homeLoanSelfOccupied_LetOut = 0;

    let modified_homeLoanSelfOccupied_LetOut_total =
      interestHLoanLetOut + interestHLoanSelfOccupied;
    if (modified_homeLoanSelfOccupied_LetOut_total > 200000) {
      modified_homeLoanSelfOccupied_LetOut = 200000;
    } else {
      modified_homeLoanSelfOccupied_LetOut =
        modified_homeLoanSelfOccupied_LetOut_total;
    }
    let modified_rental_interesthomeloan_Oldregime = 0;
    if (interestHLoanLetOut === 0) {
      modified_rental_interesthomeloan_Oldregime = 0.3 * rentalIncome;
    } else if (rentalIncome <= interestHLoanLetOut) {
      modified_rental_interesthomeloan_Oldregime = rentalIncome * 0.3;
    } else {
      modified_rental_interesthomeloan_Oldregime = 0.3 * rentalIncome;
    }
    // taxable income old and new regime
    let taxable_income_oldregime =
      total_income_oldregime -
      chapterIVADeductions -
      standard_deduction -
      exemptAllowances -
      modified_rental_interesthomeloan_Oldregime -
      modified_homeLoanSelfOccupied_LetOut;
    let incometax_oldregime = Tax_calculate_oldregime(
      ageVal,
      taxable_income_oldregime
    );
    let cess_oldregime = incometax_oldregime * 0.04;
    let total_incometax_oldregime = incometax_oldregime + cess_oldregime;
    console.log("imp", incometax_oldregime);
    //Update table
    console.log(
      "total income old and new",
      total_income_oldregime,
      total_income_newregime
    );

    if (total_income_newregime === 0 || total_income_oldregime === 0) {
      data_tableList = [
        {
          item: "Total Income",
          old_regime_val: 0,
          new_regime_val: 0,
        },
        {
          item: "Excempt Allowences(E&D)",
          old_regime_val: 0,
          new_regime_val: 0,
        },
        {
          item: "Standard Deductions(E&D)",
          old_regime_val: 0,
          new_regime_val: 0,
        },
        {
          item: "Chapter IV A Deductions(E&D)",
          old_regime_val: 0,
          new_regime_val: 0,
        },
        {
          item: "Taxable Income",
          old_regime_val: 0,
          new_regime_val: 0,
        },
        {
          item: "Income Tax",
          old_regime_val: 0,
          new_regime_val: 0,
        },
        {
          item: "Cess",
          old_regime_val: 0,
          new_regime_val: 0,
        },
        {
          item: "Total Income Tax Payable",
          old_regime_val: 0,
          new_regime_val: 0,
        },
      ];
    } else {
      data_tableList = [
        {
          item: "Total Income",
          old_regime_val: total_income_oldregime.toLocaleString("en-IN"),
          new_regime_val: total_income_newregime.toLocaleString("en-IN"),
        },
        {
          item: "Excempt Allowences(E&D)",
          old_regime_val: exemptAllowances.toLocaleString("en-IN"),
          new_regime_val: 0,
        },
        {
          item: "Standard Deductions(E&D)",
          old_regime_val: standard_deduction.toLocaleString("en-IN"),
          new_regime_val: standard_deduction.toLocaleString("en-IN"),
        },
        {
          item: "Chapter IV A Deductions(E&D)",
          old_regime_val: chapterIVADeductions.toLocaleString("en-IN"),
          new_regime_val: 0,
        },
        {
          item: "Taxable Income",
          old_regime_val: taxable_income_oldregime.toLocaleString("en-IN"),
          new_regime_val: taxable_income_newregime.toLocaleString("en-IN"),
        },
        {
          item: "Income Tax",
          old_regime_val: incometax_oldregime.toLocaleString("en-IN"),
          new_regime_val: incometax_newregime.toLocaleString("en-IN"),
        },
        {
          item: "Cess",
          old_regime_val: cess_oldregime.toLocaleString("en-IN"),
          new_regime_val: cess_newregime.toLocaleString("en-IN"),
        },
        {
          item: "Total Income Tax Payable",
          old_regime_val: total_incometax_oldregime.toLocaleString("en-IN"),
          new_regime_val: total_incometax_newregime.toLocaleString("en-IN"),
        },
      ];
    }
    setincometaxTableList(data_tableList);

    // fill the data for table
  }, [isClicked]);

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
            <h6 className="mt-4">
              Interest from Deposits - 80TTA(Below 60 years) /80TTB (For Senior
              citizens)
            </h6>
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
