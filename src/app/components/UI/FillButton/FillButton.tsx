import React from 'react'

interface ComponentProps {
    children: React.ReactNode
    color: string
    width?: string
    height?: string
    text?: string
}

const FillButton: React.FC<ComponentProps> = ({color, children, width = '200px', height = '50px', text = '1.5rem'}) => {
    return (
        <button style={{background: color, width: width, height: height, fontSize: text}} className='font-jost font-bold rounded-xl self-center hover:brightness-75 active:brightness-90 select-none'>
            {children}
        </button>
    )
}

export default FillButton