'use client'

import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import {ITodo, toggleTodoCompletedAndUpload} from '@/redux/Features/todosSlice'
import {useSession} from 'next-auth/react'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/redux/store'
import {Checkbox} from '@mui/material'
import s from './TodoItem.module.css'
import TodayIcon from '@mui/icons-material/Today'
import dayjs from 'dayjs'
import useWindowWidth from '@/util/useWindowWidth'

interface PropsType {
    todo: ITodo
    length: number
    index: number
    openTask: (task: ITodo) => void
}

const TodoItem = ({todo, openTask, length, index}: PropsType) => {
    const width = useWindowWidth()
    const { data: session } = useSession()
    const accessToken = session?.accessToken || 'none'
    const dispatch = useDispatch<AppDispatch>()

    const tags = useSelector((state: RootState) => state.tagData.tags)

    return (
        <>
            <li className='flex justify-between w-full transition-colors duration-300 ease-linear hover:bg-ground rounded'>
                <div className='flex justify-start items-start w-full'>
                    <div className='flex justify-center items-center'>
                        <Checkbox sx={width && width > 768 ? {'& .MuiSvgIcon-root':{ fontSize: 26 }} : {'& .MuiSvgIcon-root':{ fontSize: 18 }}} checked={todo.completed} onChange={() => dispatch(toggleTodoCompletedAndUpload({id: todo.id, accessToken}))}/>
                    </div>
                    <button onClick={() => openTask(todo)} className='flex flex-col justify-start w-full gap-[5px] py-[10px] ml-[5px] md:ml-[15px]'>
                        <p className={`font-poppins ${todo.completed && 'line-through'} text-sm md:text-base`}>
                            {todo.title}
                        </p>
                        <div className='flex justify-start items-center gap-[5px] md:gap-[10px] font-jost'>
                            {todo.dueDate && <div className={`flex items-center gap-[2.5px] md:gap-[5px] text-sm ${todo.list || todo.subtasks.length > 0 || todo.tags.length > 0 ? s.line : ''}`}>
                                <TodayIcon className='md:text-base text-sm'/>
                                <p className={`${dayjs(todo.dueDate).valueOf() < Date.now() && 'text-red-500'} text-xs md:text-sm`}>{dayjs(todo.dueDate).toDate().toDateString()}</p>
                            </div>}
                            {todo.list && <div className={`flex items-center gap-[2.5px] md:gap-[5px] ${todo.subtasks.length > 0 || todo.tags.length > 0 ? s.line : ''}`}>
                                <div className='rounded md:w-[13px] md:h-[13px] w-[8px] h-[8px]' style={{background: todo.list.color}}/>
                                <p className='text-sm md:text-base'>{todo.list.name}</p>
                            </div>}
                            {todo.subtasks.length > 0 && <div className={`flex gap-[2.5px] md:gap-[5px] items-center ${todo.tags.length > 0 ? s.line : ''}`}>
                                <p className='text-sm md:text-base'>Subtasks</p>
                                <p className='text-xs md:text-sm bg-listHover rounded px-[5px]'>{todo.subtasks.filter(s => s.completed).length}/{todo.subtasks.length}</p>
                            </div>}
                        </div>
                    </button>
                </div>
                <button onClick={() => openTask(todo)} className='flex items-start'>
                    <NavigateNextIcon style={width && width > 768 ? {fontSize: '2rem'} : {fontSize: '1.6rem'}} className='text-[#7c7c7c]'/>
                </button>
            </li>
            {index < length - 1 && <div className="w-full min-h-[1px] bg-gray-300"/>}
        </>
    )
}

export default TodoItem