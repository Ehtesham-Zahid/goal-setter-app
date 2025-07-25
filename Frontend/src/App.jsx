import { Outlet } from "react-router";

import Header from "./components/Header";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <div className="container">
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </div>
  );
};

export default App;
