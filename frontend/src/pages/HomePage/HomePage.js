import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Navbar from "../../components/NavBar/NavBar";
import { EmployeeInfoContext } from "../../context/EmployeeInfoContext";
import {useNavigate} from 'react-router-dom';

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [employeeName, setEmployeeName] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [ptoRequests, setPtoRequests] = useState([]);
  const {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext)
  const [employeeUserId, setEmployeeUserId] = useState();
  const [userName, setUserName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const navigate = useNavigate();

  useEffect(() => {

   
    props.fetchEmployeeInfo();

    const fetchPtoRequestByEmployee = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee/${employeeId}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPtoRequests(response.data);
        console.log(employeeId)
      } catch (error) {
        console.log(error.response);
      }    
    };
    fetchPtoRequestByEmployee();

  }, [token, user, employeeId]);

  const navigateToNewPtoRequest = () => {
    // 👇️ navigate to /new pto request
          navigate('/newtimeoffrequest');
  };


  return (
    <div><Navbar />
      <div className="container">
        <h1>Home Page for {employeeName}!</h1>
        <div>
          {ptoRequests &&
          ptoRequests.map((pto_request) => (
            <p key={pto_request.id}>
            {pto_request.id} {pto_request.hours_requested}
            </p>
          ))}
        </div>
        <div>
          <button onClick={navigateToNewPtoRequest}>New Time Off Request</button>
        </div>
      </div>
    </div>

  );
};

export default HomePage;
