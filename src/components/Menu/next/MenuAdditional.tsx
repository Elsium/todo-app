'use client'

import React from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { signOut } from 'next-auth/react'

const MenuAdditional = () => {
    return (
        <div>
            <button onClick={() => signOut({ callbackUrl: '/' })} className='w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] select-none hover:bg-listHover hover:font-bold'>
                <ExitToAppIcon/>
                <p>Sing out</p>
            </button>
        </div>
    )
}

export default MenuAdditional