'use client'

import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import HomeIcon from '@mui/icons-material/Home'
import { signOut } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import s from './MenuAdditional.module.css'

const MenuAdditional = () => {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => router.push('/')} className={s.btn}>
                <HomeIcon/>
                <p>Main</p>
            </button>
            <button onClick={() => signOut({ callbackUrl: '/' })} className={s.btn}>
                <ExitToAppIcon/>
                <p>Sing out</p>
            </button>
        </div>
    )
}

export default MenuAdditional