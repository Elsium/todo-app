import React from 'react'

interface PropsType {
    title: string
    count: number
}

const TableTitle = ({title, count}: PropsType) => {
    return (
        <div className='flex items-center font-bold'>
            <p className='font-poppins text-4xl'>{title}</p>
            {!!count &&
                <p className="ml-[20px] border border-gray-300 rounded py-[10px] px-[13px] text-3xl font-quicksand">{count}</p>}
        </div>
    )
}

export default TableTitle