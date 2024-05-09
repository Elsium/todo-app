'use client'

import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {Todo} from '@/redux/Features/todosSlice'

interface PropsType {
    todo: Todo
    openTask: (task: Todo) => void
}

const TodoItem = ({todo, openTask}: PropsType) => {
    return (
        <li className='flex items-center justify-between w-full h-[50px]'>
            <div className='flex items-center'>
                <input type="checkbox"/>
                <button onClick={() => openTask(todo)} className='ml-[15px]'>
                    {todo.title}
                </button>
            </div>
            <button onClick={() => openTask(todo)} className='shrink-0 h-[50px]'>
                <NavigateNextIcon  style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/>
            </button>
        </li>
    )
}

export default TodoItem