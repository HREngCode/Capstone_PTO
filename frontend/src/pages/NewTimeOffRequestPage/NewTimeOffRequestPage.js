import React, { useState } from 'react';
import Navbar from "../../components/NavBar/NavBar";
import axios from 'axios'

const NewTimeOffRequestPage = () => {

async function AddPtoRequest(newPtoRequest){
    const response = await axios.post('http://127.0.0.1:8000/api/pto_requests/changes/', newPtoRequest);
    console.log(response.data)
    // props.getAllSongs()
}

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

function handleSubmit(event){
    event.preventDefault();
    let newPtoRequest = {
        employee: employee,
        // employee_number: employeeNumber,
        // department: department,
        // hire_date: hireDate,
        date_requested: dateRequested,
        hours_requested: hoursRequested,
        // pto_balance: ptoBalance,
        // supervisor: supervisor,
        // active: active,        
    };
    AddPtoRequest(newPtoRequest)
}

    return ( 
        <div><Navbar />
            <div>
                <form className='addData' onSubmit={handleSubmit}>
                    <div className='newEntry'>
                    <label>Employee: </label>
                    <input value={employee} onChange={(event) => setEmployee(event.target.value)}/>
                    </div>
                    {/* <div className='newEntry'>
                    <label>Employee Number: </label>
                    <input value={employeeNumber} onChange={(event) => setEmployeeNumber(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label>Department: </label>
                    <input value={department} onChange={(event) => setDepartment(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label>Hire Date: </label>
                    <input type="date" value={hireDate} onChange={(event) => setHireDate(event.target.value)}/>
                    </div> */}
                    <div className='newEntry'>
                    <label>Date Requested Off: </label>
                    <input type="date" value={dateRequested} onChange={(event) => setDateRequested(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label>Hours Requested: </label>
                    <input type="number" value={hoursRequested} onChange={(event) => setHoursRequested(event.target.value)}/>
                    </div>
                    {/* <div className='newEntry'>
                    <label>PTO Balance: </label>
                    <input type="number" value={ptoBalance} onChange={(event) => setPtoBalance(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label>Supervisor: </label>
                    <input value={supervisor} onChange={(event) => setSupervisor(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label>Active: </label>
                    <input type="boolean" value={active} onChange={(event) => setActive(event.target.value)}/>
                    </div> */}
                    <div className='addNewRequestButton' >
                    <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
     );
}
export default NewTimeOffRequestPage;