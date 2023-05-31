//General Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom"

//Component Imports
import { formatDate } from "@fullcalendar/core";
import Modal from 'react-bootstrap/Modal';

// Context Imports


//Hooks Imports
import useAuth from '../../hooks/useAuth';

//Utility Imports
import "../../App.css"

const RequestDetailUser = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ptoRequestId, setptoRequestId] = useState();
    const [user, token] = useAuth ();
    const navigate = useNavigate ();
    const [ptoRequest, setPtoRequest] = useState({});
    const [comments, setComments] = useState([]);
    const [addComment, setAddComment] = useState('');
    const [dateRequested, setDateRequested] = useState(' ');
    const [hoursRequested, setHoursRequested] = useState('');
    const [requesterName, setRequesterName] = useState('');
    const [ptoBalance, setPtoBalance] = useState('')
    const [approved, setApproved] = useState('');
    const [empty, setEmpty] = useState();
    let approveStatus;

    useEffect(() => {
        setRequesterName(props.ptoRequest.employee.employee_first_name);
        fetchComments();
    }, [token, user]);  

    
    const fetchComments = async () => {
        try {
            let response2 = await axios.get(
                `http://127.0.0.1:8000/api/comments/request/${props.ptoRequest.id}/`
            )
            if (response2.data == "null" || response2.data == ""){
                setEmpty(true)
            }
            else {
            setEmpty(false)
            setComments(response2.data)
            }
            // setApproved(response.data.approved)
        } catch (error) {
            console.log(error)
        }
    };
    
    const addNewComment = async (newComment) => {
        try 
        {
        await axios.post('http://127.0.0.1:8000/api/comments/changes/', newComment);
        fetchComments();
        }
        catch (error) 
        {
            console.log(error.message)
        }
    };

    const handleAddComment = (event) => {
        event.preventDefault();
        let newComment = {
            employee: props.ptoRequest.employee.id,
            pto_request: event.id,
            text: addComment,
        };
        addNewComment(newComment);
        setAddComment(""); 
    }

    const updateTimeOffRequest = async (changeTimeOffRequest) => {
        try 
        {
            await axios.put(`http://127.0.0.1:8000/api/pto_requests/update/${ptoRequestId}/`, changeTimeOffRequest, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            if(props.ptoRequest.employee.isSupervisor === true) {
                navigate("/supervisor")
            }
            else if(props.ptoRequest.employee.isAdmin === true){
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
            employee_id: props.ptoRequest.employee.id,
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
      <>
      <button onClick={handleShow}>Detail</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title className='w-100 text-center'>Info For Request No. {props.ptoRequest.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        <div className='request-container'>
        <div className='req-column1'>
            <div className='request-table'>
                <form onSubmit={handleSubmit}>
                    <div className='newEntry'>
                    <label><b>Employee Name: </b></label>
                    {props.ptoRequest.employee.employee_first_name}
                    </div>
                    <div className='newEntry'>
                    <label><b>Date Requested Off: </b></label>
                    <input type="date" value={props.ptoRequest.date_requested} onChange={(event) => setDateRequested(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label><b>Hours Requested: </b></label>
                    <input type="number" value={props.ptoRequest.hours_requested} onChange={(event) => setHoursRequested(event.target.value)}/>
                    </div>
                    <div className='newEntry'>
                    <label><b>PTO Balance: </b></label>
                    {props.ptoRequest.employee.pto_balance}
                    </div>
                    <div className='newEntry'>
                    <label><b>Approved: </b></label>
                    {approveStatus}
                    </div>
                    <div className='submit new-request'><button type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
        <div className="req-column2">
                <div className='comments-table'>
                {empty?
                (<div>NO DATA AVAILABLE</div>):
                (<div> <b>COMMENTS</b>
                {comments &&
                comments.map((comment) => (
                    <div key={comment.id}>
                        {/* <ul><b>Request Number:</b>{" " + props.ptoRequest.id}</ul> */}
                        <b>User:</b>{" " + comment.employee_id}
                        <div></div>
                        <b>Comment:</b> {" " + comment.text}
                    </div>
                    ))}
                </div>)}
                </div>
                <div>
                <input type="text" name="text" value={addComment} onChange={(event) => setAddComment(event.target.value)}/> 
                <button onClick={handleAddComment}>Add Comment</button>
                </div>
            </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default RequestDetailUser;