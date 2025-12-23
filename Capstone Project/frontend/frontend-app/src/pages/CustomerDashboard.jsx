import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CustomerDashboard() {

let navigate = useNavigate();
let emailId = useSelector(gs=>gs.auth.emailId)
let logout= ()=> {
    navigate("/")
}

    return(
        <div>
            <h2>Welcome user {emailId}, Customer Dashboard <input type="button" value="logout" onClick={logout}/></h2>
        </div>
    )
}
export default CustomerDashboard;