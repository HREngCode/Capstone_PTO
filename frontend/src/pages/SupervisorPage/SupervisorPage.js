import React, { useEffect, useState, useContext } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Navbar from "../../components/NavBar/NavBar";
import { EmployeeInfoContext } from "../../context/EmployeeInfoContext";
import { SupervisorInfoContext } from "../../context/SupervisorInfoContext";

const SupervisorPage = (props) => {
    
    const [timeOffRequests, setTimeOffRequests] = useState('')
    const [user, token] = useAuth ()
    // const {employeeIsSupervisor, setEmployeeIsSupervisor} = useContext(EmployeeInfoContext);
    const [employees, setEmployees] = useState([]);
    const [ reportNumber, setReportNumber] = useState('')
    const {employeeNumber, setEmployeeNumber} = useContext(EmployeeInfoContext);
    const {employeeSupervisorNumber, setEmployeeSupervisorNumber} = useContext(EmployeeInfoContext);
    const {supervisorInfo, setSupervisorInfo} = useContext(SupervisorInfoContext);
    const {supervisorName, setSupervisorName} = useContext(SupervisorInfoContext);
    const {supervisorNumber, setSupervisorNumber} = useContext(SupervisorInfoContext);

    useEffect(() => { 
        const fetchEmployeePtoRequestBySupervisor = async () => {
            try {
            //calls current employee number. If it's a supervisor, the value returned will be the employees that 
            //report to this number
            let response = await axios.get(`http://127.0.0.1:8000/api/employees/supervisor/${employeeNumber}/`, { 
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            let response2 = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee_number/1004/`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            setEmployees(response.data);
            setTimeOffRequests(response2.data) 
            console.log(response.data)
            console.log(response2.data)
            } catch (error) {
            console.log(error.response);
            }    
        };
        fetchEmployeePtoRequestBySupervisor() ;


    }, [token, user, props]); 

    return ( 
        <div><Navbar />
            <div>
                <h1>Supervisor Page!</h1>
                <div>
                {employees &&
                employees.map((employee) => (
                    <p key={employee.id}>
                    {employee.employee_first_name} {employee.employee_number}
                    </p>
                ))}
                </div>
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