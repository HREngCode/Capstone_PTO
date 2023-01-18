//3. Wrap App
//4. Import and use (destructure) any context you feel necessary
// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useContext } from 'react';
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

function App() {
  const [user, token] = useAuth();
  const {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext);
  // const {supervisorInfo, setSupervisorInfo} = useContext(SupervisorInfoContext)
  
  const fetchEmployeeInfo = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
        headers: {
          Authorization: "Bearer " + token,
        }, 
      });console.log("Home Page Loaded",response.data)
      setEmployeeInfo(response.data)
      // setEmployeeName(response.data.employee_first_name); 
      // setEmployeeId(response.data.id);
      // setUserName(response.data.user_name);
      // setEmployeeUserId(response.data.user.id); 
      // setFirstName(response.data.employee_first_name);
      // setLastName(response.data.employee_last_name);
    } catch (error) {
      console.log(error.message);
    }    
  };
  console.log(employeeInfo)

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage fetchEmployeeInfo={fetchEmployeeInfo}/>
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
