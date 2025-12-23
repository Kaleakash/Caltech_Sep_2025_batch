import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminDashboard() {
let navigate = useNavigate();
let emailId = useSelector(gs=>gs.auth.emailId)
let logout= ()=> {
    navigate("/")
}
    return(
        <div>
            <h2>Welcome user {emailId} : Admin Dashboard
                <input type="button" value="logout" onClick={logout}/>
            </h2>
            <Link to="add">Add </Link> |
            <Link to="view">View </Link> 
            <hr/>
            <Outlet/>
        </div>
    )
}
export default AdminDashboard;