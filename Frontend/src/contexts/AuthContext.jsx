import { createContext, useState } from "react";
import authService from "../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  // User Registeration
  const register = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const userData = await authService.register(data);
      setUser(userData);
      toast.success("Successfully Registered");
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // User login

  const login = async (data) => {
    setIsLoading(true);
    setError(null);

    try {
      const userData = await authService.login(data);
      setUser(userData);
      toast.success("Successfully Logged In!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // User Logout
  const logout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext value={{ user, isLoading, error, logout, login, register }}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;
