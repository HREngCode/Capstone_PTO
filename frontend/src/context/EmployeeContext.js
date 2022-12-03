//create context to be imported
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const EmployeeContext = createContext();

export default EmployeeContext;

function setUserObject(employee) {
    if (!employee) {
      return null;
    }
    return {
      username: employee.username,
      id: employee.user_id,
      first_name: employee.first_name,
    };
  }
  
  export const AuthProvider = ({ children }) => {
    const BASE_URL = "http://127.0.0.1:8000/api/auth";
    const [user] = useState(setUserObject());
    const [isServerError, setIsServerError] = useState(false);
    const navigate = useNavigate();
  
    const registerEmployee = async (registerData) => {
      try {
        let finalData = {
          username: registerData.username,
          password: registerData.password,
          email: registerData.email,
          first_name: registerData.firstName,
          last_name: registerData.lastName,
        };
        let response = await axios.post(`${BASE_URL}/employee/user/`, finalData);
        if (response.status === 201) {
          console.log("Successful registration! Log in to access token");
          setIsServerError(false);
          navigate("/login");
        } else {
          navigate("/register");
        }
      } catch (error) {
        console.log(error.response.data);
      }
    };

  
    const contextData = {
      registerEmployee,
      user,
      isServerError,
    };
  
    return (
      <EmployeeContext.Provider value={contextData}>{children}</EmployeeContext.Provider>
    );
  };