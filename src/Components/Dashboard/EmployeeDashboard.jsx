import React from 'react'
import Header from '../other/Header'
import TaskNumbers from '../other/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return ( 
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.userRole} data={props.data}/>
      <TaskNumbers data={props.data}/>
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard