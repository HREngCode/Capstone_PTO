//3. Wrap App
//4. Import and use (destructure) any context you feel necessary
// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useContext, useEffect } from 'react';
import useAuth from "./hooks/useAuth";
import axios from "axios";

// Pages Imports
import SupervisorPage from "./pages/SupervisorPage/SupervisorPage";
import NewTimeOffRequestPage from "./pages/NewTimeOffRequestPage/NewTimeOffRequestPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RegisterEePage from "./pages/RegisterEePage/RegisterEePage";

// Component Imports
// import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Context Imports
import { EmployeeInfoContext } from "./context/EmployeeInfoContext";
import { SupervisorInfoContext } from "./context/SupervisorInfoContext";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
// import SupervisorValid from "./components/SupervisorValid/SupervisorValid";

function App() {
  const [user, token] = useAuth();
  const {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext);
  const {employeeName, setEmployeeName} = useContext(EmployeeInfoContext);
  const {employeeId, setEmployeeId} = useContext(EmployeeInfoContext);
  const {employeeIsSupervisor, setEmployeeIsSupervisor} = useContext(EmployeeInfoContext);
  const {employeeNumber, setEmployeeNumber} = useContext(EmployeeInfoContext);
  const {supervisorInfo, setSupervisorInfo} = useContext(SupervisorInfoContext);
  const {supervisorName, setSupervisorName} = useContext(SupervisorInfoContext);
  const {supervisorNumber, setSupervisorNumber} = useContext(SupervisorInfoContext);
  
  useEffect(() => {
    const fetchEmployeeInfo = async () => {
      try {
      let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
          headers: {
          Authorization: "Bearer " + token,
          },
      })
          let response2 = await axios.get(`http://127.0.0.1:8000/api/employees/employee_number/${response.data.supervisor_number}/`, {
          headers: {
          Authorization: "Bearer " + token,
          }, 
          }
      );console.log("Home Page Loaded",response.data)
      setEmployeeInfo(response.data);
      setEmployeeId(response.data.id)
      setEmployeeName(response.data.employee_first_name); 
      setEmployeeNumber(response.data.employee_number);
      setEmployeeIsSupervisor(response.data.isSupervisor);
      // setUserName(response.data.user_name);
      // setEmployeeUserId(response.data.user.id); 
      // setFirstName(response.data.employee_first_name);
      // setLastName(response.data.employee_last_name);
      setSupervisorInfo(response2.data)
      setSupervisorName(response2.data.employee_first_name)
      setSupervisorNumber(response2.data.employee_number)
      } catch (error) {
        console.log(error.message);
      }    
    };
    fetchEmployeeInfo();
  }, [token, user]);

  console.log(employeeIsSupervisor);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              {/* {employee ? <HomePage /> : <Route path="/registerEe" element={<RegisterEePage />} /> } */}
            </PrivateRoute>
          }
        />
        <Route path="/registerEe" element={<RegisterEePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/newtimeoffrequest" element={<NewTimeOffRequestPage />} />
        <Route path="/supervisor" element={<SupervisorPage />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;
