//General Imports
import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

//Component Imports
import Navbar from "../../components/NavBar/NavBar";
import DemoApp from "../../components/FullCalendar/DemoApp";

//Context Imports
import { EmployeeInfoContext } from "../../context/EmployeeInfoContext";


const AdminPage = () => {

    const [user, token] = useAuth ()
    const {employeeIsAdmin, setEmployeeIsAdmin} = useContext(EmployeeInfoContext);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        const fetchAllEmployees = async () => {//add async before parenthensis ahead of the arrow function
            try {
            let response = await axios.get(`http://127.0.0.1:8000/api/employees/all/`, {
                headers: {
                Authorization: "Bearer " + token,
                },
            });
            setEmployees(response.data);
            } catch (error) {
            console.log(error.response);
            }    
        };
        fetchAllEmployees();
    
    }, [token]);//optional array to make sure this only runs once    

    return ( 
        <div><Navbar />
            <div>{employeeIsAdmin? 
                (<div>
                    <h1>Admin Page!</h1>
                    {employees &&
                    employees.map((employee) => (
                    <p key={employee.id}>
                    {employee.employee_first_name} {employee.employee_number}
                    </p>
                    ))}
                    <div>
                        <DemoApp />
                    </div>
                </div>) : (<div>You Do Not Have Admin Access</div>) }
            </div>
        </div>
     );
}
 
export default AdminPage;