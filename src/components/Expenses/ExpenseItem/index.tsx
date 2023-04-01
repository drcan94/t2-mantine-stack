import { Button } from "@mantine/core";
import React from "react";
import { IExpense } from "../data";
import ExpenseDate from "../ExpenseDate";
import { ExpenseItemContainer, ItemTitle, ItemPrice } from "./styles";
import { useExpensesContext } from "../../../providers/ExpenseDataProvider";

const ExpenseItem: React.FC<IExpense> = ({ id, date, title, price }) => {
  const { setExpensesData } = useExpensesContext();

  const deleteExpenseHandler = () => {
    setExpensesData((prevExpense) => {
      return prevExpense.filter((item) => item.id !== id);
    });
  };

  return (
    <ExpenseItemContainer>
      <ExpenseDate date={date} />
      <ItemTitle>
        <h2>{title}</h2>
      </ItemTitle>
      <ItemPrice>${price}</ItemPrice>
      <Button
        sx={{ marginLeft: 10, borderRadius: 20, justifySelf: "flex-end" }}
        onClick={deleteExpenseHandler}
      >
        Delete
      </Button>
    </ExpenseItemContainer>
  );
};

export default ExpenseItem;
