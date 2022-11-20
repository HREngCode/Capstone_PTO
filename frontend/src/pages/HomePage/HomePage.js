import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [employees, setEmployees] = useState([]);
  const [employeeName, setEmployeeName] = useState();




  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/employees/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setEmployees(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchEmployees();
    
    const fetchEmployeeName = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setEmployeeName(response.data.employee_name); 
      } catch (error) {
        console.log(error.response.data);
      }    
    };
    fetchEmployeeName();
  }, [token, user]);

  // employees.map((employee) => {
  //   if (employee.user===user.id) {
  //     return true;
  //   }          
  // })

  // let foundNames = employees.filter((employee) => {
  //   if (employee.user===user.id) {
  //     return true;
  //   }
  // });
  // return foundNames;  
  // }

  return (
    <div className="container">
      <h1>Home Page for {employeeName}!</h1>
      <div>
        {employees &&
        employees.map((employee) => (
          <p key={employee.id}>
          {employee.user} {employee.employee_number} {employee.employee_name} {employee.department}
          </p>
        ))}
      </div>


    </div>
  );
};

export default HomePage;
