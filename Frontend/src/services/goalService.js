import axios from "axios";

const API_URL = "http://localhost:5000/api/goals";

const getGoals = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const response = await axios.get(`${API_URL}/`, config);
    return response.data;
  } catch (error) {
    // Convert Axios error to readable message
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      "Goals fetching Failed.";
    throw new Error(message); // Throw it for context to catch
  }
};

const createGoal = async (goalData) => {
  try {
    console.log(goalData);
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const response = await axios.post(`${API_URL}/`, goalData, config);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    // Convert Axios error to readable message
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      "Goal Creation Failed.";
    throw new Error(message); // Throw it for context to catch
  }
};

const deleteGoal = async (goalId) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    console.log(goalId);
    const response = await axios.delete(`${API_URL}/${goalId}`, config);
    return response.data;
  } catch (error) {
    // Convert Axios error to readable message
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      "Goal Deletion Failed.";
    throw new Error(message); // Throw it for context to catch
  }
};

const goalService = {
  getGoals,
  createGoal,
  deleteGoal,
};

export default goalService;
