import { Link, Outlet, useNavigate } from "react-router-dom";

function HrDashboard() {

    let navigate = useNavigate();

let logout = ()=> {
    navigate("/")
}
    return(
        <div>
            <h3>Hr Home Page</h3>
            <Link to="addEmployee">Add Employee</Link>|
            <Link to="displayEmployee">View All Employee</Link>

            <hr/>

            <div>
                <Outlet/>
            </div>
            <br/>
            <input type="button" value="logout" onClick={logout}/>
        </div>
    )
}
export default HrDashboard;