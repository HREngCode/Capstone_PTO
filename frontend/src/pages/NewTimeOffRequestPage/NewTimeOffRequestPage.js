import React, { useState, useEffect } from 'react';
import Navbar from "../../components/NavBar/NavBar";
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import {useNavigate} from "react-router-dom"

const NewTimeOffRequestPage = () => {
    const [user, token] = useAuth ()
    const navigate = useNavigate ()
    const [employeeName, setEmployeeName] = useState();
    const [employeeId, setEmployeeId] = useState();
    // setting up hooks a good place to start
    const [employee, setEmployee] = useState('')
    // const [employeeNumber, setEmployeeNumber] = useState('')
    // const [department, setDepartment] = useState('')
    // const [hireDate, setHireDate] = useState('')
    const [dateRequested, setDateRequested] = useState('')
    const [hoursRequested, setHoursRequested] = useState('')
    // const [ptoBalance, setPtoBalance] = useState('')
    // const [supervisor, setSupervisor] = useState('')
    // const [active, setActive] = useState('')

    useEffect(() => {
        const fetchEmployeeInfo = async () => {
            try {
            let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            setEmployeeName(response.data.employee_name); 
            setEmployeeId(response.data.id); 
            } catch (error) {
            console.log(error.response.data);
            }    
        };
        fetchEmployeeInfo();
    }, [token, user]);        

    async function AddTimeOffRequest(newTimeOffRequest){
        try 
        {
            let response = await axios.post('http://127.0.0.1:8000/api/pto_requests/changes/', newTimeOffRequest, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }) 
            navigate("/")
        console.log(response.data)} 
        catch (error) 
        {
            console.log(error.message)
        }
    }    

    function handleSubmit(event){
        event.preventDefault();
        let newTimeOffRequest = {
            employeeId: employeeId,
            // employee_number: employeeNumber,
            // department: department,
            // hire_date: hireDate,
            date_requested: dateRequested,
            hours_requested: hoursRequested,
            // pto_balance: ptoBalance,
            // supervisor: supervisor,
            // active: active,        
        };
        AddTimeOffRequest(newTimeOffRequest)
    } 

        return ( 
            <div><Navbar />
                <div>
                    <form onSubmit={handleSubmit}>
                    {/* <form> */}
                    
                        <div className='newEntry'>
                        <label>Employee Id: </label>
                        <input type="number" value={employeeId} onChange={(event) => setEmployee(event.target.value)}/>
                        </div>
                        <div className='newEntry'>
                        <label>Date Requested Off: </label>
                        <input type="date" value={dateRequested} onChange={(event) => setDateRequested(event.target.value)}/>
                        </div>
                        <div className='newEntry'>
                        <label>Hours Requested: </label>
                        <input type="number" value={hoursRequested} onChange={(event) => setHoursRequested(event.target.value)}/>
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