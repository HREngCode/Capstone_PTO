import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Navbar from "../../components/NavBar/NavBar";
import { EmployeeInfoContext } from "../../context/EmployeeInfoContext";
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const {employeeId, setEmployeeId} = useContext(EmployeeInfoContext);
  const {employeeName, setEmployeeName} = useContext(EmployeeInfoContext);
  const {employeeIsSupervisor} = useContext(EmployeeInfoContext);
  const [ptoRequests, setPtoRequests] = useState([]);
  const {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext);
  const [employeeUserId, setEmployeeUserId] = useState();
  const [userName, setUserName] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const navigate = useNavigate();

  useEffect(() => {

   
    // props.fetchEmployeeInfo();
    // setFirstName(employeedetails.employee_first_name)
    // console.log(firstName);

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
    };
    fetchPtoRequestByEmployee();

  }, [token, employeeId]);//optional array to make sure this only runs once

  const navigateToNewPtoRequest = () => {
    // 👇️ navigate to /new pto request
          navigate('/newtimeoffrequest');
  };

//   const goToSupervisorPage = () => {

//     if(employeeIsSupervisor){
//         navigate("/supervisor")
//     }
//     else{
//         // <Alert>You Do Not Have Access To This Screen</Alert>
//         navigate("/")
//     }
//     return ( 
//         console.log(employeeIsSupervisor)
//      );
// }

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
        {/* <div>
          <button onClick={goToSupervisorPage}>Supervisor</button>
        </div> */}
      </div>
    </div>

  );
};

export default HomePage;
