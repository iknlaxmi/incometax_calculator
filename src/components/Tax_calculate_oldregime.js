import React from "react";

export const Tax_calculate_oldregime = (age, income) => {
  let final_tax_oldregime = 0;

  if (age === "below60") {
    if (income <= 250000) {
      final_tax_oldregime = 0;
    } else if (income > 250000 && income <= 300000) {
      final_tax_oldregime = (income - 250000) * 0.05;
    } else if (income > 300000 && income <= 500000) {
      final_tax_oldregime = 2500 + (income - 300000) * 0.05;
    } else if (income > 500000 && income <= 1000000) {
      final_tax_oldregime = 12500 + (income - 500000) * 0.2;
    } else if (income > 1000000) {
      final_tax_oldregime = 112500 + (income - 1000000) * 0.3;
    }
  } else if (age === "between6oTo80") {
    if (income <= 300000) {
      final_tax_oldregime = 0;
    } else if (income > 300000 && income <= 500000) {
      final_tax_oldregime = (income - 300000) * 0.05;
    } else if (income > 500000 && income <= 1000000) {
      final_tax_oldregime = 10000 + (income - 500000) * 0.2;
    } else if (income > 1000000) {
      final_tax_oldregime = 110000 + (income - 1000000) * 0.3;
    }
  } else if (age === "above80") {
    if (income <= 500000) {
      final_tax_oldregime = 0;
    } else if (income > 500000 && income <= 1000000) {
      final_tax_oldregime = (income - 500000) * 0.2;
    } else if (income > 1000000) {
      final_tax_oldregime = 100000 + (income - 1000000) * 0.3;
    }
  }

  return final_tax_oldregime;
};
