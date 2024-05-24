'use client'

import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import s from './StickyItem.module.css'
import {deleteStickerAndUpload} from '@/redux/Features/stickersSlice'
import {useSession} from 'next-auth/react'

interface PropsType {
    id: number
    title: string
    description: string | null
}

const StickyItem = ({id, title, description}: PropsType) => {
    const {data: session} = useSession()
    const accessToken = session?.accessToken
    const deleteSticky = () => {
        if (accessToken) deleteStickerAndUpload({id, accessToken})
    }

    return (
        <div className={`w-full h-[400px] shadow bg-red-300 rounded flex flex-col p-[15px] gap-[15px] select-auto relative ${s.box}`}>
            <button onClick={deleteSticky} className={`absolute top-[10px] right-[10px] opacity-0 transition-opacity duration-300 ease-linear ${s.btn}`}><CloseIcon/></button>
            <h1 className='self-center font-bold text-3xl font-poppins'>{title}</h1>
            <p className='text-lg'>{description}</p>
        </div>
    )
}

export default StickyItem