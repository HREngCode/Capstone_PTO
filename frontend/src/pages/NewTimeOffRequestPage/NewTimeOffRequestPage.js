//General Imports
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

//Component Imports
import Navbar from "../../components/NavBar/NavBar";

// Context Imports
import { EmployeeInfoContext } from '../../context/EmployeeInfoContext';

//Hooks Imports
import useAuth from '../../hooks/useAuth';

const NewTimeOffRequestPage = (props) => {
    // setting up hooks a good place to start
    const [user, token] = useAuth ()
    const navigate = useNavigate ()
    const [approved, setApproved] = useState("False")
    // const {employee, setEmployee} = useContext(EmployeeInfoContext);
    const [requestId, setRequestId] = useState(null)

    const [formValues, setFormValues] = useState({
        employee_id: props.employeeData.id,
        date_requested: '',
        hours_requested: '',
        approved: approved,    
    });

    const handleRequestSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://127.0.0.1:8000/api/pto_requests/new/`, formValues, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        .then(response => {
        setRequestId(response.data.id);
        // await handleUpdateBalance(updatedPtoBalance);  
        const commentValues = {
            employee: props.employeeData.id,
            pto_request: response.data.id,
            text: '', 
        };
        console.log(commentValues)
        return axios.post('http://127.0.0.1:8000/api/comments/changes/', commentValues);
        // props.getAllComments()
        })
        .then(response => {
            //handle success
            console.log(response);
        })
        .catch(error => {
            //handle error
            console.error(error);
        });
    };

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
        };

    return ( 
        <div><Navbar />
        <div>{props.employeeData? 
            (<div className='request-table'>
                <form onSubmit={handleRequestSubmit}>
                <div className='newEntry'>
                <label><b>Employee Number: </b></label>
                {props.employeeData.employee_number}
                </div>
                <div className='newEntry'>
                <label><b>Employee Name: </b></label>
                {props.employeeData.employee_first_name + " " + props.employeeData.employee_last_name}
                </div>
                <div className='newEntry'>
                <label><b>Department:</b> </label>
                {props.employeeData.department}
                </div>
                <div className='newEntry'>
                <label><b>Hire Date: </b></label>
                {props.employeeData.hire_date}
                </div>
                <div className='newEntry'>
                <label><b>PTO Balance:</b> </label>
                {props.employeeData.pto_balance}
                </div>
                <div className='newEntry'>
                <label><b>Supervisor Name:</b></label>
                {props.employeeData.supervisor_number}
                </div>
                <div className='newEntry'>
                <label><b>Date Requested Off: </b></label>
                <input type="date" name="date_requested" value={formValues.date_requested} onChange={handleChange}/>
                </div>
                <div className='newEntry'>
                <label><b>Hours Requested: </b></label>
                <input type="number" name="hours_requested" value={formValues.hours_requested} onChange={handleChange}/>
                </div>                        
                <div className='newEntry'>
                <label><b> Approved: </b></label>
                <input type="boolean" name="approved" value={formValues.approved} onChange={handleChange}/>
                </div>
                <div className='newEntry'>
                <label><b>Comments: </b></label>
                <input type="text" name="text" value={formValues.text} onChange={handleChange}/>
                </div>
                <div className='submit-new-request'>
                    <button type='submit'>Submit</button>
                    {/* <button onClick={handleCommentSubmit}>Submit Comment</button> */}
                </div>
                </form>
            </div>):(<div>NO DATA AVAILABLE</div>)}
        </div>
        </div>
    );
}
export default NewTimeOffRequestPage;