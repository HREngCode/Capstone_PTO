// General Imports
import React, { useContext, useState } from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom"

// Context Imports
import { RequestInfoContext } from '../../context/RequestInfoContext';
import { EmployeeInfoContext } from '../../context/EmployeeInfoContext';
import { SupervisorInfoContext } from '../../context/SupervisorInfoContext';

// Component Imports
import AddComment from '../../components/AddComment/AddComment';

//Hooks Imports
import useAuth from '../../hooks/useAuth';

const AddRequest = (props) => {

    const [user, token] = useAuth ()
    const navigate = useNavigate ()
    const {employee, setEmployee} = useContext(EmployeeInfoContext);
    const {supervisor, setSupervisor} = useContext(SupervisorInfoContext);
    const {request, setRequest} = useContext(RequestInfoContext);
    // const [supervisorName, setSupervisorName] = useState('')
    const [dateRequested, setDateRequested] = useState('')
    const [hoursRequested, setHoursRequested] = useState('')
    const [approved, setApproved] = useState('')
    const [balance, setBalance] = useState(0)


    const addTimeOffRequest = async (newTimeOffRequest) => {
        try 
        {
            let response = await axios.post('http://127.0.0.1:8000/api/pto_requests/new/', newTimeOffRequest, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }); 
            setRequest(response.data)
            navigate("/");
            await handleUpdateBalance(updatedPtoBalance);
        } 
        catch (error) 
        {
            console.log(error.message)
        }
    } 

    function handleSubmit(event){
        event.preventDefault();
        let newTimeOffRequest = {
            employee_id: employee.id,
            date_requested: dateRequested,
            hours_requested: hoursRequested,
            approved: approved,        
        };
        addTimeOffRequest(newTimeOffRequest)
        }

    const handleUpdateBalance = async (updatedPtoBalance) => {
       await axios.patch(`http://127.0.0.1:8000/api/employees/pto_balance/${employee.id}/`, updatedPtoBalance)
      } 
      
    let updateBalance = balance - hoursRequested
    const updatedPtoBalance = {
        pto_balance: updateBalance,
        };

    return (
        <div>{employee? 
            (<div className='request-table'>
                <form onSubmit={handleSubmit}>
                    <div className='newEntry'>
                    <label><b>Employee Number: </b></label>
                    {employee.employee_number}
                    </div>
                    <div className='newEntry'>
                    <label><b>Employee Name: </b></label>
                    {employee.employee_first_name + " " + employee.employee_last_name}
                    </div>
                    <div className='newEntry'>
                    <label><b>Department:</b> </label>
                    {employee.department}
                    </div>
                    <div className='newEntry'>
                    <label><b>Hire Date: </b></label>
                    {employee.hire_date}
                    </div>
                    <div className='newEntry'>
                    <label><b>PTO Balance:</b> </label>
                    {employee.pto_balance}
                    </div>
                    <div className='newEntry'>
                    <label><b>Supervisor Name:</b></label>
                    {employee.supervisor_number}
                    </div>
                    <div className='newEntry'>
                    <label><b>Date Requested Off: </b></label>
                    <input type="date" value={dateRequested} onChange={(event) => setDateRequested(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label><b>Hours Requested: </b></label>
                    <input type="number" value={hoursRequested} onChange={(event) => setHoursRequested(event.target.value)}/>
                    </div>
                    <div className='submit-new-request'>
                    <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>):(<div>NO DATA AVAILABLE</div>)}
        </div>

    );
    }  
    export default AddRequest;