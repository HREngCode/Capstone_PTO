//1. create context to be imported
//2. provide a jsx element that will provide context to children
//2a. declare a state(functionality) you need here
import { useState } from "react";
import useAuth from '../hooks/useAuth';
import { EmployeeInfoContext } from "./EmployeeInfoContext";

export const EmployeeInfoProvider = ({children}) => {
    // const [user, token] = useAuth ()
    const [employeeInfo, setEmployeeInfo] = useState()
    const [employeeName, setEmployeeName] = useState()
    const [employeeId, setEmployeeId] = useState()

    let value = {
        employeeInfo,
        setEmployeeInfo,
        employeeId,
        setEmployeeId,
        employeeName,
        setEmployeeName,
        // fetchEmployeeInfo,
    }

    //always return jsx
    return(
        <EmployeeInfoContext.Provider value={value}>{children}</EmployeeInfoContext.Provider>
    )
}