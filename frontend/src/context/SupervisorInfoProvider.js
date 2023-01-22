//1. create context to be imported
//2. provide a jsx element that will provide context to children
//2a. declare a state(functionality) you need here
import { useState } from "react";
import axios from "axios";
import useAuth from '../hooks/useAuth';
import { SupervisorInfoContext } from "./SupervisorInfoContext";

export const SupervisorInfoProvider = ({children}) => {
    const [user, token] = useAuth ()
    const [supervisorInfo, setSupervisorInfo] = useState()

    const fetchEmployeeInfo = async () => {
        try {
        let response = await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
            headers: {
            Authorization: "Bearer " + token,
            },
        }
        )
        
            let response2 = await axios.get(`http://127.0.0.1:8000/api/employees/employee_number/${response.data.supervisor_number}/`, {
            headers: {
            Authorization: "Bearer " + token,
            }, 
            }
        );console.log("Home Page Loaded",response.data)
        setSupervisorInfo(response2.data)
        console.log("SupProvider", response2)
        // setEmployeeName(response.data.employee_first_name); 
        // setEmployeeId(response.data.id);
        // setUserName(response.data.user_name);
        // setEmployeeUserId(response.data.user.id); 
        // setFirstName(response.data.employee_first_name);
        // setLastName(response.data.employee_last_name);
        } catch (error) {
          console.log(error.message);
        }    
      };

    let value = {
        supervisorInfo,
        setSupervisorInfo,
        fetchEmployeeInfo,
    }
    //always return jsx
    return(
        <SupervisorInfoContext.Provider value={value}>{children}</SupervisorInfoContext.Provider>
    )
}