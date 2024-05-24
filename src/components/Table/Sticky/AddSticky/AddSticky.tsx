import React from 'react'
import AddIcon from '@mui/icons-material/Add'

const AddSticky = () => {
    return (
        <div className='w-full h-[400px] shadow bg-gray-200 rounded p-[15px] flex justify-center items-center'>
            <button className='bg-gray-300 rounded-full flex justify-center items-center w-[60px] h-[60px] transition-colors duration-300 ease-linear hover:bg-gray-400'>
                <AddIcon/>
            </button>
        </div>
    )
}

export default AddSticky