//General Imports
import React, { useState, useEffect } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";
import DisplayRequestData from '../../components/DisplayRequestData/DisplayRequestData';

const TimeOffRequestDataPage = () => {
    const [ user,token] = useAuth ()
    const [requestInfo, setRequestInfo] = useState();

    useEffect(() => {
        fetchRequestInfo();
    }, []);  
    console.log("Time Off Request Data Page", requestInfo)   
    
    async function fetchRequestInfo(){
        const response = await axios.get(`http://127.0.0.1:8000/api/pto_requests/employee/51/`, {
            headers: {
            Authorization: "Bearer " + token,
            },
        }
        )
        setRequestInfo(response.data); 
        console.log(requestInfo);        
    };

    return (
        <div><Navbar />
        <p>
            This is the Time Off Request Data Page
        </p>
        {/* <div><DisplayRequestData request={requestInfo} fetchRequestInfo={fetchRequestInfo} />
            </div> */}
        </div> 
     );
}
 
export default TimeOffRequestDataPage;