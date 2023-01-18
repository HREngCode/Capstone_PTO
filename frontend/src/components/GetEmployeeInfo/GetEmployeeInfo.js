import React, { useState } from "react";
import axios from "axios";

const GetEmployeeInfo = (props) => {
    const [employeeInfo, setEmployeeInfo] = useState('')
    const fetchEmployeeInfo = async () => {
        await axios.get(`http://127.0.0.1:8000/api/employees/user/${user.id}/`, {
            headers: {
            Authorization: "Bearer " + token,
            },
        }).then(res => setEmployeeInfo(res.data.data));
        } 
    fetchEmployeeInfo();
    return (  );
}
 
export default GetEmployeeInfo;