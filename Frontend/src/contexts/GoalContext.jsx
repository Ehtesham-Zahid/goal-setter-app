import React, { createContext, useState } from "react";
import goalService from "../services/goalService";
import { toast } from "react-toastify";

export const GoalContext = createContext(null);

const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGoals = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const goals = await goalService.getGoals();
      setGoals(goals);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createGoal = async (goalData) => {
    setIsLoading(true);
    setError(null);

    try {
      const goal = await goalService.createGoal(goalData);
      const updatedGoals = [...goals, goal];
      setGoals(updatedGoals);
      toast.success("Goal Added!");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteGoal = async (goalId) => {
    setIsLoading(true);
    setError(null);

    try {
      const goal = await goalService.deleteGoal(goalId);
      const filteredGoals = goals.filter((goal) => goal._id !== goalId);
      setGoals(filteredGoals);
      toast.success("Goal Deleted!");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GoalContext
      value={{ goals, isLoading, error, getGoals, createGoal, deleteGoal }}
    >
      {children}
    </GoalContext>
  );
};

export default GoalProvider;
