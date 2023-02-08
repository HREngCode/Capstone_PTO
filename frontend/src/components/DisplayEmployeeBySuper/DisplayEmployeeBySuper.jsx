import DisplayRequests from "../DisplayRequests/DisplayRequests";

const DisplayEmployeeBySuper = ({ employee }) => {
    // let result;
    // if (employee.isSupervisor)
    // { 
    //     result = "yes"
    // } else {
    //     result = "no"
    // }
    return(
        <div>
            <p>Id: {employee.id}</p>
            <p>First Name: {employee.employee_first_name}</p>
            <p>Date of Hire: {employee.hire_date}</p>
            <p>PTO Balance: {employee.pto_balance}</p> 
        </div>
    )
}
export default DisplayEmployeeBySuper;