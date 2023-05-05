//General Imports
import React from "react";
import { useNavigate } from "react-router-dom";

//Context Imports
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import EmployeeContext from "../../context/EmployeeContext";

// CSS Imports
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const { logoutEmployee, employee } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const logoutAll = () => {
      logoutUser();
      logoutEmployee();
  };

  return (
    <div className="navbar">
    <a href="/">Home</a>
    <a href="/newtimeoffrequest">New Request</a>
    <div className="dropdown">
      <button className="dropbtn">Tools
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <a href="/supervisor">Supervisor</a>
        <a href="/admin">Admin</a>
        {/* <a href="#">Link 3</a> */}
      </div>
    </div>
      <div>
        {user ? (
          <a onClick={logoutAll}>Logout</a>
        ) : (
          <a onClick={() => navigate("/login")}>Login</a>
        )}
      </div>
  </div>
  );
};

export default Navbar;
