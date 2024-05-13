import React from 'react'
import {ISubtask, toggleSubtaskCompletedAndUpload, deleteSubtaskAndUpload} from '@/redux/Features/todosSlice'
import {Checkbox} from '@mui/material'
import {useSession} from 'next-auth/react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '@/redux/store'
import CloseIcon from '@mui/icons-material/Close'

interface PropsType {
    subtask: ISubtask
    todoId: number
}

const SubtaskItem = ({subtask, todoId}: PropsType) => {
    const { data: session } = useSession()
    const accessToken = session?.accessToken || 'none'
    const dispatch = useDispatch<AppDispatch>()

    return (
        <li className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
                <Checkbox size='small' checked={subtask.completed} onChange={() => dispatch(toggleSubtaskCompletedAndUpload({todoId, subtaskId: subtask.id, accessToken}))}/>
                <p className='font-bold'>{subtask.title}</p>
            </div>
            <button type='button' onClick={() => dispatch(deleteSubtaskAndUpload({todoId, subtaskId: subtask.id, accessToken}))}>
                <CloseIcon className='text-xl'/>
            </button>
        </li>
    )
}

export default SubtaskItem