import React from 'react';
import DepartmentList from './components/DepartmentList';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
      <h1>Department and Student Management</h1>
      <DepartmentList />
      <StudentList />
    </div>
  );
}

export default App;