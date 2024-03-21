import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const Basic_details = () => {
  const [selectedYearValue, setSelectedYearValue] = useState("option1");
  const [selectedAgeValue, setSelectedAgeValue] = useState("option1");

  const handleAgeRadioChange = (event) => {
    setSelectedAgeValue(event.target.value);
    console.log(event.target.value);
  };

  const handleYearRadioChange = (event) => {
    setSelectedYearValue(event.target.value);
    console.log(event.target.value);
  };
  const handleNextStepBtn = () => {};

  return (
    <div className="mt-12">
      <div>
        <p className="text-normal">
          See how the latest budget impacts your tax calculation. Updated as per
          latest budget on 1 February, 2024.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-semibold">
          Which Financial Year do you want to calculate taxes for?
        </h3>
        <div>
          {" "}
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedYearValue === "option1"}
            onChange={handleYearRadioChange}
          />
          <label htmlFor="option1">
            FY 2024-2025 Latest Budget (Return to be filed between 1st April
            2025 - 31st March 2026)
          </label>
        </div>
        <div>
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
      <div>
        <h2>Your age</h2>
        <div>
          <input
            type="radio"
            id="option1"
            value="option1"
            checked={selectedAgeValue === "option1"}
            onChange={handleAgeRadioChange}
          />
          <label htmlFor="option1">0 to 60</label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            value="option2"
            checked={selectedAgeValue === "option2"}
            onChange={handleAgeRadioChange}
          />
          <label htmlFor="option2">60 to 80</label>
        </div>
        <div>
          <input
            type="radio"
            id="option3"
            value="option3"
            checked={selectedAgeValue === "option3"}
            onChange={handleAgeRadioChange}
          />
          <label htmlFor="option3">80 & above</label>
        </div>
      </div>
      <div>
        <Button onClick={handleNextStepBtn}>Go to Next Step</Button>
      </div>
    </div>
  );
};

export default Basic_details;
