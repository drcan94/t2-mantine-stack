import { Text, useMantineTheme } from "@mantine/core";
import React from "react";
import { useExpensesContext } from "../../../providers/ExpenseDataProvider/index";
import ExpenseItem from "../ExpenseItem/index";
import ExpensesChart from "../ExpensesChart";

const AllExpenses = () => {
  const theme = useMantineTheme();
  const { sortedByDateExpenses } = useExpensesContext();

  // conditional rendering
  if (sortedByDateExpenses.length === 0) {
    return (
      <Text
        align="center"
        color={
          theme.colorScheme === "dark"
            ? theme.colors.green[6]
            : theme.colors.cyan[2]
        }
      >
        No results
      </Text>
    );
  }

  return (
    <React.Fragment>
      <ExpensesChart />
      {sortedByDateExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </React.Fragment>
  );
};

export default AllExpenses;

// directly filtering in the map function with return null
// {
//   expensesData.map((item) => {
//     if (
//       filteredYear !== "all" &&
//       item.date.getFullYear().toString() !== filteredYear
//     ) {
//       return null;
//     }
//     return (
//       <ExpenseItem
//         key={item.id}
//         description={item.description}
//         price={item.price}
//         date={item.date}
//       />
//     );
//   });
// }
