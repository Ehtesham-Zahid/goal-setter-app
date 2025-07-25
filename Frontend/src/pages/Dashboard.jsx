import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import GoalForm from "../components/GoalForm";
import { GoalContext } from "../contexts/GoalContext";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { goals, isLoading, error, getGoals } = useContext(GoalContext);

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    } else {
      getGoals();
    }
  }, [user, navigate]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      {error ? <p className="text-red-500 font-bold">{error}</p> : null}
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => {
              return <GoalItem key={goal._id} goal={goal} />;
            })}
          </div>
        ) : (
          <h3>You have not set any Goals</h3>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
