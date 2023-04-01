import React from "react";
import Chart from "../../Chart";
import { ChartBarProps } from "../../Chart/ChartBar";
import { useExpensesContext } from "../../../providers/ExpenseDataProvider/index";

const ExpensesChart: React.FC = () => {
  const { sortedByDateExpenses } = useExpensesContext();
  
  const chartDataPoints: ChartBarProps[] = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of sortedByDateExpenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.price;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
