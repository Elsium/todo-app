'use client'
import React from 'react'
import useWindowWidth from '@/util/useWindowWidth'

interface ComponentProps {
    title: string
    Icon: React.ElementType | null
    onClick?: (toggle: boolean) => void
}

const Title: React.FC<ComponentProps> = ({title, Icon, onClick}) => {
    const width = useWindowWidth()
    return (
        <div className='flex justify-between select-none items-center'>
            <p className='font-poppins font-bold text-xl md:text-3xl'>{title}</p>
            {Icon && onClick && <button onClick={() => onClick(false)}>
                <Icon style={width && width > 768 ? {fontSize: '2rem'} : {fontSize: '1.6rem'}} className='text-[#7c7c7c]'/>
            </button>}
        </div>
    )
}

export default Title