'use client'
import React from 'react'

interface ComponentProps {
    title: string
    Icon: React.ElementType | null
    onClick?: (toggle: boolean) => void
}

const Title: React.FC<ComponentProps> = ({title, Icon, onClick}) => {
    return (
        <div className='flex justify-between select-none'>
            <p className='font-poppins font-bold text-3xl'>{title}</p>
            {Icon && onClick && <button onClick={() => onClick(false)}>
                <Icon style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/>
            </button>}
        </div>
    )
}

export default Title