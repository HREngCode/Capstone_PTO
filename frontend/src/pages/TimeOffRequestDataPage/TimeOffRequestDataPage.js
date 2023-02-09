//General Imports
import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";
import DisplayRequestData from '../../components/DisplayRequestData/DisplayRequestData';

const TimeOffRequestDataPage = () => {

    const [ user,token] = useAuth ()
    const [requestInfo, setRequestInfo] = useState();

    useEffect(() => {
        fetchRequestInfo();
        console.log("Time Off Request Data Page", requestInfo);   
    }, []);  
    
    async function fetchRequestInfo(){
        const response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/53/`, {
            headers: {
            Authorization: "Bearer " + token,
            },
        }
        )
        setRequestInfo(response.data); 
    };

    return (
        <div><Navbar />
        <div>
            {/* Conditional Rendering for RequestInfo */}
            {requestInfo? 
            (<div>
            <h1>Time Off Request Page !</h1>
            <p>Id: {requestInfo.id}</p>
            <p>First Name: {requestInfo.employee.employee_first_name}</p>
            <p>Employee Number: {requestInfo.employee.employee_number}</p>
            <p>Supervisor ID: {requestInfo.employee.supervisor_number}</p> 
            {/* <p>Admin: {admin}</p>  */}
            </div>) : (<div>No Data Exists For This Employee</div>) }
        </div>
        </div> 
     );
}
 
export default TimeOffRequestDataPage;