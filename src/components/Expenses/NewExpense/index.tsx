import React from "react";
import { NewExpenseContainer } from "./styles";
import NewExpenseForm from "../NewExpenseForm/index";

const NewExpense: React.FC = () => {
  const [isOpenNewExpenseForm, setIsOpenNewExpenseForm] =
    React.useState<boolean>(false);

  return (
    <NewExpenseContainer>
      {!isOpenNewExpenseForm && (
        <button onClick={() => setIsOpenNewExpenseForm(true)}>
          Add New Expense
        </button>
      )}
      {isOpenNewExpenseForm && <NewExpenseForm setIsOpen={setIsOpenNewExpenseForm} />}
    </NewExpenseContainer>
  );
};

export default NewExpense;
