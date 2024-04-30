'use client'
import React from 'react'
import TodoItem from '@/app/components/Table/DefaultTable/Todos/TodoItem/TodoItem'
import {Todo} from '@/app/redux/Features/todosSlice'

interface PropsType {
    todos: Todo[]
    openTask: (task: Todo) => void
}

const Todos = ({todos, openTask}: PropsType) => {
    return (
        <ol>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} openTask={openTask}/>)}
        </ol>
    )
}

export default Todos