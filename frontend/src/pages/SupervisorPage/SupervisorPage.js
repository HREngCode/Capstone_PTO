import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from "../../components/NavBar/NavBar";
import useAuth from '../../hooks/useAuth';


const SupervisorPage = () => {

    const [user, token] = useAuth ()
    const [employeeName, setEmployeeName] = useState();
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [department, setDepartment] = useState('')
    const [dateRequested, setDateRequested] = useState('')
    const [hoursRequested, setHoursRequested] = useState('')
    const [ptoBalance, setPtoBalance] = useState('')
    const [approved, setApproved] = useState('')

    useEffect(() => {
        const fetchRequestInfo = async () => {
            try {
            let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/supervisor?supervisor=2`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            setEmployeeNumber(response.data.employee_number);             
            setEmployeeName(response.data.employee_name); 
            setDepartment(response.data.department); 
            setDateRequested(response.data.date_requested);
            setHoursRequested(response.data.hours_requested);
            setPtoBalance(response.data.pto_balance); 
            setApproved("No"); 
            } catch (error) {
            console.log(error.response.data);
            }    
        };
        fetchRequestInfo();
    }, [token, user]);    

    return ( 
        <div><Navbar />
            <div>
            <div className='newEntry'>
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
                </div>
            </div>
        </div>
     );
}
 
export default SupervisorPage;