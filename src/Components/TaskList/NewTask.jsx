import React from 'react'

const NewTask = (props) => {

  const acceptTask = () => {
    const updatedTask = { ...props.data, newtask: false, active: true };
    const updatedEmployee = {
      ...props.emp,
      tasks: props.emp.tasks.map(task =>
        task.title === props.data.title ? updatedTask : task
      ),
      taskNumbers: {
        ...props.emp.taskNumbers,
        newtask: props.emp.taskNumbers.newtask - 1,
        active: props.emp.taskNumbers.active + 1,
      },
    };
  
    const totalEmpData = JSON.parse(localStorage.getItem('employees')).map(emp =>
      emp.firstName === props.emp.firstName ? updatedEmployee : emp
    );
  
    localStorage.setItem('employees', JSON.stringify(totalEmpData));
    window.location.reload();
  };
  


  return (
    <div className=' h-full w-[300px] flex-shrink-0 p-5 bg-blue-400 rounded-xl'>
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

      <div className='w-full flex justify-center mt-8'>
        <button
          onClick={acceptTask}
          className='bg-blue-500 w-full text-sm font-medium  px-2 py-1  rounded'>Accept</button>
      </div>
    </div>
  )
}

export default NewTask