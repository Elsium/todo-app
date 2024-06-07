'use client'

import TableTitle from '@/components/UI/TableTitle'
import Todos from '@/components/Table/DefaultTable/Todos/Todos'
import {ITodo} from '@/redux/Features/todosSlice'
import {useSelector} from 'react-redux'
import React, {useState} from 'react'
import {RootState} from '@/redux/store'
import {useSearchParams} from 'next/navigation'
import AddTodoForm from '@/components/Table/DefaultTable/AddTodoForm/AddTodoForm'

interface PropsType {
    openTask: (task: ITodo) => void
}

const DefaultTable = ({openTask}: PropsType) => {
    let todos = useSelector((state: RootState) => state.todoData.todos)
    let title = 'All'

    const lists = useSelector((state: RootState) => state.listData.lists)
    const tags = useSelector((state: RootState) => state.tagData.tags)
    const [areCompletedCollapsed, setAreCompletedCollapsed] = useState(true)
    const searchParams = useSearchParams()

    const queryList = searchParams.get('list')
    const queryTag = searchParams.get('tag')
    const queryTitle = searchParams.get('title')

    if (queryList) {
        const index = lists.findIndex(list => list.name === queryList)
        if(index !== -1) {
            title = lists[index].name
            todos = todos.filter(todo => todo.list?.name === lists[index].name)
        }
    }
    if (queryTag) {
        const index = tags.findIndex(tag => tag.name === queryTag)
        if(index !== -1) {
            title = tags[index].name
            todos = todos.filter(todo => todo.tags.includes(tags[index]))
        }
    }
    if (queryTitle) {
        title = queryTitle
        todos = todos.filter(todo => todo.title.includes(queryTitle))
    }

    if (todos.length > 0) todos = [...todos].sort((a,b) => {
        if (a.completed && !b.completed) return 1
        if (b.completed && !a.completed) return -1
        return 0
    })

    todos = areCompletedCollapsed ? todos.filter(todo => !todo.completed) : todos

    const completedCollapsed = () => {
        setAreCompletedCollapsed(!areCompletedCollapsed)
    }

    return (
        <section className='w-full flex flex-col justify-start px-[10px] py-[10px] md:p-[30px] select-none'>
            <TableTitle title={title} count={todos?.filter(todo => !todo.completed).length}/>
            <AddTodoForm completedCollapsed={completedCollapsed} areCompletedCollapsed={areCompletedCollapsed}/>
            <Todos todos={todos} openTask={openTask}/>
        </section>
    )
}

export default DefaultTable