import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar">
    <a href="/home">Home</a>
    <a href="/request">New Request</a>
    <div className="dropdown">
      <button className="dropbtn">Dropdown
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <a href="/supervisor">Supervisor</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
      <div>
        {user ? (
          <a onClick={logoutUser}>Logout</a>
        ) : (
          <a onClick={() => navigate("/login")}>Login</a>
        )}
      </div>
  </div>
  );
};

export default Navbar;
