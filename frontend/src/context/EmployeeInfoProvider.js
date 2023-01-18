//1. create context to be imported
//2. provide a jsx element that will provide context to children
//2a. declare a state(functionality) you need here
import { useState } from "react";
import axios from "axios";
import useAuth from '../hooks/useAuth';
import { EmployeeInfoContext } from "./EmployeeInfoContext";

export const EmployeeInfoProvider = ({children}) => {
    const [user, token] = useAuth ()
    const [employeeInfo, setEmployeeInfo] = useState()
    // const fetchEmployeeInfo = async () => {
    //     await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
    //         headers: {
    //         Authorization: "Bearer " + token,
    //         },
    //     }).then(res => setEmployeeInfo(res.data.data));
    //     } 
    // fetchEmployeeInfo();

    let value = {
        employeeInfo,
        setEmployeeInfo,
    }

    //always return jsx
    return(
        <EmployeeInfoContext.Provider value={value}>{children}</EmployeeInfoContext.Provider>
    )
}