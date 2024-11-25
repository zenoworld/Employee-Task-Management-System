import React,{useState} from 'react'

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [taskAssign, setTaskAssign] = useState('')
    const [taskCategory, setTaskCategory] = useState('')
    const [taskDesc, setTaskDesc] = useState('')

   

    const assignTask = (e) => {
        e.preventDefault();
    
        const task = {
            title:taskTitle,
            description:taskDesc,
            category:taskCategory,
            date:taskDate,
            active: false,
            completed: false,
            failed: false,
            newtask: true,
        };
    
        const empData = JSON.parse(localStorage.getItem('employees'));
        const updatedEmpData = empData.map((ele) => {
            if (taskAssign === ele.firstName) {
                ele.tasks.push(task); 
                ele.taskNumbers.newtask = ele.taskNumbers.newtask + 1;
            }
            return ele;
        });
        
        window.location.reload()
        localStorage.setItem('employees', JSON.stringify(updatedEmpData)); 
        setTaskTitle('');
        setTaskDate('');
        setTaskCategory('');
        setTaskAssign('');
        setTaskDesc('');
    };
    

    return (
        <div id='createTask' className='mt-7  bg-[#1C1C1C] p-4 rounded' >
            <form
                onSubmit={(e) => { assignTask(e) }}
                className='flex flex-wrap w-full items-start justify-between'>

                <div className='w-1/2 '>
                    <div>
                        <h3 className='mb-1 text-sm'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        required
                        onChange={(e) => setTaskTitle(e.target.value)}
                        className='bg-transparent outline-none px-2 py-1 text-sm w-4/5 border-[1px] border-purple-600 rounded mb-4' placeholder='Make a UI Design' type='text'></input>
                    </div>

                    <div>
                        <h3 className='mb-1 text-sm'>Date</h3>
                        <input 
                        value={taskDate}
                        required
                        onChange={(e) => setTaskDate(e.target.value)}
                        className='bg-transparent outline-none px-2 py-1 text-sm w-4/5 border-[1px] border-purple-600 rounded mb-4' placeholder='dd/mm/yy' type='date'></input>
                    </div>

                    <div >
                        <h3 className='mb-1 text-sm'>Assign to</h3>
                        <input 
                        value={taskAssign}
                        required
                        onChange={(e) => setTaskAssign(e.target.value)}
                        className='bg-transparent outline-none px-2 py-1 text-sm w-4/5 border-[1px] border-purple-600 rounded mb-4' type='text' placeholder='Employee Name'></input>
                    </div>

                    <div>
                        <h3 className='mb-1 text-sm'>Category</h3>
                        <input 
                        value={taskCategory}
                        required
                        onChange={(e) => setTaskCategory(e.target.value)}
                        className='bg-transparent outline-none px-2 py-1 text-sm w-4/5 border-[1px] border-purple-600 rounded mb-4' type='text' placeholder='Design , Dev ,etc'></input>
                    </div>

                </div>

                <div className='w-2/5 h-full flex flex-col items-start'>
                    <h3 className='mb-0.5 text-sm'>Description</h3>
                    <textarea 
                    value={taskDesc}
                    required
                    onChange={(e) => setTaskDesc(e.target.value)}
                    className='w-full  bg-transparent border-[1px] border-purple-600 rounded' cols='30' rows='8' id='' name=''></textarea>
                    
                    
                    <button className='bg-purple-700 text-lg font-semibold text-white w-full px-4 py-1 mt-4 rounded'>Create Task</button>
                </div>



            </form>
        </div>
    )
}

export default CreateTask