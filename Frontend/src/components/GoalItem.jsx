import { useContext } from "react";
import { GoalContext } from "../contexts/GoalContext";

const GoalItem = ({ goal }) => {
  const { deleteGoal } = useContext(GoalContext);

  const deleteGoalHandler = (goalId) => {
    deleteGoal(goalId);
  };
  return (
    <div className="goal border-black border-2 rounded-md">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>
      <button className="close" onClick={() => deleteGoalHandler(goal._id)}>
        X
      </button>
    </div>
  );
};

export default GoalItem;
