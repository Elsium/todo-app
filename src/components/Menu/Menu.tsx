'use client'

import MenuAdditional from '@/components/Menu/next/MenuAdditional'
import Title from '@/components/UI/Title'
import Search from '@/components/Menu/next/Search'
import MenuTasks from '@/components/Menu/next/MenuTasks/MenuTasks'
import Lists from '@/components/Menu/Lists/Lists'
import Tags from '@/components/Menu/Tags/Tags'
import MenuIcon from '@mui/icons-material/Menu'
import {Suspense, useState} from 'react'

const Menu = () => {

    const [show, setShow] = useState(true)

    const toggleMenu = (toggle: boolean) => {
        setShow(toggle)
    }

    if(!show) return <button className='self-start flex items-end h-[50px] mr-[40px]' onClick={() => toggleMenu(true)}><MenuIcon style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/></button>

    return (
        <nav className='flex flex-col justify-between basis-[300px] min-w-[300px] p-[20px] bg-ground rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Menu'} Icon={MenuIcon} onClick={toggleMenu}/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Search/>
                </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <MenuTasks/>
                </Suspense>
                <hr/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Lists/>
                </Suspense>
                <hr/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Tags/>
                </Suspense>
            </div>
            <MenuAdditional/>
        </nav>
    )
}

export default Menu