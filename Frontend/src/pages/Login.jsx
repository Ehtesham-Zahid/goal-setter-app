import { useState, useEffect, useContext } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";

const Login = () => {
  const { login, isLoading, error } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const loginData = { email, password };
    login(loginData);
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Login</h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form onSubmit={loginHandler}>
          <div className="form-group">
            {" "}
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            {" "}
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
      {error ? <p className="text-red-500">{error}</p> : null}
    </>
  );
};

export default Login;
