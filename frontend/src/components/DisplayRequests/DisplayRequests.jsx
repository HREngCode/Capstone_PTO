const DisplayRequests = ({ request }) => {
    let approval;
    if (request.approved)
    { 
        approval = "yes"
    } else {
        approval = "no"
    }
    return(
        <div>
            <p>Id: {request.id}</p>
            <p>Requester: {request.employee.employee_first_name}</p>
            <p>Date Requested: {request.date_requested}</p>
            <p>Approved: {approval}</p> 
        </div>
    )
}
export default DisplayRequests;