import React, { useState } from "react";
import Income_tax_nav from "./Income_tax_nav";
import { Navigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
const TABLE_HEAD = ["", "Old Regime", "New Regime"];
const TABLE_ROWS = [
  {
    item: "Total Income",
    old_regime_val: 123,
    new_regime_val: 123,
  },
  {
    item: "Excemptions & Deductions",
    old_regime_val: 123,
    new_regime_val: 123,
  },
  {
    item: "Taxable Income",
    old_regime_val: 123,
    new_regime_val: 123,
  },
  {
    item: "Tax due on above",
    old_regime_val: 123,
    new_regime_val: 123,
  },
];

const Summary = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleTryTaxCalculate = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <div className="mt-16 text-center font-bold">
        <Income_tax_nav />
      </div>
      <div className="text-right mt-11 p-4 ">
        <Button
          className="bg-blue-500 text-black"
          onClick={handleTryTaxCalculate}
        >
          Try the calculatoe again
        </Button>
        {isClicked && <Navigate to="/deductions" replace={true} />}
      </div>
      <div>
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ item, old_regime_val, new_regime_val }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={item}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {item}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {old_regime_val}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {new_regime_val}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default Summary;
