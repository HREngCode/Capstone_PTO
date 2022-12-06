
import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import EmployeeContext from "../../context/EmployeeContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const { registerEmployee } = useContext(EmployeeContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    employeeNumber: "",
    department: "",
    supervisorId: "",
    hireDate: "",
    ptoBalance: "",
    active: "",
  };
  
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser,
    (RegisterEmployeeData()),
  );

  function RegisterEmployeeData(data) {
    return(
      registerEmployee,
      (console.log(registerEmployee))
    )
  };

  return (
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
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
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
          Employee Number:{" "}
          <input
            type="number"
            name="employeeNumber"
            value={formData.employeeNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>        <label>
          Department:{" "}
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </label>
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
            type="number"
            name="ptoBalance"
            value={formData.ptoBalance}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Active:{" "}
          <input
            type="boolean"
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

export default RegisterPage;
