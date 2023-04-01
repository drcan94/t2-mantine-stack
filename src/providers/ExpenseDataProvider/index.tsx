import React, { createContext, useContext } from "react";
import { expenses, type IExpense } from "../../components/Expenses/data";
import { useLocalStorage } from "@mantine/hooks";
import superjson from "superjson";

export type GlobalExpensesType = {
  sortedByDateExpenses: IExpense[];
  setExpensesData: React.Dispatch<React.SetStateAction<IExpense[]>>;
  filteredYear: string;
  setFilteredYear: React.Dispatch<React.SetStateAction<string>>;
};

const ExpensesContext = createContext<GlobalExpensesType | undefined>(
  undefined
);

interface ProviderProps {
  children: React.ReactNode;
}

const ExpensesContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [filteredYear, setFilteredYear] = React.useState<string>("all");

  const [expensesData, setExpensesData] = useLocalStorage<IExpense[]>({
    key: "expensesData",
    defaultValue: expenses,
    getInitialValueInEffect: false,
    serialize: superjson.stringify,
    deserialize: (str) => (str === undefined ? expenses : superjson.parse(str)),
  });

  const filteredByYearExpenses = expensesData.filter((item) => {
    if (filteredYear === "all") {
      return true;
    }
    return item.date.getFullYear().toString() === filteredYear;
  });

  const sortedByDateExpenses = filteredByYearExpenses.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  return (
    <ExpensesContext.Provider
      value={{
        sortedByDateExpenses,
        setExpensesData,
        filteredYear,
        setFilteredYear,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpensesContext = () => {
  const context = useContext(ExpensesContext) as GlobalExpensesType;
  if (context === undefined) {
    throw new Error(
      "useExpensesContext must be used within a ExpensesContextProvider"
    );
  }
  return context;
};

export default ExpensesContextProvider;
