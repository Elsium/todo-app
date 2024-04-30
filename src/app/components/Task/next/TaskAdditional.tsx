import React from 'react'

const TaskAdditional = () => {
    return (
        <div className='flex justify-between items-center'>
            <button className='border-[#cbcbcb] w-[45%] h-[50px] text-base border font-jost font-bold
            rounded-xl self-center hover:brightness-75 active:brightness-90 select-none'>
                Delete task
            </button>
            <button className='bg-[#fed439] w-[45%] h-[50px] text-base font-jost font-bold rounded-xl
            self-center hover:brightness-75 active:brightness-90 select-none'>
                Save changes
            </button>
        </div>
    )
}

export default TaskAdditional