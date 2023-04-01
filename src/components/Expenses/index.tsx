import React from "react";
import { ExpensesContainer } from "./styles";
import NewExpense from "./NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import AllExpenses from "./AllExpenses";

const ExpensesComponent: React.FC = () => {
  return (
    <React.Fragment>
      <NewExpense />
      <ExpensesContainer>
        <ExpenseFilter />
        <AllExpenses />
      </ExpensesContainer>
    </React.Fragment>
  );
};

export default ExpensesComponent;
