import { Outlet } from "react-router";

import Header from "./components/Header";
import AuthProvider from "./contexts/AuthContext";
import GoalProvider from "./contexts/GoalContext";

const App = () => {
  return (
    <div className="container">
      <AuthProvider>
        <GoalProvider>
          <Header />
          <Outlet />
        </GoalProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
