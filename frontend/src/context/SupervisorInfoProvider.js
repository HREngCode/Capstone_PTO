import { useState } from "react";
import { SupervisorInfoContext } from "./SupervisorInfoContext";

export const SupervisorProvider = ({children}) => {
    //always return jsx
    return(
        <SupervisorInfoContext.Provider>{children}</SupervisorInfoContext.Provider>
    )
}