'use client'

import React, {useCallback} from 'react'
import ListItem from './ListItem/ListItem'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import AddButton from '@/components/Menu/Lists/AddButton/AddButton'



const Lists = () => {
    const lists = useSelector((state: RootState) => state.listData.lists)
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
        [])

    const filterTodos = (list: string | undefined) => {
        const params = new URLSearchParams(searchParams.toString())
        if (params.get('list') === list) {
            return
        }
        router.push(pathname)
        list && router.push(`${pathname}?${createQueryString('list', list)}`)
    }

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>LISTS</p>
            {lists.map(list => <ListItem key={list.id} filterTodos={filterTodos} list={list} count={todos.filter(todo => !todo.completed && todo.list?.id === list.id).length}/>)}
            <AddButton />
        </div>
    )
}

export default Lists