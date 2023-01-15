import { useState } from "react";
import { EmployeeInfoContext } from "./EmployeeInfoContext";

export const EmployeeInfoProvider = ({children}) => {
    const [employeeInfo, setEmployeeInfo] = useState()

    let value = {
        employeeInfo,
        setEmployeeInfo
    }

    //always return jsx
    return(
        <EmployeeInfoContext.Provider value={{value}}>{children}</EmployeeInfoContext.Provider>
    )
}