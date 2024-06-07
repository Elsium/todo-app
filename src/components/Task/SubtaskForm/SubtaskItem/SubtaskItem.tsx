import React from 'react'
import {ISubtask, toggleSubtaskCompletedAndUpload, deleteSubtaskAndUpload} from '@/redux/Features/todosSlice'
import {Checkbox} from '@mui/material'
import {useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'
import CloseIcon from '@mui/icons-material/Close'
import useWindowWidth from '@/util/useWindowWidth'

interface PropsType {
    subtask: ISubtask
    todoId: number
}

const SubtaskItem = ({subtask, todoId}: PropsType) => {
    const width = useWindowWidth()
    const { data: session } = useSession()
    const accessToken = session?.accessToken || 'none'
    const dispatch = useDispatch<AppDispatch>()

    return (
        <li className='flex w-full items-center justify-between pr-[10px]'>
            <div className='flex items-center gap-[10px]'>
                <Checkbox sx={width && width > 768 ? {'& .MuiSvgIcon-root':{ fontSize: 26 }} : {'& .MuiSvgIcon-root':{ fontSize: 18 }}} checked={subtask.completed} onChange={() => dispatch(toggleSubtaskCompletedAndUpload({todoId, subtaskId: subtask.id, accessToken}))}/>
                <p className='text-sm md:text-base font-bold'>{subtask.title}</p>
            </div>
            <button type='button' onClick={() => dispatch(deleteSubtaskAndUpload({todoId, subtaskId: subtask.id, accessToken}))}>
                <CloseIcon className='text-lg md:text-xl'/>
            </button>
        </li>
    )
}

export default SubtaskItem