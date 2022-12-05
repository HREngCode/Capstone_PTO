//create context to be imported
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";


const EmployeeContext = createContext();

export default EmployeeContext;

function setEmployeeObject(employee) {
    if (!employee) {
      return null;
    }
    return {
      username: employee.username,
      id: employee.user_id,
      first_name: employee.first_name,
    };
  }
  
  export const EmployeeProvider = ({ children }) => {
    const BASE_URL = "http://127.0.0.1:8000/api/auth";
    const userToken = JSON.parse(localStorage.getItem("token"));
    const decodedUser = userToken ? jwtDecode(userToken) : null;
    const [token] = useState(userToken);
    const [user] = useState(setEmployeeObject(decodedUser));
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
      user,
      token,
      registerEmployee,
      isServerError,
    };
  
    return (
      <EmployeeContext.Provider value={contextData}>{children}</EmployeeContext.Provider>
    );
  };