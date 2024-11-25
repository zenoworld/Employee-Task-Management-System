import React from 'react'

const TaskNumbers = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='bg-blue-400 px-6 py-9 w-[45%] rounded-xl' >
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.newtask}</h2>
                <h3 className='text-xl font-bold'>New Task</h3>
            </div>
            <div className='bg-green-400 px-6 py-9 w-[45%] rounded-xl' >
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
                <h3 className='text-xl font-bold'>Completed</h3>
            </div>
            <div className='bg-yellow-500 px-6 py-9 w-[45%] rounded-xl' >
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
                <h3 className='text-xl font-bold'>Accepted</h3>
            </div>
            <div className='bg-red-400 px-6 py-9 w-[45%] rounded-xl' >
                <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
                <h3 className='text-xl font-bold'>Failed</h3>
            </div>
        </div>
    )
}

export default TaskNumbers