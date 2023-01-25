import React, { useEffect, useState, useContext } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Navbar from "../../components/NavBar/NavBar";
import { EmployeeInfoContext } from "../../context/EmployeeInfoContext";

const SupervisorPage = () => {
    
    const [timeOffRequests, setTimeOffRequests] = useState('')
    const [user, token] = useAuth ()
    // const {employeeIsSupervisor, setEmployeeIsSupervisor} = useContext(EmployeeInfoContext);

    useEffect(() => {
        const fetchRequestInfo = async () => {
            try {
            let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/supervisor?supervisor=2`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            setTimeOffRequests(response.data); 
            console.log(response.data)
            } catch (error) {
            console.log(error.response.data);
            }    
        };
        fetchRequestInfo();
    }, [token, user]); 
    


    return ( 
        <div><Navbar />
            <div>
                Supervisor Page
            <div>
                {timeOffRequests &&
                timeOffRequests.map((time_off_request) => (
                    <p key={time_off_request.id}>
                    {time_off_request.employee_number} {time_off_request.employee_name} {time_off_request.date_requested} {time_off_request.hours_requested}
                    </p>
                ))}
            </div>
            {/* <div className='newEntry'>
                <label>Employee Number: </label>
                <input value={employeeNumber} onChange={(event) => setEmployeeNumber(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Employee Name: </label>
                <input value={employeeName} onChange={(event) => setEmployeeName(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Department: </label>
                <input value={department} onChange={(event) => setDepartment(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>PTO Balance: </label>
                <input type="number" value={ptoBalance} onChange={(event) => setPtoBalance(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Date Requested Off: </label>
                <input type="date" value={dateRequested} onChange={(event) => setDateRequested(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label>Hours Requested: </label>
                <input type="number" value={hoursRequested} onChange={(event) => setHoursRequested(event.target.value)}/>
                </div>
                <div className='newEntry'>
                <label> Approved: </label>
                <input type="boolean" value={approved} onChange={(event) => setApproved(event.target.value)}/>
                </div> */}
            </div>
        </div>
     );
}
 
export default SupervisorPage;