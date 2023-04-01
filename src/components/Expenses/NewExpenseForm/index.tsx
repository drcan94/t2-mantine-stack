import React from "react";
import { Actions, Control, Controls } from "./styles";
import { IExpense } from "../data";
import { useExpensesContext } from "../../../providers/ExpenseDataProvider/index";

const NewExpenseForm: React.FC<{ setIsOpen: any}> = ({ setIsOpen }) => {
  const { setExpensesData } = useExpensesContext();

  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [date, setDate] = React.useState(new Date().toISOString().slice(0, 10));

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    // of course this way is not necessary, but it's a good practice :)
    switch (event.target.id) {
      case "title":
        setTitle(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      case "date":
        setDate(event.target.value);
        break;
    }
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (title.trim().length === 0 || price.trim().length === 0) {
      return;
    }

    const newExpenseObj: IExpense = {
      id: Math.random().toString(),
      title,
      price: +price,
      date: new Date(date),
    };

    setExpensesData((prevExpenses: IExpense[]) => {
      return [newExpenseObj, ...prevExpenses];
    });

    setIsOpen(false);
    setTitle("");
    setPrice("");
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={submitHandler}>
      <Controls>
        <Control>
          <label htmlFor="title">Title</label>
          <input onChange={inputChangeHandler} id="title" value={title} />
        </Control>
        <Control>
          <label htmlFor="price">Price</label>
          <input
            onChange={inputChangeHandler}
            id="price"
            value={price}
            type={"price"}
            min={0.01}
            step={0.01}
          />
        </Control>
        <Control>
          <label htmlFor="date">Date</label>
          <input
            onChange={inputChangeHandler}
            id="date"
            value={date}
            type={"date"}
            min={"2019-01-01"}
            step={"2022-12-31"}
          />
        </Control>
      </Controls>
      <Actions>
        <button type="button" onClick={() => setIsOpen(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </Actions>
    </form>
  );
};

export default NewExpenseForm;
