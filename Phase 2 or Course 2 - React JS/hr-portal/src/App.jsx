
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import AccountCreation from './AccountCreation'
import HrDashboard from './HrDashboard'
import EmployeeDashboard from './EmployeeDashboard'
import AddEmployee from './AddEmployee'
import DisplayEmployee from './DisplayEmployee'

function App() {
  

  return (
    <>
  
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/accountCreate' element={<AccountCreation/>}></Route>
      
      <Route path='/hrDashboard' element={<HrDashboard/>}>
          
          <Route path='addEmployee' element={<AddEmployee/>}></Route>
          <Route path='displayEmployee' element={<DisplayEmployee/>}></Route>


      </Route>

      <Route path='/employeeDashboard' element={<EmployeeDashboard/>}>


      </Route>
    </Routes>
    </>
  )
}

export default App
