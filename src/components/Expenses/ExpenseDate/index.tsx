import React from "react";
import { DateContainer, Month, Day, Year } from "./styles";
const ExpenseDate: React.FC<{ date: Date }> = ({ date }) => {
  const month = date.toLocaleDateString("en-US", {month: "long"});
  const day = date.toLocaleDateString("en-US", {day: "numeric"});
  const year = date.getFullYear()
  return (
    <DateContainer>
      <Month>{month}</Month>
      <Year>{year}</Year>
      <Day>{day}</Day>
    </DateContainer>
  );
};

export default ExpenseDate;
