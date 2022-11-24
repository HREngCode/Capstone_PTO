import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Navbar from "../../components/NavBar/NavBar";
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [employeeName, setEmployeeName] = useState();
  const [employeeId, setEmployeeId] = useState();
  const [ptoRequests, setPtoRequests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchEmployeeInfo = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setEmployeeName(response.data.employee_name); 
        setEmployeeId(response.data.id); 
      } catch (error) {
        console.log(error.response.data);
      }    
    };
    fetchEmployeeInfo();

    const fetchPtoRequestByEmployee = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee/${employeeId}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPtoRequests(response.data); 
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }    
    };
    fetchPtoRequestByEmployee();

    // const navigateToNewPtoRequest = () => {
    //   // 👇️ navigate to /new pto request
    //   navigate('/newtimeoffrequest');
    //     return ( 
    //       <div>
    //         <button onClick={navigateToNewPtoRequest}>New Time Off Request</button>
    //       </div>
    //  );
    // }
    // navigateToNewPtoRequest();


  }, [token, user, employeeId]);



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
        {/* <div>
          <button onClick={navigate('/newtimeoffrequest')}>New Time Off Request</button>
        </div> */}
      </div>
    </div>

  );
};

export default HomePage;
