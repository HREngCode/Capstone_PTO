// General Imports
import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

// Component Imports
import Navbar from "../../components/NavBar/NavBar";
import DisplayRequests from "../../components/DisplayRequests/DisplayRequests";
import DemoApp from "../../components/FullCalendar/DemoApp";

// Context Imports
import {EmployeeInfoContext} from "../../context/EmployeeInfoContext";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const {employeeId, setEmployeeId} = useContext(EmployeeInfoContext);
  const {employeeName, setEmployeeName} = useContext(EmployeeInfoContext);
  const {employeeIsSupervisor} = useContext(EmployeeInfoContext);
  const {employeeIsAdmin} = useContext(EmployeeInfoContext);
  const [ptoRequests, setPtoRequests] = useState([]);

  useEffect(() => {

    const fetchPtoRequestByEmployee = async () => {//add async before parenthensis ahead of the arrow function
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee/${employeeId}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPtoRequests(response.data);
      } catch (error) {
        console.log(error.response);
      }    
    }; console.log("Home Page Requests", ptoRequests)
    fetchPtoRequestByEmployee();

  }, [token, employeeId]);//optional array to make sure this only runs once

  const handleClick = (ptoRequest) => {
    navigate(``)
  }

  return (
    <div><Navbar />
      <div className="container">
        <h1>Home Page for {employeeName}!</h1>
        <div>
          {/* Javascript Map Function can generate multiple components from an array of data */}
          {ptoRequests &&
          ptoRequests.map((ptoRequest, index) => (
          <DisplayRequests key={index} request={ptoRequest} />
          ))}
        </div>
        <div>
            <DemoApp />
        </div>
      </div>
    </div>

  );
};

export default HomePage;
