//3. Wrap App
//4. Import and use (destructure) any context you feel necessary
// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useContext, useEffect, useState } from 'react';
import useAuth from "./hooks/useAuth";
import axios from "axios";

// Pages Imports
// import SupervisorPage from "./pages/SupervisorPage/SupervisorPage";
// import NewTimeOffRequestPage from "./pages/NewTimeOffRequestPage/NewTimeOffRequestPage";
// import TimeOffRequestDataPage from "./pages/TimeOffRequestDataPage/TimeOffRequestDataPage";
// import TimeOffRequestDataSupPage from "./pages/TimeOffRequestDataSupPage/TimeOffRequestDataSupPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import EmployeeProfilePage from "./pages/EmployeeProfilePage/EmployeeProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RegisterEePage from "./pages/RegisterEePage/RegisterEePage";
// import AdminPage from "./pages/AdminPage/AdminPage";

// Component Imports
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Context Imports
import { EmployeeInfoContext } from "./context/EmployeeInfoContext";
// import { SupervisorInfoContext } from "./context/SupervisorInfoContext";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [user, token] = useAuth();
  const [employeeData, setEmployeeData] = useState('');
  const {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext);
  const {employeeId, setEmployeeId} = useContext(EmployeeInfoContext);
  // const {supervisor, setSupervisor} = useContext(SupervisorInfoContext);
  // const [employeeSupervisor, setEmployeeSupervisor] = useState('');
  // const [ptoRequestData, setPtoRequestData] = useState('');
  
  useEffect(() => {
    if(user)
    {
    const fetchEmployeeInfo = async () => {
      try {
      //Gets employee information from the user id
      let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
        headers: {
        Authorization: "Bearer " + token,
        },
      });
      console.log(response.data.id)
      console.log(user.id)
      console.log("Home Page Loaded",response.data);
      setEmployeeData(response.data);
      setEmployeeInfo(response.data);
      setEmployeeId(response.data.id);
      } catch (error) {
        console.log(error.message);
      }    
    };
    fetchEmployeeInfo();
    }


    // const fetchPtoRequestInfo = async () => {
    //   try {
    //   let response3 = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
    //     headers: {
    //     Authorization: "Bearer " + token,
    //     },
    //   });
    //   setPtoRequestData(response3.data);
    //   } catch (error) {
    //     console.log(error.message);
    //   }    
    // };
    // fetchPtoRequestInfo();

  }, [employeeId, user, token]);

  return (
      <div>
        <Header />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/registerEe" element={<RegisterEePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <HomePage/>
                  {/* {employee ? <HomePage /> : <Route path="/registerEe" element={<RegisterEePage />} /> } */}
                </PrivateRoute>
              }
            />
            {/* <Route path="/newtimeoffrequest" element={<NewTimeOffRequestPage employeeData={employeeData}/>} /> */}
            {/*Employee Profile & Time Off Request Page using a Param */}
            {/* <Route path="/employeeprofile/:employeeId" element={<EmployeeProfilePage employeeData={employeeData}/>} />
            <Route path="/timeoffrequest/:ptoRequestId" element={<TimeOffRequestDataPage employeeData={employeeData}/>} />
            <Route path="/timeoffrequestsup/:ptoRequestId" element={<TimeOffRequestDataSupPage employeeData={employeeData}/>} />
            <Route path="/supervisor" element={<SupervisorPage employeeData={employeeData}/>} />
            <Route path="/admin" element={<AdminPage employeeData={employeeData}/>} /> */}
          </Routes>
        <Footer />
      </div>
  ); 
}

export default App;
