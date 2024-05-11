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
        <ol>
            {todos?.map(todo => <TodoItem key={todo.id} todo={todo} openTask={openTask}/>)}
        </ol>
    )
}

export default Todos