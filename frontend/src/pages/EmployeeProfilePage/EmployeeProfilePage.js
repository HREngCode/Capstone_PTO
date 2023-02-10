//General Imports
import React, { useState, useEffect, useContext } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";

const EmployeeProfilePage = () => {
    // setting up hooks a good place to start
    const [user, token] = useAuth ()
    const [employeeInfo, setEmployeeInfo] = useState();

    
    useEffect(() => {
        fetchEmployeeInfo();
        //set up console.log in side of function or useEffect
        console.log("EE Profile Page", employeeInfo)  
    }, []);  
 
    
    async function fetchEmployeeInfo(){
        const response = await axios.get(`http://127.0.0.1:8000/api/employees/employee_number/1001/`, {
            headers: {
            Authorization: "Bearer " + token,
            },
        }
        )
        setEmployeeInfo(response.data);    
    };
    
    return (
        <div><Navbar />
        <div>{employeeInfo? 
            (<div>
            <h1>This is the Employee Profile Page for  {employeeInfo.employee_first_name} !</h1>
            <p>Id: {employeeInfo.id}</p>
            <p>First Name: {employeeInfo.employee_first_name}</p>
            <p>Employee Number: {employeeInfo.employee_number}</p>
            <p>Supervisor ID: {employeeInfo.supervisor_number}</p> 
            {/* <p>Admin: {admin}</p>  */}
            </div>) : (<div>No Data Exists For This Employee</div>) }
        </div>
        </div> 
     );
}
 
export default EmployeeProfilePage;