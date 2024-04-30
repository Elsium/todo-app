'use client'

import ListItem from './ListItem/ListItem'
import AddIcon from '@mui/icons-material/Add'
import {useSelector} from 'react-redux'
import {RootState} from '@/app/redux/store'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'
import {useCallback} from 'react'



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
        [searchParams]
    )

    const filterTodos = (list: string | undefined) => {
        const params = new URLSearchParams(searchParams.toString())
        if (params.get('list') === list) {
            router.push(pathname)
            return
        }
        router.push(pathname)
        list && router.push(`${pathname}?${createQueryString('list', list)}`)
    }

    return (
        <div className='flex flex-col items-start gap-[5px] select-none'>
            <p className='font-jost font-bold text-xs'>LISTS</p>
            {lists.map(list => <ListItem key={list.id} filterTodos={filterTodos} list={list} count={todos.filter(todo => todo.list === list.id).length}/>)}
            <button className='w-full flex items-center justify-start py-[5px] px-[10px] rounded gap-[10px] hover:bg-[#ebebeb]'>
                <AddIcon/>
                <p>Add New List</p>
            </button>
        </div>
    )
}

export default Lists