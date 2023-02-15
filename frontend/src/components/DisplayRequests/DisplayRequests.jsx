// //General Imports
// import { useContext, useState } from 'react';
// import { useNavigate, Link } from "react-router-dom";

// //Context Imports
// import { EmployeeInfoContext } from '../../context/EmployeeInfoContext'; 


// const DisplayRequests = ({ request }) => {
//     const {employeeIsSupervisor, setEmployeeIsSupervisor} = useContext(EmployeeInfoContext)
//     const navigate = useNavigate();

//     let approval;
//     if (request.approved)
//     { 
//         approval = "yes"
//     } else {
//         approval = "no"
//     }

    

//     return(
//         <div>
//             <p>Id: {request.id}</p>
//             <p>Requester: {request.employee.employee_first_name}</p>
//             <p>Employee Number: {request.employee.employee_number}</p>
//             <p>Date Requested: {request.date_requested}</p>
//             <p>Approved: {approval}</p> 
//             <div>{employeeIsSupervisor? 
//                 (<div>
//                 <button onClick={function handleClick() {
//                 alert('You edited me!');
//                 }}>Approve</button>
//                 <button onClick={function handleClick() {
//                 alert('You edited me!');
//                 }}>Deny</button>
//                 <button onClick={function handleClick() {
//                 alert('You edited me!');
//                 }}>Need More Info</button>      
//                 </div>) : (<div>
//                 <Link to="/timeoffrequest" ><button>Edit</button></Link>   
//                 </div>) }
//             </div>
//         </div>
//     )
// }
// export default DisplayRequests;