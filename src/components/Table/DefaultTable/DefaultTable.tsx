'use client'

import TableTitle from '@/components/UI/TableTitle'
import Todos from '@/components/Table/DefaultTable/Todos/Todos'
import {ITodo} from '@/redux/Features/todosSlice'
import {useSelector} from 'react-redux'
import React from 'react'
import {RootState} from '@/redux/store'
import {useSearchParams} from 'next/navigation'
import AddTodoForm from '@/components/Table/DefaultTable/next/AddTodoForm'

interface PropsType {
    openTask: (task: ITodo) => void
}

const DefaultTable = ({openTask}: PropsType) => {
    let todos = useSelector((state: RootState) => state.todoData.todos)
    const lists = useSelector((state: RootState) => state.listData.lists)
    const tags = useSelector((state: RootState) => state.tagData.tags)
    let title = 'Today'

    const searchParams = useSearchParams()
    const queryList = searchParams.get('list')
    const queryTag = searchParams.get('tag')
    const queryTitle = searchParams.get('title')

    if (queryList) {
        const index = lists.findIndex(list => list.name === queryList)
        if(index !== -1) {
            title = lists[index].name
            todos = todos.filter(todo => todo.list === lists[index].name)
        }
    }
    if (queryTag) {
        const index = tags.findIndex(tag => tag.name === queryTag)
        if(index !== -1) {
            title = tags[index].name
            todos = todos.filter(todo => todo.tags.includes(tags[index].id))
        }
    }
    if (queryTitle) {
        title = queryTitle
        todos = todos.filter(todo => todo.title.includes(queryTitle))
    }

    return (
        <section className='w-full flex flex-col justify-start p-[30px]'>
            <TableTitle title={title} count={todos?.length}/>
            <AddTodoForm/>
            <Todos todos={todos} openTask={openTask}/>
        </section>
    )
}

export default DefaultTable