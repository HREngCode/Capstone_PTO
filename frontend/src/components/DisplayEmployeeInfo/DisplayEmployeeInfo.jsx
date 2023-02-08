const DisplayEmployeeInfo = (employee) => {
    let supervisor;
    let admin;
    if (employee.isSupervisor)
    { 
        supervisor = "yes"
    } else {
        supervisor = "no"
    };
    if (employee.isAdmin)
    { 
        admin = "yes"
    } else {
        admin = "no"
    };
    return(
        <div>
            {console.log(employee)}
            <p>Id: {employee.id}</p>
            <p>First Name: {employee.employee_first_name}</p>
            <p>Employee Number: {employee.employee_number}</p>
            <p>Supervisor: {supervisor}</p> 
            <p>Admin: {admin}</p> 
        </div>
    )
}
export default DisplayEmployeeInfo;