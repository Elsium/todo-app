'use client'

import React from 'react'
import {deleteTodoAndUpload, ITodo} from '@/redux/Features/todosSlice'
import {AppDispatch} from '@/redux/store'
import {useDispatch} from 'react-redux'
import {useSession} from 'next-auth/react'
import {FormikProps} from 'formik'

interface PropsType {
    todo: ITodo
    closeTask: () => void
    formik: FormikProps<Partial<ITodo>>
}

const TaskAdditional = ({todo, closeTask, formik}: PropsType) => {
    const dispatch = useDispatch<AppDispatch>()
    const { data: session } = useSession()
    const accessToken = session?.accessToken || 'none'

    const onDelete = (id: number) => {
        dispatch(deleteTodoAndUpload({id, accessToken}))
        closeTask()
    }

    const onClick = () => {
        formik.submitForm()
        closeTask()
    }

    return (
        <div className='flex justify-between items-center'>
            <button className='border-[#cbcbcb] w-[45%] h-[50px] text-base border font-jost font-bold
            rounded-xl self-center hover:brightness-75 active:brightness-90 select-none' onClick={() => onDelete(todo.id)}>
                Delete task
            </button>
            <button className='bg-[#fed439] w-[45%] h-[50px] text-base font-jost font-bold rounded-xl
            self-center hover:brightness-75 active:brightness-90 select-none' onClick={onClick}>
                Save changes
            </button>
        </div>
    )
}

export default TaskAdditional