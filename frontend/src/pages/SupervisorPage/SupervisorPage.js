//General Imports
import React, { useEffect, useState, useContext } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";
import DemoApp from "../../components/FullCalendar/DemoApp";
import DisplayRequests from "../../components/DisplayRequests/DisplayRequests";
import DisplayEmployeeBySuper from "../../components/DisplayEmployeeBySuper/DisplayEmployeeBySuper";

//Context Imports
import { EmployeeInfoContext } from "../../context/EmployeeInfoContext";
import { SupervisorInfoContext } from "../../context/SupervisorInfoContext";
import { RequestInfoContext } from "../../context/RequestInfoContext";


const SupervisorPage = (props) => {
    
    const [ptoRequests, setPtoRequests] = useState(RequestInfoContext);
    const [user, token] = useAuth ()
    const {employeeIsSupervisor, setEmployeeIsSupervisor} = useContext(EmployeeInfoContext);
    const [employees, setEmployees] = useState([]);
    const [reportNumber, setReportNumber] = useState('')
    const {employeeNumber, setEmployeeNumber} = useContext(EmployeeInfoContext);
    const {employeeSupervisorNumber, setEmployeeSupervisorNumber} = useContext(EmployeeInfoContext);
    const {supervisorInfo, setSupervisorInfo} = useContext(SupervisorInfoContext);
    const {supervisorName, setSupervisorName} = useContext(SupervisorInfoContext);
    const {supervisorNumber, setSupervisorNumber} = useContext(SupervisorInfoContext);

    useEffect(() => { 
        const fetchEmployeesBySupervisor = async () => {
            try {
            //calls current employee number. If it's a supervisor, the value returned will be the employees that 
            //report to this number
            let response = await axios.get(`http://127.0.0.1:8000/api/employees/supervisor/${employeeSupervisorNumber}/`, { 
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            // let response2 = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee_number/${response.data.}/`, {
            //     headers: {
            //     Authorization: "Bearer " + token,
            //     },
            // });
            setEmployees(response.data);
            // setPtoRequests(response2.data) 
            console.log(response.data)
            // console.log(response2.data)
            } catch (error) {
            console.log(error.response);
            }    
        };
        fetchEmployeesBySupervisor() ;


    }, [token, user, employeeNumber, props]); 

    return ( 
        <div><Navbar />
            <div>
                <div>{employeeIsSupervisor? 
                    (<div>
                        <h1>Supervisor Page!</h1>
                        {employees &&
                        employees.map((employee, index) => (
                        <DisplayEmployeeBySuper key={index} employee={employee} />
                    ))}
                        <div>
                            <DemoApp />
                        </div>
                    </div>) : (<div>You Do Not Have Supervisor Access</div>) }
                </div>
            {/* <div>
                {ptoRequests &&
                ptoRequests.map((ptoRequest, index) => (
                <DisplayRequests key={index} request={ptoRequest} />
                ))}
            </div> */}
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