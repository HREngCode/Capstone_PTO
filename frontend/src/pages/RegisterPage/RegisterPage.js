//General Imports
import React, { useState, useContext } from "react";

//Context Imports
import AuthContext from "../../context/AuthContext";

//Hooks Imports
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  
  const { registerUser } = useContext(AuthContext);
  
  const defaultValues = {
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  };
  
  //passing registerUser as a function and is considered the callback
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser,
  );
  
  
  return (
    <div className="container">

      {/*handleSubmit is called from the hook up above*/}
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
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button>Register!</button>
      </form>
    </div>
  );
};

export default RegisterPage;
