'use client'

import React from 'react'
import TodoItem from '@/components/Table/DefaultTable/Todos/TodoItem/TodoItem'
import {ITodo} from '@/redux/Features/todosSlice'
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react'
import 'overlayscrollbars/styles/overlayscrollbars.css'

interface PropsType {
    todos: ITodo[]
    openTask: (task: ITodo) => void
}

const Todos = ({todos, openTask}: PropsType) => {
    return (
        <OverlayScrollbarsComponent className='my-[20px]'>
            <ol className='flex flex-col gap-[10px] max-h-[700px] pr-[10px]'>
                {todos?.map((todo, index) => <TodoItem key={todo.id} index={index} length={todos.length} todo={todo} openTask={openTask}/>)}
            </ol>
        </OverlayScrollbarsComponent>
    )
}

export default Todos