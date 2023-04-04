import React from "react";
import CourseGoalList from "../../../components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "../../../components/CourseGoals/CourseInput/CourseInput";

import { useMantineTheme } from "@mantine/core";
import { GoalForm } from "~/components/CourseGoals/CourseInput/styles";
import { Goals } from "~/components/CourseGoals/CourseGoalList/styles";
import type { GoalItemType } from "../../../components/CourseGoals/CourseGoalItem/CourseGoalItem";

const CourseGoalScreen: React.FC = () => {
  const theme = useMantineTheme();

  const [courseGoals, setCourseGoals] = React.useState<GoalItemType[]>([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText: string) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId: string) => {
    setCourseGoals((prevGoals) =>
      prevGoals.filter((goal) => goal.id !== goalId)
    );
  };

  // let content = (
  //   <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  // );

  // if (courseGoals.length > 0) {
  //   content = (
  //     <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
  //   );
  // }

  return (
    <React.Fragment>
      <GoalForm
        style={{
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.green[9]
              : theme.colors.gray[0],
        }}
      >
        <CourseInput onAddGoal={addGoalHandler} />
      </GoalForm>
      <Goals>
        {/* {content} */}
        {courseGoals.length > 0 ? (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) : (
          <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
        )}
      </Goals>
    </React.Fragment>
  );
};

export default CourseGoalScreen;
