import React from "react";
import { GoalItem } from "./styles";

const CourseGoalItem: React.FC<any> = (props) => {
  // const [deleteText, setDeleteText] = useState('');
  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <GoalItem onClick={deleteHandler}>
      {props.children}
    </GoalItem>
  );
};

export default CourseGoalItem;
