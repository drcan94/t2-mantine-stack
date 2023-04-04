import React from "react";

import CourseGoalItem, {
  type GoalItemType,
} from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList: React.FC<{
  onDeleteItem: (goalId: string) => void;
  items: GoalItemType[];
}> = ({ onDeleteItem, items }) => {
  return (
    <ul>
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
