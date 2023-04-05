//General Imports
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

//Component Imports
import Navbar from "../../components/NavBar/NavBar";
// import FullCal from '../../components/FullCalendar/FullCal';
import AddRequest from '../../components/AddRequest/AddRequest';
// import AddComment from '../../components/AddComment/AddComment';

// Context Imports

//Hooks Imports
import useAuth from '../../hooks/useAuth';

const NewTimeOffRequestPage = (props) => {
    // setting up hooks a good place to start
    const [user, token] = useAuth ()
    const navigate = useNavigate ()
    const [supervisorName, setSupervisorName] = useState('')
    const [hoursRequested, setHoursRequested] = useState('')
    const [approved, setApproved] = useState('')
    const [balance, setBalance] = useState(0)
    const [comments, setComments] = useState('')
    const [comment, setComment] = useState('')

    // useEffect(() => {
    //     const fetchEmployeeInfo = async () => {
    //         try {
    //         let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${props.employee.id}/`, {
    //             headers: {
    //             Authorization: "Bearer " + token,
    //             },
    //         }
    //         )
    //             let response2 = await axios.get(`http://127.0.0.1:8000/api/employees/employee_number/${response.data.supervisor_number}/`, {
    //             headers: {
    //             Authorization: "Bearer " + token,
    //             }, 
    //             }
    //         )
    //         console.log("First call", response)
    //         console.log("Second call", response2)
    //         setBalance(response.data.pto_balance) 
    //         setSupervisorName(response2.data.employee_first_name + " " + response2.data.employee_last_name); 
    //         setApproved("No");
    //         } catch (error) {
    //         console.log(error.response.data);
    //         } 
    //     };
    //     fetchEmployeeInfo();
    // }, [token, user, props.employee.id]);   
    
    // useEffect (() => {
    //     console.log(comments);
    // }, [comments])

    // async function getAllComments(){
    //     const response = await axios.get('http://127.0.0.1:8000/api/comments/all/');
    //     console.log(response.data);
    //     setComments(response.data)
    //   }

    return ( 
        <div><Navbar />
            <div>
                <AddRequest newTimOffRequest/>
            </div>
            {/* <div>
                <AddComment />
            </div> */}
        </div>
    );
}
export default NewTimeOffRequestPage;