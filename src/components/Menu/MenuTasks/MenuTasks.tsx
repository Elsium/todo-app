'use client'

import React, {useCallback} from 'react'
import s from './MenuTasks.module.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl'
import StickyNote2Icon from '@mui/icons-material/StickyNote2'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const MenuTasks = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const todos = useSelector((state: RootState) => state.todoData.todos)
    const stickers = useSelector((state: RootState) => state.stickerData.stickers)

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams()
            params.set(name, value)

            return params.toString()
        }, []
    )

    const upcoming = () => {
        const params = new URLSearchParams(searchParams.toString())
        if (params.get('upcoming') === 'true') {
            return
        }
        router.push(`${pathname}?${createQueryString('upcoming', 'true')}`)
    }

    const sticky = () => {
        const params = new URLSearchParams(searchParams.toString())
        if (params.get('upcoming') === 'true') {
            return
        }
        router.push(`${pathname}?${createQueryString('sticky', 'true')}`)
    }

    const toAll = () => {
        router.push(pathname)
    }

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>TASKS</p>
            <button className={s.btn} onClick={upcoming}>
                <div>
                    <KeyboardDoubleArrowRightIcon/>
                    <p>Upcoming</p>
                </div>
                <p>{0}</p>
            </button>
            <button className={s.btn} onClick={toAll}>
                <div>
                    <ChecklistRtlIcon/>
                    <p>All</p>
                </div>
                <p>{todos?.filter(todo => !todo.completed).length}</p>
            </button>
            <button className={s.btn} onClick={sticky}>
                <div>
                    <StickyNote2Icon/>
                    <p>Sticky Wall</p>
                </div>
                <p>{stickers?.length}</p>
            </button>
        </div>
    )
}

export default MenuTasks