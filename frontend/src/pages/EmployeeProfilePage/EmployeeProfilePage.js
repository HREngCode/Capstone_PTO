//General Imports
import React, { useState, useEffect, useContext } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";
import DisplayEmployeeInfo from '../../components/DisplayEmployeeInfo/DisplayEmployeeInfo';
// import { EmployeeInfoContext } from '../../context/EmployeeInfoContext';

const EmployeeProfilePage = () => {
    // setting up hooks a good place to start
    const [user, token] = useAuth ()
    const [employeeInfo, setEmployeeInfo] = useState();
    const [employeeName, setEmployeeName] = useState()
    const [employeeId, setEmployeeId] = useState()
    const [employeeSupervisorNumber, setEmployeeSupervisorNumber] = useState()
    const [employeeNumber, setEmployeeNumber] = useState()
    const [employeeIsSupervisor, setEmployeeIsSupervisor] = useState()
    const [employeeIsAdmin, setEmployeeIsAdmin] = useState()

    
    useEffect(() => {
        fetchEmployeeInfo();
    }, []);  
    console.log("EE Profile Page", employeeInfo)   
    
    async function fetchEmployeeInfo(){
        const response = await axios.get(`http://127.0.0.1:8000/api/employees/employee_number/1001/`, {
            headers: {
            Authorization: "Bearer " + token,
            },
        }
        )
        setEmployeeInfo(response.data); 
        setEmployeeId(response.data.id);
        setEmployeeName(response.data.employee_first_name);
        setEmployeeNumber(response.data.employee_number);
        setEmployeeSupervisorNumber(response.data.supervisor_number)        
    };
    
    return (
        <div><Navbar />
        <h1>This is the Employee Profile Page for !</h1>
        <div>
            <p>Id: {employeeId}</p>
            <p>First Name: {employeeName}</p>
            <p>Employee Number: {employeeNumber}</p>
            <p>Supervisor: {employeeSupervisorNumber}</p> 
            {/* <p>Admin: {admin}</p>  */}
        </div>
        </div> 
     );
}
 
export default EmployeeProfilePage;