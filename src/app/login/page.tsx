'use client'

import img from '@/app/assets/login_image.png'
import Image from 'next/image'
import React, {useEffect} from 'react'
import {SessionProvider, signIn} from 'next-auth/react'
import {useSelector} from 'react-redux'
import {RootState} from '@/app/redux/store'
import {useRouter} from 'next/navigation'
import Session from '@/app/HOC/Session'
import Link from 'next/link'

export default function Login() {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const router = useRouter()

    useEffect(() => {
        if (isAuth) router.push('/work')
    }, [isAuth, router])

    if(isAuth) return null

    return (
        <SessionProvider>
            <Session>
                <main className='grid grid-cols-2 gap-[40px] p-[20px] select-none'>
                    <div className='relative h-[calc(100vh-44px)] rounded-xl bg-gray-800 overflow-hidden'>
                        <Image priority src={img} alt={'TaskZen'} className='absolute bottom-0 left-1/5'/>
                        <p className='absolute top-[20px] left-[20px] font-jost font-bold text-white text-3xl'>TaskZen</p>
                    </div>
                    <div className='flex justify-center rounded-xl border-2 border-gray-200'>
                        <div className='flex flex-col justify-center items-start h-[calc(100vh-44px)] w-3/4'>
                            <p className='font-jost font-bold text-7xl leading-[120px]'>Log in</p>
                            <p className='font-quicksand text-2xl'>This is a modern, responsive web application designed to help you manage your daily tasks efficiently. The Todo App allows you to organize your tasks with ease, providing a user-friendly interface and a seamless user experience. More info on <Link href={`/`} className='mx-1 text-blue-300 font-bold'>home page</Link>.</p>
                            <br/>
                            <button onClick={() => signIn('google', { callbackUrl: '/work' })} className='w-[200px] h-[50px] text-2xl bg-[#cbcbcb]
                    font-jost font-bold rounded-xl self-center hover:brightness-75 active:brightness-90 select-none'>
                                Google
                            </button>
                        </div>
                    </div>
                </main>
            </Session>
        </SessionProvider>
    )
}