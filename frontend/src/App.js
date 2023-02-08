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
import TimeOffRequestDataPage from "./pages/TimeOffRequestDataPage/TimeOffRequestDataPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import EmployeeProfilePage from "./pages/EmployeeProfilePage/EmployeeProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RegisterEePage from "./pages/RegisterEePage/RegisterEePage";
import AdminPage from "./pages/AdminPage/AdminPage";

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
  const {employeeSupervisorNumber, setEmployeeSupervisorNumber} = useContext(EmployeeInfoContext);
  const {employeeName, setEmployeeName} = useContext(EmployeeInfoContext);
  const {employeeId, setEmployeeId} = useContext(EmployeeInfoContext);
  const {employeeIsSupervisor, setEmployeeIsSupervisor} = useContext(EmployeeInfoContext);
  const {employeeIsAdmin, setEmployeeIsAdmin} = useContext(EmployeeInfoContext);
  const {employeeNumber, setEmployeeNumber} = useContext(EmployeeInfoContext);
  const {employeeSupervisorInfo, setEmployeeSupervisorInfo} = useContext(SupervisorInfoContext);
  // const {supervisorName, setSupervisorName} = useContext(SupervisorInfoContext);
  // const {supervisorNumber, setSupervisorNumber} = useContext(SupervisorInfoContext);
  
  useEffect(() => {
    // const fetchEmployeeInfo = async () => {
    //   // try {
    //   let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
    //       headers: {
    //       Authorization: "Bearer " + token,
    //       },
    //   });
    //     let response2 = await axios.get(`http://127.0.0.1:8000/api/employees/employee_number/${response.data.supervisor_number}/`, {
    //       headers: {
    //       Authorization: "Bearer " + token,
    //       }, 
    //       }
    //   );
    //   console.log("Home Page Loaded",response.data);
    //   console.log("Supervisor Info Loaded",response2.data);
    //   setEmployeeInfo(response.data);
    //   setEmployeeSupervisorNumber(response.data.supervisor_number);
    //   setEmployeeId(response.data.id);
    //   setEmployeeName(response.data.employee_first_name); 
    //   setEmployeeNumber(response.data.employee_number);
    //   setEmployeeIsSupervisor(response.data.isSupervisor);
    //   setEmployeeIsAdmin(response.data.isAdmin);
    //   // setUserName(response.data.user_name);
    //   // setEmployeeUserId(response.data.user.id); 
    //   // setLastName(response.data.employee_last_name);
    //   setEmployeeSupervisorInfo(response2.data);
    //   // setSupervisorName(response2.data.employee_first_name);
    //   // setSupervisorNumber(response2.data.employee_number);
    //   } catch (error) {
    //     console.log(error.message);
    //   }    
    // };
    // fetchEmployeeInfo();
  }, [token, user]);

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
        <Route path="/employeeprofile" element={<EmployeeProfilePage />} />
        <Route path="/timeoffrequest" element={<TimeOffRequestDataPage />} />
        <Route path="/supervisor" element={<SupervisorPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

export default App;
