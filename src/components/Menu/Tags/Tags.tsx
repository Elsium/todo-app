'use client'

import React, {useCallback} from 'react'
import TagItem from './TagItem/TagItem'
import AddIcon from '@mui/icons-material/Add'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

const Tags = () => {
    const Tags = useSelector((state: RootState) => state.tagData.tags)
    const todos = useSelector((state: RootState) => state.todoData.todos)

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams()
            params.set(name, value)

            return params.toString()
        },
        []
    )

    const filterTodos = (tag: string | undefined) => {
        const params = new URLSearchParams(searchParams.toString())
        if (params.get('tag') === tag) {
            router.push(pathname)
            return
        }
        tag && router.push(`${pathname}?${createQueryString('tag', tag)}`)
    }

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>TAGS</p>
            <div className='flex flex-wrap gap-[10px]'>
                {Tags?.map(tag => <TagItem key={tag.id} filterTodos={filterTodos} tag={tag}/>)}
                <button className='flex items-center justify-start h-7 px-[10px] rounded gap-[10px] hover:bg-listHover'>
                    <AddIcon/>
                    <p className='text-xs'>Add Tag</p>
                </button>
            </div>
        </div>
    )
}

export default Tags