'use client'

import img from '@/app/assets/login_image.png'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {SessionProvider, signIn} from 'next-auth/react'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {useRouter} from 'next/navigation'
import Session from '@/HOC/Session'
import Link from 'next/link'
import {Checkbox} from '@mui/material'

export default function Login() {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const router = useRouter()
    const [agree, setAgree] = useState(false)

    useEffect(() => {
        if (isAuth) router.push('/work')
    }, [isAuth, router])

    if(isAuth) return null

    return (
        <SessionProvider>
            <Session>
                <main className='flex flex-col md:grid md:grid-cols-2 gap-[20px] p-[10px] select-none md:gap-[40px] md:p-[20px]'>
                    <div className='relative w-full min-h-[calc(100vh-44px)] rounded-xl bg-gray-800 overflow-hidden'>
                        <Image priority src={img} alt={'TaskZen'} layout='fill' objectFit='cover'/>
                        <p className='absolute top-[20px] left-[20px] font-jost font-bold text-white text-3xl'>TaskZen</p>
                    </div>
                    <div className='flex justify-center rounded-xl min-h-[calc(100vh-44px)] border-2 border-gray-200'>
                        <div className='flex flex-col justify-center items-start w-3/4'>
                            <p className='font-jost font-bold text-4xl md:text-7xl leading-[60px] md:leading-[120px]'>Log in</p>
                            <p className='font-quicksand text-lg md:text-2xl mb-4'>This is a modern, responsive web application designed to help you manage your daily tasks efficiently. The Todo App allows you to organize your tasks with ease, providing a user-friendly interface and a seamless user experience. More info on <Link href={`/`} className='mx-1 text-blue-300 font-bold'>home page</Link>.</p>
                            <label className='flex items-center mb-4'>
                                <Checkbox size='small' checked={agree} onChange={() => setAgree(!agree)} className='mr-2'/>
                                <p className='font-quicksand text-sm md:text-lg'>I agree to the <Link href='/documents/terms-of-service' className='text-blue-300'>Terms of Service</Link> and <Link href='/documents/privacy-policy' className='text-blue-300'>Privacy Policy</Link>.</p>
                            </label>
                            <button onClick={() => signIn('google', { callbackUrl: '/work' })} disabled={!agree} className='w-[180px] h-[40px] text-lg md:w-[200px] md:h-[50px] md:text-2xl bg-gray-300 font-jost font-bold rounded-xl self-center hover:brightness-75 active:brightness-90 select-none disabled:opacity-50 disabled:cursor-not-allowed'>
                                Google
                            </button>
                        </div>
                    </div>
                </main>
            </Session>
        </SessionProvider>
    )
}