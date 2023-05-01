// General Imports
import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "../../App.css";
import axios from "axios";
import {useNavigate } from 'react-router-dom';

// Component Imports
import Navbar from "../../components/NavBar/NavBar";
import FullCal from "../../components/FullCalendar/FullCal"

// Context Imports
import {EmployeeInfoContext} from "../../context/EmployeeInfoContext";
import { formatDate } from "@fullcalendar/core";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [ptoRequests, setPtoRequests] = useState([]);
  const [employee, setEmployee] = useState({});
  const {employeeId, setEmployeeId} = useContext(EmployeeInfoContext);
  const [empty, setEmpty] = useState();

  console.log(employeeId)

  useEffect(() => {
      const fetchPtoRequestByEmployee = async () => {//add async before parenthensis ahead of the arrow function
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee/${employeeId}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
          });
          setEmployee(props.employeeData);
          if (response.data == "null" || response.data == ""){
            setEmpty(true)
          }
          else {
            setEmpty(false)
            setPtoRequests(response.data);
            console.log(ptoRequests);
          }
          } catch (error) {
            console.log(error.response);
          }    
      }; 
      fetchPtoRequestByEmployee(); 
  }, [employeeId, user, token]);

  

  const handleClick = (ptoRequest) => {
    navigate(`/timeoffrequest/${ptoRequest.id}`);
  }

  return (
    <div><Navbar />
      <div className="body">
        <div className="column1">
          <div className="title-homepage">
            <h1>Home Page for {props.employeeData.employee_first_name + " " + props.employeeData.employee_last_name}!</h1>
            <div>
              <div className="calendar">
                    <FullCal ptoRequests= {ptoRequests} employee={employee} />
              </div>
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="act_req_title"><b><h3>Active Requests</h3></b></div>
          {empty?
        (<div>NO DATA AVAILABLE</div>):(<div>
          <div className="active_requests"> 
            {ptoRequests &&
            ptoRequests.map((ptoRequest) => (
            <div key={ptoRequest.id}>
              <ul><b>Date Requested:</b>{" " + formatDate(ptoRequest.date_requested)}</ul>
              <ul><b>Hours Requested:</b> {" " + ptoRequest.hours_requested}</ul>
              <div>{ptoRequest.approved?
              (<div>
                <ul><b>Approved:</b> {" Yes"}</ul>
              </div>) :(<div>                    
                <ul><b>Approved:</b> {" No"}</ul></div>)
            }</div>
              <button onClick={() => handleClick(ptoRequest)}>Detail</button>
            </div>
            ))}
          </div>
          </div>)}
          </div>
      </div>
    </div>
  );
};

export default HomePage;
