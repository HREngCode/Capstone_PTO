//General Imports
import React, { useState, useContext } from "react";

//Context Imports
import AuthContext from "../../context/AuthContext";
import EmployeeContext from "../../context/EmployeeContext";

//Hooks Imports
import useCustomForm from "../../hooks/useCustomForm";

const RegisterEePage = () => {
  const [ active, setActive ] = useState(false)
  const [ supervisor, setSupervisor ] = useState(false)
  const [ admin, setAdmin ] = useState(false)
  const { registerEmployee } = useContext(EmployeeContext);
  const { user } = useContext(AuthContext);

  const defaultValues = {
    //Changed value to User
    user_id: "",
    employee_number: "",
    employee_first_name: "",
    employee_last_name: "",
    department: "",
    supervisor_number: "",
    hire_date: "",
    pto_balance: "",
    //changed to State Variable
    active: active,
    isSupervisor: supervisor,
    isAdmin: admin,
  };
  console.log(defaultValues)

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
            name="user_id"
            value={formData.user_id}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Employee Number:{" "}
          <input
            type="number"
            name="employee_number"
            value={formData.employee_number}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="employee_first_name"
            value={formData.employee_first_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="employee_last_name"
            value={formData.employee_last_name}
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
          Supervisor Number:{" "}
          <input
            type="number"
            name="supervisor_number"
            value={formData.supervisor_number}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Hire Date:{" "}
          <input
            type="date"
            name="hire_date"
            value={formData.hire_date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          PTO Balance:{" "}
          <input
          //Changed to type Number
          type="number"
            name="pto_balance"
            value={formData.pto_balance}
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
        <label>
          Supervisor:{" "}
          <input
            type="checkbox"
            name="isSupervisor"
            //handle change of input
            value={formData.isSupervisor}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Admin:{" "}
          <input
            type="checkbox"
            name="isAdmin"
            //handle change of input
            value={formData.isAdmin}
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
