import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' h-full w-[300px] flex-shrink-0 p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h2 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h2>
        <h3 className='text-sm'>{data.date}</h3>
      </div>
      <h1 className='mt-5 text-2xl font-semibold'>
      {data.description}
      </h1>
      <p className='text-sm mt-2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, fugit laudantium? Sapiente veritatis quidem vero.
      </p>

      <div className='w-full flex justify-center mt-8'>
        <button className='bg-red-500 w-full text-sm font-medium  px-2 py-1  rounded'>Failed</button>
      </div>
    </div>
  )
}

export default FailedTask