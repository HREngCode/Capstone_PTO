import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Header from "../../components/Header/Header";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const [ supervisor, setSupervisor ] = useState(false)
  const defaultValues = { username: "", password: "", supervisor:supervisor };

  const handleChange = () => {
    setSupervisor(current => !current);
  };

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [reset, isServerError]);

  return (
    <div><Header />
      <div className="body">
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Username:{" "}
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Password:{" "}
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Supervisor:{" "}
              <input
                type="checkbox"
                name="supervisor"
                //handle change of input
                value={formData.supervisor}
                onChange={handleInputChange}
              />
            </label>
            {isServerError ? (
              <p className="error">Login failed, incorrect credentials!</p>
            ) : null}
            <Link to="/registerEe">Click to register!</Link>
            <button>Login!</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
