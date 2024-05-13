'use client'

import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {ITodo, toggleTodoCompletedAndUpload} from '@/redux/Features/todosSlice'
import {useSession} from 'next-auth/react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/redux/store'
import {Checkbox} from '@mui/material'

interface PropsType {
    todo: ITodo
    length: number
    index: number
    openTask: (task: ITodo) => void
}

const TodoItem = ({todo, openTask, length, index}: PropsType) => {
    const { data: session } = useSession()
    const accessToken = session?.accessToken || 'none'
    const dispatch = useDispatch<AppDispatch>()

    const lists = useSelector((state: RootState) => state.listData.lists)
    const tags = useSelector((state: RootState) => state.tagData.tags)

    return (
        <>
            <li className='flex justify-between w-full hover:bg-ground rounded'>
                <div className='flex justify-start items-start w-full'>
                    <div className='flex'>
                        <Checkbox checked={todo.completed} onChange={() => dispatch(toggleTodoCompletedAndUpload({id: todo.id, accessToken}))}/>
                    </div>
                    <button onClick={() => openTask(todo)} className='flex flex-col justify-start w-full gap-[5px] py-[10px] ml-[15px]'>
                        <p className='font-poppins'>
                            {todo.title}
                        </p>
                        <div className='flex justify-start items-center gap-[10px] font-jost'>
                            {todo.dueDate && <p>date</p>}
                            {todo.list && <div className='flex items-center gap-[5px]'>
                                <div className='rounded w-[13px] h-[13px]' style={{background: lists.find(l => l.name === todo.list)?.color}}/>
                                <p>{todo.list}</p>
                            </div>}
                            {todo.subtasks.length > 0 && <p>subtasks count</p>}
                            {todo.tags.length > 0 && <p>tags</p>}
                        </div>
                    </button>
                </div>
                <button onClick={() => openTask(todo)} className='flex items-start'>
                    <NavigateNextIcon  style={{fontSize: '2rem'}} className='text-[#7c7c7c]'/>
                </button>
            </li>
            {index < length - 1 && <div className="w-full h-[1px] bg-gray-300"/>}
        </>
    )
}

export default TodoItem