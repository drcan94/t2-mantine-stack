import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList: React.FC<any> = (props) => {
  return (
    <ul>
      {props.items.map((goal: any) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
