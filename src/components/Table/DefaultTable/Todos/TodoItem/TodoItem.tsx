'use client'

import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {ITodo, toggleTodoCompletedAndUpload} from '@/redux/Features/todosSlice'
import {useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'

interface PropsType {
    todo: ITodo
    openTask: (task: ITodo) => void
}

const TodoItem = ({todo, openTask}: PropsType) => {
    const { data: session } = useSession()
    const accessToken = session?.accessToken || 'none'
    const dispatch = useDispatch<AppDispatch>()
    return (
        <li className='flex items-center justify-between w-full h-[50px]'>
            <div className='flex items-center'>
                <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodoCompletedAndUpload({id: todo.id, accessToken}))}/>
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