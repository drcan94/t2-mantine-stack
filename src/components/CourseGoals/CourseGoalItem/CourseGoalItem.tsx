import React from "react";
import { GoalItem } from "./styles";
import { useMantineTheme } from "@mantine/core";

export type GoalItemType = {
  text: string;
  id: string;
};

const CourseGoalItem: React.FC<{
  children: React.ReactNode;
  onDelete: (id: string) => void;
  id: string;
}> = ({ children, onDelete, id }) => {
  const theme = useMantineTheme();
  // const [deleteText, setDeleteText] = useState('');
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <GoalItem theme={theme} onClick={deleteHandler}>
      {children}
    </GoalItem>
  );
};

export default CourseGoalItem;
