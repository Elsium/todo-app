import React from 'react'

interface PropsType {
    title: string
    count?: number
}

const TableTitle = ({title, count}: PropsType) => {
    return (
        <div className='flex items-center font-bold'>
            <p className='font-poppins text-xl md:text-4xl'>{title}</p>
            {!!count &&
                <p className="ml-[10px] md:ml-[20px] border border-gray-300 rounded py-[5px] px-[8px] md:py-[10px] md:px-[13px] text-lg md:text-3xl font-quicksand">{count}</p>}
        </div>
    )
}

export default TableTitle