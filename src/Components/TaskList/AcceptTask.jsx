import React from 'react'



const AcceptTask = (props) => {

  
    const changeToCompleteTask = () => {
      const totalEmpData = JSON.parse(localStorage.getItem('employees'));
      
      const updatedTotalEmpData = totalEmpData.map((employee) => {
        if (employee.firstName === props.emp.firstName) { 
          employee.tasks = employee.tasks.map((task) => {
            if (task.title === props.data.title) { 
              return { ...task, active: false, completed: true }; 
            }
            return task; 
          });
          employee.taskNumbers.active = employee.taskNumbers.active - 1;
          employee.taskNumbers.completed = employee.taskNumbers.completed + 1;
        }
        return employee; 
      });
      
      localStorage.setItem('employees', JSON.stringify(updatedTotalEmpData));
      window.location.reload();
    };

  const changeToFailedTask = () => {
    const totalEmpData = JSON.parse(localStorage.getItem('employees'));

      const updatedTotalEmpData = totalEmpData.map((employee) => {
        if (employee.firstName === props.emp.firstName) { 
          employee.tasks = employee.tasks.map((task) => {
            if (task.title === props.data.title) { 
              return { ...task, active: false, failed: true }; 
            }
            return task; 
          });
          employee.taskNumbers.active = employee.taskNumbers.active - 1;
          employee.taskNumbers.failed = employee.taskNumbers.completed + 1;
        }
        return employee; 
      });

      localStorage.setItem('employees', JSON.stringify(updatedTotalEmpData));
      window.location.reload();
  }

  return (
    <div className=' h-full w-[300px] flex-shrink-0 p-5 bg-yellow-500 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 px-3 py-1 rounded text-sm'>{props.data.category}</h2>
        <h3 className='text-sm'>{props.data.date}</h3>
      </div>
      <h1 className='mt-5 text-2xl font-semibold'>
        {props.data.description}
      </h1>
      <p className='text-sm mt-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit laudantium? Sapiente veritatis quidem vero.
      </p>

      <div className='w-full flex justify-between mt-8'>
        <button onClick={changeToCompleteTask} className='bg-green-500 w-[140px] text-sm  px-2 py-1 rounded'>Mark as Completed</button>
        <button onClick={changeToFailedTask} className='bg-red-500 w-[110px] text-sm  px-2 py-1 rounded'>Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask