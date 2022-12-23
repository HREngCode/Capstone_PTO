import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import EmployeeContext from "../../context/EmployeeContext";
import useCustomForm from "../../hooks/useCustomForm";

const RegisterEePage = () => {
  const [ active, setActive ] = useState(false)
  const { registerEmployee } = useContext(EmployeeContext);
  const { user } = useContext(AuthContext);

  const defaultValues = {
    //Changed value to User
    user_id:user.id,
    employeeNumber: "",
    firstName: "",
    lastName: "",
    department: "",
    supervisorId: "",
    hireDate: "",
    ptoBalance: "",
    //changed to State Variable
    active: active,
  };

  const handleChange = () => {
    setActive(current => !current);
  };

  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerEmployee,
  );


  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          User Id:{" "}
          <input
            type="number"
            name="userId"
            value={formData.user_id}
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
          //Changed to type Number
          type="number"
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
            //handle change of input
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
