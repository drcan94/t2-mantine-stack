import React, { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { FormControl } from "./styles/index";

const CourseInput: React.FC<any> = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState("");

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  useEffect(() => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
  }, [enteredValue]);

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
    setIsValid(true);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={isValid}>
        <label>Course Goal</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
