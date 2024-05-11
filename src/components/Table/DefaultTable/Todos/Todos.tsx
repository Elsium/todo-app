'use client'
import React from 'react'
import TodoItem from '@/components/Table/DefaultTable/Todos/TodoItem/TodoItem'
import {ITodo} from '@/redux/Features/todosSlice'

interface PropsType {
    todos: ITodo[]
    openTask: (task: ITodo) => void
}

const Todos = ({todos, openTask}: PropsType) => {
    return (
        <ol className='flex flex-col gap-[10px] py-[20px]'>
            {todos?.map((todo, index) => <TodoItem key={todo.id} index={index} length={todos.length} todo={todo} openTask={openTask}/>)}
        </ol>
    )
}

export default Todos