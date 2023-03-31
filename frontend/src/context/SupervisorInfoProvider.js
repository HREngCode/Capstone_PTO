//1. create context to be imported
//2. provide a jsx element that will provide context to children
//2a. declare a state(functionality) you need here
import { useState } from "react";
import { SupervisorInfoContext } from "./SupervisorInfoContext";

export const SupervisorInfoProvider = ({children}) => {
    const [supervisor, setSupervisor] = useState()

    let value = {
        supervisor,
        setSupervisor,
    }
    //always return jsx
    return(
        <SupervisorInfoContext.Provider value={value}>{children}</SupervisorInfoContext.Provider>
    )
}