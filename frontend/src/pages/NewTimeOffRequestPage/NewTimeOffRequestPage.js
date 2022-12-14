import React, { useState, useEffect } from 'react';
import Navbar from "../../components/NavBar/NavBar";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import {useNavigate} from "react-router-dom"

const NewTimeOffRequestPage = () => {
    // setting up hooks a good place to start
    const [user, token] = useAuth ()
    const navigate = useNavigate ()
    const [employeeName, setEmployeeName] = useState();
    const [employeeId, setEmployeeId] = useState();
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [department, setDepartment] = useState('')
    const [hireDate, setHireDate] = useState('')
    const [dateRequested, setDateRequested] = useState('')
    const [hoursRequested, setHoursRequested] = useState('')
    const [ptoBalance, setPtoBalance] = useState('')
    const [supervisorNumber, setSupervisorNumber] = useState('')
    const [approved, setApproved] = useState('')

    useEffect(() => {
        const fetchEmployeeInfo = async () => {
            try {
            let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            console.log(response.data)
            setEmployeeId(response.data.id); 
            setEmployeeNumber(response.data.employee_number);             
            setEmployeeName(response.data.employee_first_name); 
            setDepartment(response.data.department); 
            setHireDate(response.data.hire_date); 
            setPtoBalance(response.data.pto_balance); 
            setSupervisorNumber(response.data.supervisor_number);
            setApproved("No"); 
            } catch (error) {
            console.log(error.response.data);
            }    
        };
        fetchEmployeeInfo();
        
        const fetchSupervisorInfo = async () => {
            try {
            let response = await axios.get(`http://127.0.0.1:8000/api/employees/employee_number?${supervisorNumber}/`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            console.log(response.data)
            // setEmployeeId(response.data.id); 
            // setEmployeeNumber(response.data.employee_number);             
            // setEmployeeName(response.data.employee_first_name); 
            // setDepartment(response.data.department); 
            // setHireDate(response.data.hire_date); 
            // setPtoBalance(response.data.pto_balance); 
            // setSupervisorNumber(response.data.supervisor_number);
            // setApproved("No"); 
            } catch (error) {
            console.log(error.response.data);
            }    
        };
        fetchSupervisorInfo();
        
    }, [token, user, employeeId]);        

    const addTimeOffRequest = async (newTimeOffRequest) => {
        try 
        {
            let response = await axios.post('http://127.0.0.1:8000/api/pto_requests/changes/', newTimeOffRequest, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }) 
            navigate("/")
        console.log(employeeId)} 
        catch (error) 
        {
            console.log(error.message)
        }
    }    

    function handleSubmit(event){
        event.preventDefault();
        let newTimeOffRequest = {
            employee_id: employeeId,
            date_requested: dateRequested,
            hours_requested: hoursRequested,
            approved: approved,        
        };
        addTimeOffRequest(newTimeOffRequest)
    } 

        return ( 
            <div><Navbar />
                <div>
                    <form onSubmit={handleSubmit}>
                    {/* <form> */}
                        {/* <div className='newEntry'>
                        <label>Employee Id: </label>
                        <input type="number" value={employeeId} onChange={(event) => setEmployeeId(event.target.value)}/>
                        </div> */}
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
                        <label>Hire Date: </label>
                        <input type="date" value={hireDate} onChange={(event) => setHireDate(event.target.value)}/>
                        </div>
                        <div className='newEntry'>
                        <label>PTO Balance: </label>
                        <input type="number" value={ptoBalance} onChange={(event) => setPtoBalance(event.target.value)}/>
                        </div>
                        <div className='newEntry'>
                        <label>Supervisor Number: </label>
                        <input value={supervisorNumber} onChange={(event) => setSupervisorNumber(event.target.value)}/>
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
                        <div>
                        <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
}
export default NewTimeOffRequestPage;