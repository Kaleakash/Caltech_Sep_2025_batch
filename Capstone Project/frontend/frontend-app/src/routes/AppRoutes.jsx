import Login from '../components/Login'
import Signup from '../components/SignUp'
import AddOperation from '../pages/admin/AddOperations'
import ViewOperation from '../pages/admin/ViewOperations'
import AdminDashboard from '../pages/AdminDashboard'
import CustomerViewOperation from '../pages/customer/CustomerViewOperations'
import CustomerDashboard from '../pages/CustomerDashboard'
import {Route,Routes} from 'react-router-dom'
const AppRoutes = () =>{
  return(
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/admin" element={<AdminDashboard />}>
        <Route path='add' element={<AddOperation/>} ></Route>
        <Route path='view' element={<ViewOperation/>} ></Route>
    </Route>
    <Route path="/customer" element={<CustomerDashboard />}>
        <Route path='view' element={<CustomerViewOperation/>}></Route>
    </Route>
  </Routes>)
}

export default AppRoutes;