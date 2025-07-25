import axios from "axios";

const API_URL = "https://goal-setter-app-production.up.railway.app/api/users";

const register = async (registerData) => {
  try {
    const response = await axios.post(`${API_URL}/`, registerData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    // Convert Axios error to readable message
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      "An error occurred during registration.";
    throw new Error(message); // Throw it for context to catch
  }
};

const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
    // Convert Axios error to readable message
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      "An error occurred during login.";
    throw new Error(message); // Throw it for context to catch
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
