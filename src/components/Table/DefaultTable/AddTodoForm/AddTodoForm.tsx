import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { addTodoAndUpload } from '@/redux/Features/todosSlice'
import {useSession} from 'next-auth/react'
import AddIcon from '@mui/icons-material/Add'
import {AppDispatch} from '@/redux/store'
import {Checkbox} from '@mui/material'

interface PropsType {
    completedCollapsed: () => void
    areCompletedCollapsed: boolean
}

const AddTodoForm = ({completedCollapsed, areCompletedCollapsed}: PropsType) => {
    const { data: session } = useSession()
    const accessToken = session?.accessToken
    const dispatch = useDispatch<AppDispatch>()
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (data, { resetForm }) => {
            if (accessToken && data.title.length > 0) {
                dispatch(addTodoAndUpload({title: data.title, accessToken}))
                resetForm()
            } else {
                console.error('Access token is not available.')
            }
        }
    })

    return (
        <div className='mt-[20px] flex justify-between items-center border border-gray-300 rounded px-2'>
            <form onSubmit={formik.handleSubmit} className="flex items-center w-[80%]">
                <button type="submit" className=" outline-none focus:text-[#fed439]">
                    <AddIcon/>
                </button>
                <input
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    placeholder="Add a new task"
                    className="flex-1 p-2 outline-none"
                />
            </form>
            <label className='flex items-center gap-[10px] border-l border-gray-300'>
                <Checkbox size="small" value={!areCompletedCollapsed} onChange={completedCollapsed}/>
                <p className='font-poppins cursor-pointer'>Completed</p>
            </label>
        </div>
    )
}

export default AddTodoForm