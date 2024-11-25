import React, { useState } from 'react'

const Header = (props) => {

    
    const loggedOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        window.location.reload()
    }
    return (

        <div className='flex justify-between items-end'>
            <h1 className='text-2xl font-medium'>
                Helllo <br />
                <span className='text-3xl font-semibold '>
                    {props.data.firstName} 
                </span>
            </h1>
            <button
                onClick={loggedOutUser}
                className='bg-red-500  px-5 py-1 text-lg text-white rounded-lg font-semibold'
            >
                Log Out
            </button>
        </div>
    )
}

export default Header