// General Imports
import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {useNavigate, Link } from 'react-router-dom';

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
  const [ptoRequests, setPtoRequests] = useState('');
  const {employeeId, setEmployeeId} = useContext(EmployeeInfoContext);
  const {employeeName, setEmployeeName} = useContext(EmployeeInfoContext);
  const {employeeIsSupervisor} = useContext(EmployeeInfoContext);
  const {employeeIsAdmin} = useContext(EmployeeInfoContext);

  useEffect(() => {

    const fetchPtoRequestByEmployee = async () => {//add async before parenthensis ahead of the arrow function
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee/${employeeId}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPtoRequests(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response);
      }    
    }; 
    fetchPtoRequestByEmployee();

  }, [token, employeeId]);//optional array to make sure this only runs once

  const handleClick = (ptoRequest) => {
    navigate(`/timeoffrequest/${ptoRequest.id}`);
  }

  return (
    <div><Navbar />
      <div className="container">
        <h1>Home Page for {employeeName}!</h1>
        <div>
          {/* Javascript Map Function can generate multiple components from an array of data */}
          {ptoRequests &&
          ptoRequests.map((ptoRequest) => (
            <p key={ptoRequest.id}>
              {ptoRequest.id}
              <button onClick={() => handleClick(ptoRequest)}>Detail</button>
            {/* <Link to={`/timeoffrequest/${ptoRequest.id}`} >{ptoRequest.id}</Link> */}
            </p>
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
