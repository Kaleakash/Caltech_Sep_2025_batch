import Login from '../components/Login'
import Signup from '../components/SignUp'
import AdminDashboard from '../pages/AdminDashboard'
import CustomerDashboard from '../pages/CustomerDashboard'
import {Route,Routes} from 'react-router-dom'
const AppRoutes = () =>{
  return(
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/customer" element={<CustomerDashboard />} />
  </Routes>)
}

export default AppRoutes;