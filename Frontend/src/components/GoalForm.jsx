import { useContext, useState } from "react";
import { GoalContext } from "../contexts/GoalContext";

const GoalForm = () => {
  const { createGoal } = useContext(GoalContext);

  const [text, setText] = useState("");

  const createGoalHandler = (e) => {
    e.preventDefault();
    createGoal({ text });
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={createGoalHandler}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Enter your goal"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
