'use client'

import React, {Suspense, useState} from 'react'
import MenuAdditional from '@/components/Menu/MenuAdditional/MenuAdditional'
import Title from '@/components/UI/Title'
import Search from '@/components/Menu/Search/Search'
import MenuTasks from '@/components/Menu/MenuTasks/MenuTasks'
import Lists from '@/components/Menu/Lists/Lists'
import MenuIcon from '@mui/icons-material/Menu'
import useWindowWidth from '@/util/useWindowWidth'

const Menu = () => {

    const [show, setShow] = useState(true)

    const toggleMenu = (toggle: boolean) => {
        setShow(toggle)
    }

    const width = useWindowWidth()
    let menuClasses: string
    if (width && width <= 768) menuClasses = show ? 'fixed inset-0 z-40 w-screen flex flex-col justify-between p-[20px] bg-ground rounded-xl font-quicksand' : 'hidden'
    else menuClasses = show ? 'flex flex-col justify-between min-w-[325px] p-[20px] bg-ground rounded-xl font-quicksand' : 'hidden'

    if(!show) return <button className='self-start flex items-end h-[50px] mr-[40px]' onClick={() => toggleMenu(true)}><MenuIcon style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/></button>

    return (
        <nav className={menuClasses}>
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
            </div>
            <MenuAdditional/>
        </nav>
    )
}

export default Menu