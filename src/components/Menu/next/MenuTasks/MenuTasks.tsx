'use client'

import s from './MenuTasks.module.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'

const MenuTasks = () => {
    const todos = useSelector((state: RootState) => state.todoData.todos)
    const stickers = useSelector((state: RootState) => state.stickerData.stickers)

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>TASKS</p>
            <button className={s.btn}>
                <div>
                    <KeyboardDoubleArrowRightIcon/>
                    <p>Upcoming</p>
                </div>
                <p>{todos.length}</p>
            </button>
            <button className={s.btn}>
                <div>
                    <ChecklistRtlIcon/>
                    <p>Today</p>
                </div>
                <p>{todos.length}</p>
            </button>
            <button className={s.btn}>
                <div>
                    <StickyNote2Icon/>
                    <p>Sticky Wall</p>
                </div>
                <p>{stickers.length}</p>
            </button>
        </div>
    )
}

export default MenuTasks