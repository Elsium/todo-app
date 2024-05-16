'use client'

import React from 'react'
import img from '@/app/assets/not_found_image.png'
import Image from 'next/image'
import {useRouter} from 'next/navigation'

const NotFound = () => {
    const route = useRouter()
    return (
        <section className='w-full h-screen flex items-center justify-center select-none'>
            <div className='flex items-center justify-between w-[65%]'>
                <div className='w-[40%]'>
                    <Image src={img} alt='not found'/>
                </div>
                <div className='w-[3px] h-[200px] bg-listHover rounded'/>
                <div className='w-[40%] font-poppins'>
                    <p>Please dont change the URL, it possibly to destroy the app.</p>
                    <p>Or delete your data oops..</p>
                    <button onClick={() => route.back()} className='font-jost text-xl text-blue-300 mt-[20px]'>Go back</button>
                </div>
            </div>
        </section>
    )
}

export default NotFound