'use client'

import MenuAdditional from '@/app/components/Menu/next/MenuAdditional'
import Title from '@/app/components/UI/Title'
import Search from '@/app/components/Menu/next/Search'
import MenuTasks from '@/app/components/Menu/next/MenuTasks/MenuTasks'
import Lists from '@/app/components/Menu/Lists/Lists'
import Tags from '@/app/components/Menu/Tags/Tags'
import MenuIcon from '@mui/icons-material/Menu'
import {useState} from 'react'

const Menu = () => {

    const [show, setShow] = useState(true)

    const toggleMenu = (toggle: boolean) => {
        setShow(toggle)
    }

    if(!show) return <button className='self-start flex items-end h-[50px] mr-[40px]' onClick={() => toggleMenu(true)}><MenuIcon style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/></button>

    return (
        <nav className='flex flex-col justify-between basis-[300px] min-w-[300px] p-[20px] bg-[#f4f4f4] rounded-xl font-quicksand'>
            <div className='w-full flex flex-col gap-[20px]'>
                <Title title={'Menu'} Icon={MenuIcon} onClick={toggleMenu}/>
                <Search/>
                <MenuTasks/>
                <hr/>
                <Lists/>
                <hr/>
                <Tags/>
            </div>
            <MenuAdditional/>
        </nav>
    )
}

export default Menu