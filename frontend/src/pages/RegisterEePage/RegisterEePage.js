import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import EmployeeContext from "../../context/EmployeeContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterEePage = () => {
  const { contextData, token } = useContext(AuthContext);
  const { registerEmployee } = useContext(EmployeeContext);
  const user = contextData.user.id;
  console.log(user)

  const defaultValues = {
    userId: "",
    employeeNumber: "",
    firstName: "",
    lastName: "",
    department: "",
    supervisorId: "",
    hireDate: " ",
    ptoBalance: " ",
    active: "",
  };
  console.log(defaultValues);

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    registerEmployee
  );

  // function RegisterEmployeeData() {
  //   return(registerEmployee);
  // };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          {/* User Id:{userId}
          <input
            type="number"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
          /> */}
        </label>
        <label>
          Employee Number:{" "}
          <input
            type="number"
            name="employeeNumber"
            value={formData.employeeNumber}
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
        <label>
          Department:{" "}
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Supervisor Id:{" "}
          <input
            type="number"
            name="supervisorId"
            value={formData.supervisorId}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Hire Date:{" "}
          <input
            type="date"
            name="hireDate"
            value={formData.hireDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          PTO Balance:{" "}
          <input
            type="decimal"
            name="ptoBalance"
            value={formData.ptoBalance}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Active:{" "}
          <input
            type="checkbox"
            name="active"
            value={formData.active}
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

export default RegisterEePage;
