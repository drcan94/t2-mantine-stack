import React from "react";

import CourseGoalItem, {
  type GoalItemType,
} from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList: React.FC<{
  id: string;
  onDeleteItem: () => void;
  children: React.ReactNode;
  items: GoalItemType[];
}> = ({ id, onDeleteItem, items }) => {
  return (
    <ul>
      {items.map((goal) => (
        <CourseGoalItem key={id} id={id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
