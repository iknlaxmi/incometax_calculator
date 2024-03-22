import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Income_tax_nav from "./Income_tax_nav";
import { atom, useRecoilState } from "recoil";
export const yearState = atom({
  key: "yearState", // unique ID (with respect to other atoms/selectors)
  default: "option1", // default value (aka initial value)
});
export const ageState = atom({
  key: "ageState", // unique ID (with respect to other atoms/selectors)
  default: "below60", // default value (aka initial value)
});

const Basic_details = () => {
  const [selectedYearValue, setSelectedYearValue] = useState(
    localStorage.getItem("year") || "option1"
  );
  const [selectedAgeValue, setSelectedAgeValue] = useState(
    localStorage.getItem("age") || "below60"
  );
  const [isClicked, setIsClicked] = useState(false);

  const handleAgeRadioChange = (event) => {
    setSelectedAgeValue(event.target.value);
    localStorage.setItem("age", event.target.value);
  };

  const handleYearRadioChange = (event) => {
    setSelectedYearValue(event.target.value);
    localStorage.setItem("year", event.target.value);
  };
  const handleNextStepBtn = () => {
    setIsClicked(true);
  };

  return (
    <div className="">
      <div className="ml-8">
        <div className="mt-16 text-center font-bold">
          <Income_tax_nav />
        </div>
        <p className="font-thin italic mt-8">
          See how the latest budget impacts your tax calculation. Updated as per
          latest budget on 1 February, 2024.
        </p>
      </div>

      <div className="mt-8 ml-8">
        <h3 className="font-semibold">
          Which Financial Year do you want to calculate taxes for?
        </h3>
        <div className="text-sm mt-4">
          {" "}
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedYearValue === "option1"}
            onChange={handleYearRadioChange}
          />
          <label htmlFor="option1" className="">
            FY 2024-2025 Latest Budget (Return to be filed between 1st April
            2025 - 31st March 2026)
          </label>
        </div>
        <div className="text-sm mt-2">
          {" "}
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedYearValue === "option2"}
            onChange={handleYearRadioChange}
          />
          <label htmlFor="option2">
            FY 2023-2024 (Return to be filed between 1st April 2024 - 31st March
            2025)
          </label>
        </div>
      </div>
      <div className="mt-16 ml-8">
        <h2 className="mt-2">Your age</h2>
        <div className="mt-4">
          <input
            type="radio"
            id="below60"
            value="below60"
            checked={selectedAgeValue === "below60"}
            onChange={handleAgeRadioChange}
          />
          <label htmlFor="below60">0 to 60</label>
        </div>
        <div className="mt-2">
          <input
            type="radio"
            id="between6oTo80"
            value="between6oTo80"
            checked={selectedAgeValue === "between6oTo80"}
            onChange={handleAgeRadioChange}
          />
          <label htmlFor="between6oTo80">60 to 80</label>
        </div>
        <div className="mt-2">
          <input
            type="radio"
            id="above80"
            value="above80"
            checked={selectedAgeValue === "above80"}
            onChange={handleAgeRadioChange}
          />
          <label htmlFor="above80">80 & above</label>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button className="bg-blue-500 text-black" onClick={handleNextStepBtn}>
          Go to Next Step
        </Button>
        {isClicked && <Navigate to="/income_details" replace={true} />}
      </div>
    </div>
  );
};

export default Basic_details;
