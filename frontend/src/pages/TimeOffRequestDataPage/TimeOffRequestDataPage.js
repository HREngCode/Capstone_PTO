//General Imports
import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

//Hooks Import
import useAuth from "../../hooks/useAuth";

//Component Imports
import Navbar from "../../components/NavBar/NavBar";


const TimeOffRequestDataPage = () => {
    const {ptoRequestId} = useParams()
        const [ptoRequest, setPtoRequest] = useState({})
        console.log(ptoRequest)

        useEffect(() => {

            const fetchRequest = async () => {
                try {
                    let response = await axios.get(
                        `http://127.0.0.1:8000/api/pto_requests/${ptoRequestId}/`
                    )
                    setPtoRequest(response.data)
                } catch (error) {
                    console.log(error)
                }
            }

            fetchRequest()

        }, [])
    return (
        <div>
           <h1>Request Details {ptoRequestId}</h1> 
        </div>
    
    )

};
 
export default TimeOffRequestDataPage;