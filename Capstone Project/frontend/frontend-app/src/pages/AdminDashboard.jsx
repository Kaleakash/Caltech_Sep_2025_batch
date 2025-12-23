import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
            
        </div>
    )
}
export default AdminDashboard;