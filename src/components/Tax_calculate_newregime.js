import React from "react";

export const Tax_calculate_newregime = (age, income) => {
  let final_tax_newregime = 0;

  if (income <= 300000) {
    final_tax_newregime = 0;
  } else if (income > 300000 && income <= 600000) {
    final_tax_newregime = (income - 300000) * 0.05;
  } else if (income > 600000 && income <= 900000) {
    final_tax_newregime = 15000 + (income - 600000) * 0.1;
  } else if (income > 900000 && income <= 1200000) {
    final_tax_newregime = 45000 + (income - 900000) * 0.15;
  } else if (income > 1200000 && income <= 1500000) {
    final_tax_newregime = 90000 + (income - 1200000) * 0.2;
  } else if (income > 1500000) {
    final_tax_newregime = 150000 + (income - 1500000) * 0.3;
  }

  return final_tax_newregime;
};
