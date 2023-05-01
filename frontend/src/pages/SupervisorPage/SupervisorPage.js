//General Imports
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";
import FullCal from "../../components/FullCalendar/FullCal";
import { formatDate } from "@fullcalendar/core";

//Context Imports

const SupervisorPage = (props) => {
    
    const [user, token] = useAuth ()
    const navigate = useNavigate();
    const [approval, setApproval] = useState(false);
    const [ptoRequests, setPtoRequests] = useState([]);
    const [employee, setEmployee] = useState({});
    // setEmployee(props.employeeData)
    // console.log(employee);

    useEffect(() => { 

        const fetchRequestBySupervisor = async () => {
            try {
            //calls current employee number. If it's a supervisor, the value returned will be the employees that 
            //report to this number
           
            let response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/supervisor/${props.employeeData.employee_number}/`, { 
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            setEmployee(props.employeeData);
            setPtoRequests(response.data);
            setApproval(response.data.approved);
            } catch (error) {
            console.log(error.response);
            }    
        }; 
        fetchRequestBySupervisor();
        
    }, [token, user, props.employeeData.employee_number]); 

    const handleClick = (ptoRequest) => {
        navigate(`/timeoffrequestsup/${ptoRequest.id}`);
      }

    const ptoApprove = {
        approved: true,
    };
    
    const handleApprovalToggle = async (ptoRequest) => {
       await axios.patch(`http://127.0.0.1:8000/api/pto_requests/approval/${ptoRequest.id}/`, ptoApprove)
       alert(`You have approved the request for ${ptoRequest.id} `)
      };

    return ( 
        <div><Navbar />
            <div>
                <div>{props.employeeData.isSupervisor?
                (<div>
                    <div>
                        <div className="sup-column1">
                            <div className="title-homepage">
                                <h1>Supervisor Page for {" " + props.employeeData.department}!</h1></div>
                            <div>
                                <div className="calendar">
                                <FullCal ptoRequests= {ptoRequests} employee={employee} />
                                </div>
                            </div>
                        </div>
                        <div className="sup-column2"></div>    
                        <div className="act_req_title"><b><h3>Active Requests</h3></b></div>
                            <div className="active_requests"> 
                                {ptoRequests &&
                                ptoRequests.map((ptoRequest) => (
                                <p key={ptoRequest.id}>
                                    {/* <p><b>Request ID:</b> {ptoRequest.id} </p> */}
                                    <p><b>Requester:</b>  {ptoRequest.employee.employee_first_name} {ptoRequest.employee.employee_last_name}</p>
                                    <p><b>Date Requested:</b>{" " + formatDate(ptoRequest.date_requested)}</p>                
                                    <p><b>Hours Requested:</b>{" " + ptoRequest.hours_requested}</p>
                                    <button onClick={() => handleClick(ptoRequest)}>Detail</button> 
                                    <button onClick={() => handleApprovalToggle(ptoRequest)}>Approve</button>
                                </p>
                                ))}
                            </div>
                    </div>  
                        </div>) : (<div><h3><b>You Do Not Have Supervisor Access</b></h3></div>) }
                </div>
            </div>
        </div>
     );
}
 
export default SupervisorPage;