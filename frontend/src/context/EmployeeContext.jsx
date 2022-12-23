//create context to be imported
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import jwtDecode from "jwt-decode";

const EmployeeContext = createContext();

export default EmployeeContext;

// function setEmployeeObject(employee) {
//   if (!employee) {
//     return null;
//   }
  // return {
  //   user_id: employee.userId,
  //   employee_number: employee.employeeNumber,
  //   employee_first_name: employee.firstName,
  //   employee_last_name: employee.lastName,
  //   department: employee.department,
  //   supervisor_id: employee.supervisorId,
  //   hire_date: employee.hireDate,
  //   pto_balance: employee.ptoBalance,
  //   active: employee.active,
  // }; 
// }

export const EmployeeProvider = ({ children }) => {
  const BASE_URL = "http://127.0.0.1:8000/api/employees";
  // const userToken = JSON.parse(localStorage.getItem("token"));
  // const decodedUser = userToken ? jwtDecode(userToken) : null;
  // const [token, setToken] = useState(userToken);
  // const [employee, setEmployee] = useState( );
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();

  const registerEmployee = async (registerData) => {
    try {
      let finalData = {
        user_id: registerData.user_id,
        employee_number: registerData.employeeNumber,
        employee_first_name: registerData.firstName,
        employee_last_name: registerData.lastName,
        department: registerData.department,
        supervisor_id: registerData.supervisorId,
        hire_date: registerData.hireDate,
        pto_balance: registerData.ptoBalance,
        active: registerData.active
      };
      console.log(finalData);

      let response = await axios.post(`${BASE_URL}/changes/`, finalData);
      // , {
      //   headers: {
      //     // Authorization: "Bearer " + token,
      //   },
      // }
      // )
      console.log(response.data)
      if (response.status === 201) {
        console.log("Successful registration as employee! Log in to access token");
        setIsServerError(false);
        navigate("/"); // navigate to home page instead login
      } else {
        navigate("/login"); //diff page than user reg
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const contextData = {
    // employee,
    registerEmployee,
    isServerError,
  };

  return (
    <EmployeeContext.Provider value={contextData}>{children}</EmployeeContext.Provider>
  );
};