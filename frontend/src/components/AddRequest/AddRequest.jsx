// General Imports
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import {useNavigate} from "react-router-dom"

// Context Imports
import { RequestInfoContext } from '../../context/RequestInfoContext';
import { EmployeeInfoContext } from '../../context/EmployeeInfoContext';
import { SupervisorInfoContext } from '../../context/SupervisorInfoContext';

// Component Imports
// import AddComment from '../../components/AddComment/AddComment';

//Hooks Imports
import useAuth from '../../hooks/useAuth';

// const AddRequest = (props) => {

    // const [user, token] = useAuth ()
    // const navigate = useNavigate ()
    // const {employee, setEmployee} = useContext(EmployeeInfoContext);
    // const {supervisor, setSupervisor} = useContext(SupervisorInfoContext);
    // const [request, setRequest] = useState('')
    // const [requestId, setRequestId] = useState('')
    // const [dateRequested, setDateRequested] = useState('')
    // const [hoursRequested, setHoursRequested] = useState('')
    // const [comment, setComment] = useState('')
    // const [approved, setApproved] = useState("False")
    // const [balance, setBalance] = useState(0)
    


    // const addTimeOffRequest = async (newTimeOffRequest) => {
    //     // try 
    //     // {
    //         let response = await axios.post(`http://127.0.0.1:8000/api/pto_requests/new/`, newTimeOffRequest, {
    //             headers: {
    //                 Authorization: 'Bearer ' + token
    //             }
    //         })
    //         setRequest(response.data);
    //         // await handleUpdateBalance(updatedPtoBalance);
    //     // } 
    //     // catch (error) 
    //     // {
    //     //     console.log(error.message)
    //     // }
    // }

    // const addComment = async (newComment) => {
    //     console.log(requestId, "Line 51")
    //     if(request.id != null || request.id != " ") {
    //     const response = await axios.post('http://127.0.0.1:8000/api/comments/changes/', newComment);
    //     console.log(response.data)
    //     props.getAllComments()
    //     }
    //     else
    //     {
    //     addComment()
    //     }
    // }
    
    // const promiseExecution = async (newTimeOffRequest, newComment) => {
    //         let promise = await Promise.all([
    //         addTimeOffRequest(newTimeOffRequest),
    //         addComment(newComment),
    //         navigate("/")
    //         ]);
    // }
    

    // function handleRequestSubmit(event){
    //     event.preventDefault();
    //     let newTimeOffRequest = {
    //         employee_id: employee.id,
    //         date_requested: dateRequested,
    //         hours_requested: hoursRequested,
    //         approved: approved,        
    //     }; 
    //     let newComment = {
    //         employee: employee.id,
    //         pto_request: requestId,
    //         text: comment, 
    //         };
    //     promiseExecution(newTimeOffRequest, newComment);
    //     }



    // const handleUpdateBalance = async (updatedPtoBalance) => {
    //    await axios.patch(`http://127.0.0.1:8000/api/employees/pto_balance/${employee.id}/`, updatedPtoBalance)
    //   } 
      
    // let updateBalance = balance - hoursRequested
    
    // const updatedPtoBalance = {
    //     pto_balance: updateBalance,
    //     };

    // return (
        // <div>{employee? 
        //     (<div className='request-table'>
        //         <div className='newEntry'>
        //         <label><b>Employee Number: </b></label>
        //         {employee.employee_number}
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>Employee Name: </b></label>
        //         {employee.employee_first_name + " " + employee.employee_last_name}
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>Department:</b> </label>
        //         {employee.department}
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>Hire Date: </b></label>
        //         {employee.hire_date}
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>PTO Balance:</b> </label>
        //         {employee.pto_balance}
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>Supervisor Name:</b></label>
        //         {employee.supervisor_number}
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>Date Requested Off: </b></label>
        //         <input type="date" value={dateRequested} onChange={(event) => setDateRequested(event.target.value)}/>
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>Hours Requested: </b></label>
        //         <input type="number" value={hoursRequested} onChange={(event) => setHoursRequested(event.target.value)}/>
        //         </div>                        
        //         <div className='newEntry'>
        //         <label><b> Approved: </b></label>
        //         <input type="boolean" value={approved} onChange={(event) => setApproved(event.target.value)}/>
        //         </div>
        //         <div className='newEntry'>
        //         <label><b>Comments: </b></label>
        //         <input type="text" value={comment} onChange={(event) => setComment(event.target.value)}/>
        //         </div>
        //         <div className='submit-new-request'>
        //             <button onClick={handleRequestSubmit}>Submit Request</button>
        //             {/* <button onClick={handleCommentSubmit}>Submit Comment</button> */}
        //         </div>
        //     </div>):(<div>NO DATA AVAILABLE</div>)}
        // </div>

    // );
    // }  
    // export default AddRequest;}
