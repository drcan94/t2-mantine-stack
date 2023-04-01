import React from "react";
import ExpensesComponent from "../../components/Expenses";
import ExpensesContextProvider from "../../providers/ExpenseDataProvider";
import { ExpensesPageContainer } from "~/components/Expenses/styles";

const ExpensesScreen: React.FC = () => {
  return (
    <ExpensesPageContainer>
      <ExpensesContextProvider>
        <ExpensesComponent />
      </ExpensesContextProvider>
    </ExpensesPageContainer>
  );
};

export default ExpensesScreen;
