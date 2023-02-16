//General Imports
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

//Hooks Import
import useAuth from "../../hooks/useAuth";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";

const EmployeeProfilePage = () => {
    const [user, token] = useAuth ();
    const [employee, setEmployee] = useState();
    const [employeeName, setEmployeeName] = useState();
    const {employeeId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/employees/${employeeId}/`
                )
                setEmployee(response.data);
                    console.log(employee)
            } catch (error) {
                console.log(error)
            }
        }
        fetchEmployee()
    }, [])

    const handleUpdate = async(e) => {
        e.preventDefault();
        let data = {
            employee_last_name: "James"
        }
        const response2 = await axios.put("http://127.0.0.1:8000/api/employees/29/", data);
        console.log("response", response2)

    }
   

  return (
    <div>
        <Navbar />
        <h1>This is the Employee Profile Page</h1>
        <div>
            <button onClick={handleUpdate}>Update</button>
        </div>
    </div>


  ); 
};
 
export default EmployeeProfilePage;