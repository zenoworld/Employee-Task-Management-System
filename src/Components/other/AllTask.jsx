import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
    const authdata = useContext(AuthContext)

    return (


        <div id='allTask' className='mt-5 p-5 bg-[#1C1C1C] rounded h-60 overflow-auto'>
            <div className='flex justify-between bg-purple-700 mb-4 py-2 px-4 rounded'>
                <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/5'>Completed</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>
            <div className=' cursor-pointer'>
                {authdata.employeeData.map((emp, index) => {
                    return <div key={index} className='bg-transparent border-2 border-purple-600 outline-none mb-2  flex justify-between px-4 py-2 rounded' >
                        <h2 className='text-lg font-medium w-1/5'>{emp.firstName}</h2>
                        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{emp.taskNumbers.newtask}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-500'>{emp.taskNumbers.active}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-green-500'>{emp.taskNumbers.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-400'>{emp.taskNumbers.failed}</h5>
                    </div>
                })
                }
            </div>

        </div>
    )
}

export default AllTask