//General Imports
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom"

//Component Imports
import Navbar from "../../components/NavBar/NavBar";

//Hooks Imports
import useAuth from '../../hooks/useAuth';

const TimeOffRequestDataPage = (props) => {
    // setting up hooks a good place to start
    const {ptoRequestId} = useParams();
    const [user, token] = useAuth ();
    const navigate = useNavigate ();
    const [ptoRequest, setPtoRequest] = useState({});
    const [comments, setComments] = useState([]);
    const [dateRequested, setDateRequested] = useState('');
    const [hoursRequested, setHoursRequested] = useState('');
    const [requesterName, setRequesterName] = useState(' ');
    const [ptoBalance, setPtoBalance] = useState('')
    const [approved, setApproved] = useState('');
    const [empty, setEmpty] = useState();
    let approveStatus;

    useEffect(() => {
        const fetchRequest = async () => {
            try {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/pto_requests/request/${ptoRequestId}/`
                )
                setPtoRequest(response.data)
                setDateRequested(response.data.date_requested)
                setHoursRequested(response.data.hours_requested)
                setRequesterName(response.data.employee.employee_first_name + " " + response.data.employee.employee_last_name)
                setPtoBalance(response.data.employee.pto_balance)
                setApproved(response.data.approved)
                console.log(ptoRequestId)
                // setApproved(response.data.approved)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRequest()

        const fetchComments = async () => {
            try {
                let response2 = await axios.get(
                    `http://127.0.0.1:8000/api/comments/request/${ptoRequestId}/`
                )
                if (response2.data == "null" || response2.data == ""){
                    setEmpty(true)
                }
                else {
                setEmpty(false)
                setComments(response2.data)
                console.log(comments)
                }
                // setApproved(response.data.approved)
            } catch (error) {
                console.log(error)
            }
        }
        fetchComments()
    }, [token, user, comments, props, ptoRequestId]);  

    const updateTimeOffRequest = async (changeTimeOffRequest) => {
        try 
        {
            await axios.put(`http://127.0.0.1:8000/api/pto_requests/update/${ptoRequestId}/`, changeTimeOffRequest, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            if(props.employeeData.isSupervisor === true) {
                navigate("/supervisor")
            }
            else if(props.employeeData.isAdmin === true){
                navigate("/admin")
            }
            else {
                navigate("/")
            }
            
            
        } 
        catch (error) 
        {
            console.log(error.message)
        }
    }    

    function handleSubmit(event){
        event.preventDefault();
        let changeTimeOffRequest = {
            employee_id: ptoRequest.employee.id,
            date_requested: dateRequested,
            hours_requested: hoursRequested, 
        };
        updateTimeOffRequest(changeTimeOffRequest)
    } 

    if (approved === false)
    {approveStatus = "No"}
    else
    {approveStatus = "Yes"};  

    return ( 
        <div><Navbar />
            <div className='req-data-column1'>
                <div className='request-table'>
                    <form onSubmit={handleSubmit}>
                        <div className='newEntry'>
                        <label><b>Employee Name: </b></label>
                        {requesterName}
                        </div>
                        <div className='newEntry'>
                        <label><b>Date Requested Off: </b></label>
                        <input type="date" value={dateRequested} onChange={(event) => setDateRequested(event.target.value)}/>
                        </div>
                        <div className='newEntry'>
                        <label><b>Hours Requested: </b></label>
                        <input type="number" value={hoursRequested} onChange={(event) => setHoursRequested(event.target.value)}/>
                        </div>
                        <div className='newEntry'>
                        <label><b>PTO Balance: </b></label>
                        {ptoBalance}
                        </div>
                        <div className='newEntry'>
                        <label><b>Approved: </b></label>
                        {approveStatus}
                        </div>
                        {/* <div className='newEntry'>
                        <label> Approved: </label>
                        <input type="boolean" value={approved} onChange={(event) => setApproved(event.target.value)}/>
                        </div> */}
                        <div className='update-request'><button type='submit'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="req-data-column2"><b><h3>Comments</h3></b>
                {/* Javascript Map Function can generate multiple components from an array of data */}
                    <div className='comments'>
                    {empty?
                    (<div>NO DATA AVAILABLE</div>):
                    (<div> 
                    {comments &&
                    comments.map((comment) => (
                        <div key={comment.id}>
                            {/* <ul><b>Request Number:</b>{" " + ptoRequest.id}</ul> */}
                            <ul><b>User:</b>{" " + comment.employee_id}</ul>
                            <ul><b>Comment:</b> {" " + comment.text}</ul>
                        </div>
                        ))}
                    </div>)}
                    </div>
            </div>
        </div>
    );
}
export default TimeOffRequestDataPage;