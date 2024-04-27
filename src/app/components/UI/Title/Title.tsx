'use client'
import React from 'react'

interface ComponentProps {
    title: string
    Icon: React.ElementType | null
}

const Title: React.FC<ComponentProps> = ({title, Icon}) => {
    return (
        <div className='flex justify-between'>
            <p className='font-poppins font-bold text-3xl'>{title}</p>
            <button>
                {Icon && <Icon style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/>}
            </button>
        </div>
    )
}

export default Title